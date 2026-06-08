package Controlador;

import Modelo.Usuario;
import Repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UsuarioRepository usuarioRepo;

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody LoginRequest req) {
        Map<String, Object> respuesta = new HashMap<>();

        // Corregido: findByCorreo ahora devuelve Optional
        Optional<Usuario> userOpt = usuarioRepo.findByCorreo(req.getCorreo());

        if (userOpt.isEmpty() || !userOpt.get().getPassword().equals(req.getPassword())) {
            respuesta.put("mensaje", "Correo o contraseña incorrectos.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(respuesta);
        }

        Usuario usuario = userOpt.get();
        respuesta.put("id", usuario.getId());
        respuesta.put("nombre", usuario.getNombre());
        respuesta.put("correo", usuario.getCorreo());
        // Corregido: rolId en lugar de getRol()
        respuesta.put("rol", usuario.getRolId() == 1 ? "ADMIN" : "CLIENTE");
        respuesta.put("mensaje", "Login exitoso.");

        return ResponseEntity.ok(respuesta);
    }

    @PostMapping("/registrar")
    public ResponseEntity<Map<String, Object>> registrar(@RequestBody RegistroRequest req) {
        Map<String, Object> respuesta = new HashMap<>();

        if (usuarioRepo.findByCorreo(req.getCorreo()).isPresent()) {
            respuesta.put("mensaje", "Ese correo ya está registrado.");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(respuesta);
        }

        if (req.getNombre() == null || req.getNombre().isBlank()
         || req.getCorreo() == null || req.getCorreo().isBlank()
         || req.getPassword() == null || req.getPassword().isBlank()) {
            respuesta.put("mensaje", "Todos los campos son obligatorios.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(respuesta);
        }

        Usuario nuevo = new Usuario();
        nuevo.setNombre(req.getNombre());
        nuevo.setCorreo(req.getCorreo());
        nuevo.setPassword(req.getPassword());
        nuevo.setRolId(2); // 2 para CLIENTE
        usuarioRepo.save(nuevo);

        respuesta.put("mensaje", "Registro exitoso.");
        return ResponseEntity.status(HttpStatus.CREATED).body(respuesta);
    }

    static class LoginRequest {
        private String correo;
        private String password;
        public String getCorreo() { return correo; }
        public void setCorreo(String correo) { this.correo = correo; }
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }

    static class RegistroRequest {
        private String nombre;
        private String correo;
        private String password;
        public String getNombre() { return nombre; }
        public void setNombre(String nombre) { this.nombre = nombre; }
        public String getCorreo() { return correo; }
        public void setCorreo(String correo) { this.correo = correo; }
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }
}