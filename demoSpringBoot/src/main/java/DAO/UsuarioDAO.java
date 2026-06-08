package DAO;

import Modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UsuarioDAO extends JpaRepository<Usuario, Long> {
    // Spring entenderá que debe buscar en la columna mapeada a 'correo' (usuCorreo)
    Optional<Usuario> findByCorreo(String correo);
}