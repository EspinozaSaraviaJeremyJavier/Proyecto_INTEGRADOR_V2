package Controlador;

import Modelo.Usuario;
import Repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UsuarioRepository usuarioRepo;

    @Autowired
    private JavaMailSender mailSender;

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

    @PostMapping("/olvido-password")
    public ResponseEntity<Map<String, Object>> olvidoPassword(@RequestBody EmailRequest req) {
        Map<String, Object> respuesta = new HashMap<>();
        if (req.getCorreo() == null || req.getCorreo().isBlank()) {
            respuesta.put("mensaje", "El correo es obligatorio.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(respuesta);
        }

        Optional<Usuario> usuarioOpt = usuarioRepo.findByCorreo(req.getCorreo());
        if (usuarioOpt.isEmpty()) {
            respuesta.put("mensaje", "Si el correo existe, recibirás un código para restablecer tu contraseña.");
            return ResponseEntity.ok(respuesta);
        }

        Usuario usuario = usuarioOpt.get();
        String codigo = generarCodigoTemporal();
        usuario.setPasswordResetCode(codigo);
        usuario.setPasswordResetExpiry(new Date(System.currentTimeMillis() + 15 * 60 * 1000));
        usuarioRepo.save(usuario);

        try {
            enviarCodigoPorCorreo(usuario.getCorreo(), codigo);
        } catch (Exception ex) {
            respuesta.put("mensaje", "No se pudo enviar el código por correo. Revisa la configuración de SMTP.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(respuesta);
        }

        respuesta.put("mensaje", "Te enviamos un código a tu correo para restablecer la contraseña.");
        return ResponseEntity.ok(respuesta);
    }

    @PostMapping("/restablecer-password")
    public ResponseEntity<Map<String, Object>> restablecerPassword(@RequestBody ResetPasswordRequest req) {
        Map<String, Object> respuesta = new HashMap<>();
        if (req.getCorreo() == null || req.getCorreo().isBlank()
         || req.getCodigo() == null || req.getCodigo().isBlank()
         || req.getNuevaPassword() == null || req.getNuevaPassword().isBlank()) {
            respuesta.put("mensaje", "Todos los campos son obligatorios.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(respuesta);
        }

        Optional<Usuario> usuarioOpt = usuarioRepo.findByCorreo(req.getCorreo());
        if (usuarioOpt.isEmpty()) {
            respuesta.put("mensaje", "Correo o código inválido.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(respuesta);
        }

        Usuario usuario = usuarioOpt.get();
        if (usuario.getPasswordResetCode() == null || !usuario.getPasswordResetCode().equals(req.getCodigo())
         || usuario.getPasswordResetExpiry() == null || usuario.getPasswordResetExpiry().before(new Date())) {
            respuesta.put("mensaje", "Código inválido o expirado.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(respuesta);
        }

        usuario.setPassword(req.getNuevaPassword());
        usuario.setPasswordResetCode(null);
        usuario.setPasswordResetExpiry(null);
        usuarioRepo.save(usuario);

        respuesta.put("mensaje", "Contraseña actualizada correctamente.");
        return ResponseEntity.ok(respuesta);
    }

    private String generarCodigoTemporal() {
        Random random = new Random();
        int codigo = 100000 + random.nextInt(900000);
        return String.valueOf(codigo);
    }

    private void enviarCodigoPorCorreo(String correo, String codigo) {
        SimpleMailMessage mensaje = new SimpleMailMessage();
        mensaje.setTo(correo);
        mensaje.setSubject("Código de restablecimiento de contraseña");
        mensaje.setText("Tu código para restablecer la contraseña es: " + codigo + "\n" +
                "Ingresa este código en la aplicación para crear una nueva contraseña. El código expira en 15 minutos.");
        mailSender.send(mensaje);
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

    static class EmailRequest {
        private String correo;
        public String getCorreo() { return correo; }
        public void setCorreo(String correo) { this.correo = correo; }
    }

    static class ResetPasswordRequest {
        private String correo;
        private String codigo;
        private String nuevaPassword;
        public String getCorreo() { return correo; }
        public void setCorreo(String correo) { this.correo = correo; }
        public String getCodigo() { return codigo; }
        public void setCodigo(String codigo) { this.codigo = codigo; }
        public String getNuevaPassword() { return nuevaPassword; }
        public void setNuevaPassword(String nuevaPassword) { this.nuevaPassword = nuevaPassword; }
    }
}