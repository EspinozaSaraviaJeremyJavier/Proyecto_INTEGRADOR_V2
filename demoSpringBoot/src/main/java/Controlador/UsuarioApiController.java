package Controlador;

import Modelo.Usuario;
import Repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios") // Ajustado a lo que pusimos en React
@CrossOrigin(origins = "http://localhost:3000")
public class UsuarioApiController {

    @Autowired
    private UsuarioRepository usuarioRepo;

    @PostMapping("/registrar")
    public ResponseEntity<?> registrarUsuario(@RequestBody Usuario usuario) {
        try {
            if (usuarioRepo.findByCorreo(usuario.getCorreo()).isPresent()) {
                return ResponseEntity.badRequest().body("El correo ya está registrado");
            }
            usuario.setRolId(2); // 2 = CLIENTE
            Usuario guardado = usuarioRepo.save(usuario);
            return ResponseEntity.ok(guardado);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUsuario(@RequestBody Usuario loginData) {
        Optional<Usuario> userOpt = usuarioRepo.findByCorreo(loginData.getCorreo());

        if (userOpt.isPresent() && userOpt.get().getPassword().equals(loginData.getPassword())) {
            return ResponseEntity.ok(userOpt.get());
        } else {
            return ResponseEntity.status(401).body("Credenciales incorrectas");
        }
    }
}