package Controlador;

import Modelo.Orden;
import Modelo.Usuario;
import Repositorio.OrdenRepository;
import Repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/perfil")
@CrossOrigin(origins = "http://localhost:3000")
public class PerfilController {

    @Autowired
    private OrdenRepository ordenRepo;

    @Autowired
    private UsuarioRepository usuarioRepo;

    @GetMapping("/usuario/{id}")
    public ResponseEntity<Usuario> obtenerDatosUsuario(@PathVariable Long id) {
        return usuarioRepo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/pedidos/{usuId}")
    public List<Orden> listarPedidos(@PathVariable Long usuId, 
                                     @RequestParam(required = false) String estado) {
        if (estado == null || estado.equalsIgnoreCase("Todos")) {
            return ordenRepo.findByUsuario_IdOrderByFechaDesc(usuId);
        }
        return ordenRepo.findByUsuario_IdAndEstado(usuId, Orden.EstadoOrden.valueOf(estado));
    }

    @PutMapping("/usuario/actualizar/{id}")
    public ResponseEntity<?> actualizarDatos(@PathVariable Long id, @RequestBody Usuario datosActualizados) {
        return usuarioRepo.findById(id).map(u -> {
            u.setNombre(datosActualizados.getNombre());
            u.setApellido(datosActualizados.getApellido());
            u.setTelefono(datosActualizados.getTelefono());
            u.setDireccion(datosActualizados.getDireccion());
            usuarioRepo.save(u);
            return ResponseEntity.ok("Información actualizada");
        }).orElse(ResponseEntity.notFound().build());
    }
}