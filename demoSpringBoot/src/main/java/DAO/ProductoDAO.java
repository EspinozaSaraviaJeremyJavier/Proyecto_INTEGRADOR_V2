package DAO;

import Modelo.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoDAO extends JpaRepository<Producto, Long> {
}