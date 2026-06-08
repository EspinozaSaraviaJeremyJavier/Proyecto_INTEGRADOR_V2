package Controlador;

import Modelo.Usuario;
import Repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/configuracion")
@CrossOrigin(origins = "http://localhost:3000")
public class ConfiguracionController {

    @Autowired
    private UsuarioRepository usuarioRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    // 1. Actualizar Información de la cuenta
    @PutMapping("/actualizar-datos/{id}")
    public ResponseEntity<?> actualizarDatos(@PathVariable Long id, @RequestBody Usuario datos) {
        return usuarioRepo.findById(id).map(user -> {
            user.setNombre(datos.getNombre());
            user.setTelefono(datos.getTelefono());
            user.setFechaNacimiento(datos.getFechaNacimiento());
            user.setGenero(datos.getGenero());
            usuarioRepo.save(user);
            return ResponseEntity.ok("Información de cuenta actualizada");
        }).orElse(ResponseEntity.notFound().build());
    }

    // 2. Cambiar Contraseña (Lógica para la sección "Cambiar contraseña")
    @PostMapping("/cambiar-password/{id}")
    public ResponseEntity<?> cambiarPassword(@PathVariable Long id, @RequestBody Map<String, String> passwords) {
        String actual = passwords.get("actual");
        String nueva = passwords.get("nueva");

        return usuarioRepo.findById(id).map(user -> {
            // Validar que la contraseña actual sea correcta
            if (!passwordEncoder.matches(actual, user.getPassword())) {
                return ResponseEntity.badRequest().body("La contraseña actual es incorrecta");
            }
            
            // Encriptar y guardar la nueva
            user.setPassword(passwordEncoder.encode(nueva));
            usuarioRepo.save(user);
            return ResponseEntity.ok("Contraseña actualizada exitosamente");
        }).orElse(ResponseEntity.notFound().build());
    }
}