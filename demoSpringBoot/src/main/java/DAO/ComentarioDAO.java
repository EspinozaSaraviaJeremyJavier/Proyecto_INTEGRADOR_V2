package DAO;

import Modelo.Comentario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComentarioDAO extends JpaRepository<Comentario, Long> {
    // Aquí Java hereda automáticamente métodos como findById, save, y findAll
}