package Repositorio;

import Modelo.CarritoItem;
import Modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
import Modelo.Producto;
import Modelo.ProductoVariante;

public interface CarritoRepository extends JpaRepository<CarritoItem, Long> {
    List<CarritoItem> findByUsuario(Usuario usuario);
    Optional<CarritoItem> findByUsuarioAndProductoAndVariante(Usuario usuario, Producto producto, ProductoVariante variante);
    void deleteByUsuario(Usuario usuario);
}