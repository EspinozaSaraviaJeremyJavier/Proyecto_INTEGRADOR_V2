package Controlador;

import Modelo.Direccion;
import Repositorio.DireccionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/direcciones")
@CrossOrigin(origins = "http://localhost:3000")
public class DireccionController {

    @Autowired
    private DireccionRepository direccionRepo;

    @GetMapping("/usuario/{usuId}")
    public List<Direccion> listarPorUsuario(@PathVariable Long usuId) {
        return direccionRepo.findByUsuarioId(usuId);
    }

    @PostMapping("/guardar")
    public ResponseEntity<?> guardarDireccion(@RequestBody Direccion nuevaDireccion) {
        try {
            if (nuevaDireccion.isEsPrincipal()) {
                List<Direccion> actuales = direccionRepo.findByUsuarioId(nuevaDireccion.getUsuario().getId());
                actuales.forEach(d -> d.setEsPrincipal(false));
                direccionRepo.saveAll(actuales);
            }
            
            Direccion guardada = direccionRepo.save(nuevaDireccion);
            return ResponseEntity.ok(guardada);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error al guardar: " + e.getMessage());
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Long id) {
        direccionRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }
}