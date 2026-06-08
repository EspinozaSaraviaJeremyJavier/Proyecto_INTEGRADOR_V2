package Repositorio;

import Modelo.Pedido;
import Modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    List<Pedido> findByUsuario(Usuario usuario);
    List<Pedido> findByUsuarioAndEstado(Usuario usuario, String estado);
}