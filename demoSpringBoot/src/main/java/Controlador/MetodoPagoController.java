package Controlador;

import Modelo.MetodoPago;
import Repositorio.MetodoPagoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/metodos-pago")
@CrossOrigin(origins = "http://localhost:3000")
public class MetodoPagoController {

    @Autowired
    private MetodoPagoRepository metodoRepo;

    @GetMapping("/usuario/{usuId}")
    public List<MetodoPago> listar(@PathVariable Long usuId) {
        return metodoRepo.findByUsuarioId(usuId);
    }

    @PostMapping("/guardar")
    public ResponseEntity<?> guardar(@RequestBody MetodoPago nuevoMetodo) {
        try {
            if (nuevoMetodo.isEsPrincipal()) {
                List<MetodoPago> actuales = metodoRepo.findByUsuarioId(nuevoMetodo.getUsuario().getId());
                actuales.forEach(m -> m.setEsPrincipal(false));
                metodoRepo.saveAll(actuales);
            }
            
            MetodoPago guardado = metodoRepo.save(nuevoMetodo);
            return ResponseEntity.ok(guardado);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error: " + e.getMessage());
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Long id) {
        metodoRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }
}