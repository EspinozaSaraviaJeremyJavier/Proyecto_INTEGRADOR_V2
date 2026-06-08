package service;

import Modelo.Usuario;
import DAO.UsuarioDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UsuarioDAO usuarioDAO;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public Optional<Map<String, Object>> verificarCredenciales(String correo, String password) {
        return usuarioDAO.findByCorreo(correo).flatMap(usuario -> {
            // SEGURIDAD: Usamos matches para contraseñas encriptadas con BCrypt
            if (passwordEncoder.matches(password, usuario.getPassword()) || usuario.getPassword().equals(password)) {
                Map<String, Object> datos = new HashMap<>();
                datos.put("id", usuario.getId());
                datos.put("nombre", usuario.getNombre());
                datos.put("correo", usuario.getCorreo());
                datos.put("rol", usuario.getRolId() == 1 ? "ADMIN" : "CLIENTE");
                return Optional.of(datos);
            }
            return Optional.empty();
        });
    }

    @Override
    public boolean registrarCliente(Usuario usuario) {
        if (usuarioDAO.findByCorreo(usuario.getCorreo()).isPresent()) {
            return false; // Ya existe
        }
        // SEGURIDAD: Encriptar antes de guardar en Base de Datos
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        usuario.setRolId(2); // Cliente por defecto
        usuarioDAO.save(usuario);
        return true;
    }
}