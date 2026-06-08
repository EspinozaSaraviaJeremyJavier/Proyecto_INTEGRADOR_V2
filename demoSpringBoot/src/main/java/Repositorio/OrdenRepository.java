package Repositorio;

import Modelo.Orden;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OrdenRepository extends JpaRepository<Orden, Integer> {
    // Busca todas las órdenes de un usuario específico
    List<Orden> findByUsuario_IdOrderByFechaDesc(Long usuId);
    
    // Busca por usuario y estado (para los botones: Todos, Pendientes, etc.)
    List<Orden> findByUsuario_IdAndEstado(Long usuId, Orden.EstadoOrden estado);
}