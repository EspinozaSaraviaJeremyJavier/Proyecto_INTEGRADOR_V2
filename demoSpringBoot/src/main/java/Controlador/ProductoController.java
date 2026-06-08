package Controlador;

import Modelo.Producto;
import Repositorio.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * ProductoController — Sweet Cream Rose
 * ─────────────────────────────────────────────────────────────────────────────
 * Controlador REST que gestiona todas las operaciones sobre productos de la
 * repostería artesanal. Se integra con React en http://localhost:3000
 *
 * Endpoints:
 *   GET  /api/productos              → Lista todos los productos (para la tienda)
 *   GET  /api/productos/buscar?q=X   → Busca productos por nombre (barra de búsqueda)
 *   POST /api/productos/guardar      → Admin guarda un nuevo producto con imagen
 *   PUT  /api/productos/{id}         → Admin actualiza un producto existente
 *   DELETE /api/productos/{id}       → Admin elimina un producto
 * ─────────────────────────────────────────────────────────────────────────────
 */
@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:3000") // Permite conexión con React
public class ProductoController {

    @Autowired
    private ProductoRepository productoRepo;

    // Directorio físico donde se guardan las imágenes subidas por el administrador
    private final String DIRECTORIO_UPLOADS = "src/main/resources/static/uploads/";

    // ══════════════════════════════════════════════════════════════════════════
    // ENDPOINT 1 — Listar todos los productos
    // URL: GET http://localhost:8081/api/productos
    // Usado por la sección "Lo Más Comprado" y la página Productos
    // ══════════════════════════════════════════════════════════════════════════
    @GetMapping
    public ResponseEntity<List<Producto>> listar() {
        // Obtiene todos los productos registrados en la base de datos
        List<Producto> productos = productoRepo.findAll();
        return ResponseEntity.ok(productos);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // ENDPOINT 2 — BUSCADOR: Filtra productos por nombre desde la barra de búsqueda
    // URL: GET http://localhost:8081/api/productos/buscar?q=chocolate
    // El parámetro 'q' viene del input de búsqueda del navbar en React
    // Ejemplo: Si el usuario escribe "chocolate", devuelve todos los productos
    //          que contengan "chocolate" en su nombre (sin importar mayúsculas)
    // ══════════════════════════════════════════════════════════════════════════
    @GetMapping("/buscar")
    public ResponseEntity<List<Producto>> buscarPorNombre(@RequestParam("q") String query) {

        // Si el query está vacío, devolver lista completa
        if (query == null || query.isBlank()) {
            return ResponseEntity.ok(productoRepo.findAll());
        }

        // Convertir a minúsculas para búsqueda sin distinción de mayúsculas/minúsculas
        String termino = query.toLowerCase().trim();

        // Filtrar en Java: busca si el nombre del producto contiene el texto buscado
        // Esto busca en el campo 'nombre' del producto usando Java Streams
        List<Producto> resultados = productoRepo.findAll()
            .stream()
            .filter(p -> p.getNombre() != null &&
                         p.getNombre().toLowerCase().contains(termino))
            .collect(Collectors.toList());

        // Devolver la lista filtrada (puede estar vacía si no hay coincidencias)
        return ResponseEntity.ok(resultados);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // ENDPOINT 3 — Admin guarda un nuevo producto con su imagen
    // URL: POST http://localhost:8081/api/productos/guardar
    // Recibe los datos como multipart/form-data (nombre, precio, descripcion, archivo)
    // ══════════════════════════════════════════════════════════════════════════
    @PostMapping("/guardar")
    public ResponseEntity<Producto> guardar(
            @RequestParam("nombre")      String nombre,
            @RequestParam("precio")      Double precio,
            @RequestParam("descripcion") String descripcion,
            @RequestParam(value = "archivo", required = false) MultipartFile archivo) throws IOException {

        // Crear el objeto Producto con los datos básicos del formulario
        Producto p = new Producto();
        p.setNombre(nombre);
        p.setPrecio(precio);
        p.setDescripcion(descripcion);

        // Procesar la imagen si fue enviada por el administrador
        if (archivo != null && !archivo.isEmpty()) {
            // Asegurar que el directorio de uploads exista en el servidor
            Path directorioPath = Paths.get(DIRECTORIO_UPLOADS);
            if (!Files.exists(directorioPath)) {
                Files.createDirectories(directorioPath);
            }

            // Generar un nombre único con timestamp para evitar colisiones de nombres
            String nombreArchivo = System.currentTimeMillis() + "_" + archivo.getOriginalFilename();
            Path rutaCompleta = directorioPath.resolve(nombreArchivo);

            // Guardar el archivo físicamente en el servidor
            Files.copy(archivo.getInputStream(), rutaCompleta);

            // Guardar la URL relativa accesible desde el navegador
            p.setImagenUrl("/uploads/" + nombreArchivo);
        } else {
            // Imagen por defecto si el admin no sube ninguna foto
            p.setImagenUrl("/uploads/default.png");
        }

        // Persistir el producto completo en la base de datos y devolverlo
        Producto guardado = productoRepo.save(p);
        return ResponseEntity.ok(guardado);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // ENDPOINT 4 — Admin actualiza datos de un producto existente
    // URL: PUT http://localhost:8081/api/productos/{id}
    // ══════════════════════════════════════════════════════════════════════════
    @PutMapping("/{id}")
    public ResponseEntity<?> actualizar(@PathVariable Long id, @RequestBody Producto datosActualizados) {
        return productoRepo.findById(id).map(p -> {
            // Actualizar solo los campos enviados
            if (datosActualizados.getNombre()      != null) p.setNombre(datosActualizados.getNombre());
            if (datosActualizados.getPrecio()      != null) p.setPrecio(datosActualizados.getPrecio());
            if (datosActualizados.getDescripcion() != null) p.setDescripcion(datosActualizados.getDescripcion());
            // Guardar cambios en la base de datos
            productoRepo.save(p);
            return ResponseEntity.ok(p);
        }).orElse(ResponseEntity.notFound().build());
    }

    // ══════════════════════════════════════════════════════════════════════════
    // ENDPOINT 5 — Admin elimina un producto por su ID
    // URL: DELETE http://localhost:8081/api/productos/{id}
    // ══════════════════════════════════════════════════════════════════════════
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Long id) {
        // Verificar existencia antes de eliminar
        if (!productoRepo.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        productoRepo.deleteById(id);
        return ResponseEntity.ok("Producto eliminado correctamente.");
    }
}