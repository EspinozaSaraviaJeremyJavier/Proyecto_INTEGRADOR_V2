package DAO;

import Modelo.Direccion;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DireccionDAO extends JpaRepository<Direccion, Long> {
    List<Direccion> findByUsuarioId(Long usuId);
}