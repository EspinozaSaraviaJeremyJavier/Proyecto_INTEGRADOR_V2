package Controlador;

import Modelo.Producto;
import Repositorio.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:3000") // Permite conexión con React
public class ProductoController {

    @Autowired
    private ProductoRepository productoRepo;

    // Ruta en el servidor donde se guardarán físicamente las imágenes subidas
    private final String DIRECTORIO_UPLOADS = "src/main/resources/static/uploads/";

    // Obtener todos los productos para la tienda
    @GetMapping
    public List<Producto> listar() {
        return productoRepo.findAll();
    }

    // Guardar nuevo producto con imagen desde el Admin
    @PostMapping("/guardar")
    public Producto guardar(
            @RequestParam("nombre") String nombre,
            @RequestParam("precio") Double precio,
            @RequestParam("descripcion") String descripcion,
            @RequestParam("archivo") MultipartFile archivo) throws IOException {

        Producto p = new Producto();
        p.setNombre(nombre);
        p.setPrecio(precio);
        p.setDescripcion(descripcion);

        // Lógica para guardar la imagen de forma física y asegurar que el método compile sin errores
        if (!archivo.isEmpty()) {
            // Asegurar que el directorio de subida exista en el proyecto
            Path directorioPath = Paths.get(DIRECTORIO_UPLOADS);
            if (!Files.exists(directorioPath)) {
                Files.createDirectories(directorioPath);
            }

            // Crear un nombre único para el archivo o usar el original
            String nombreArchivo = System.currentTimeMillis() + "_" + archivo.getOriginalFilename();
            Path rutaCompleta = directorioPath.resolve(nombreArchivo);
            
            // Guardar el archivo en el disco duro/proyecto
            Files.copy(archivo.getInputStream(), rutaCompleta);

            // Guardar la URL o ruta de texto accesible en el objeto Producto
            p.setImagenUrl("/uploads/" + nombreArchivo);
        } else {
            // Imagen por defecto si el administrador no sube ninguna foto
            p.setImagenUrl("/uploads/default.png");
        }

        return productoRepo.save(p);
    }
}