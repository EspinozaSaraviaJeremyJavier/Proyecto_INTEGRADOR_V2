package service;

import Modelo.Usuario;
import java.util.Map;
import java.util.Optional;

public interface AuthService {
    Optional<Map<String, Object>> verificarCredenciales(String correo, String password);
    boolean registrarCliente(Usuario usuario);
}