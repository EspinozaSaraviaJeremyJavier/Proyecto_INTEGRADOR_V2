package Repositorio;

import Modelo.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

/**
 * Repositorio JPA para la entidad Producto.
 * Extiende JpaRepository para heredar operaciones CRUD estándar.
 *
 * Spring Data interpreta los nombres de los métodos y genera el SQL automáticamente.
 * Adicionalmente se incluye una consulta JPQL personalizada para búsquedas flexibles.
 */
@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

    /**
     * Búsqueda básica por nombre exacto (case-insensitive).
     * SQL generado: SELECT * FROM productos WHERE LOWER(nombre) = LOWER(:nombre)
     *
     * @param nombre Nombre exacto a buscar
     * @return Lista de productos que coincidan con el nombre exacto
     */
    List<Producto> findByNombreIgnoreCase(String nombre);

    /**
     * Búsqueda por nombre que contenga el texto indicado (para el buscador del navbar).
     * SQL generado: SELECT * FROM productos WHERE nombre LIKE %:texto%
     * Este método lo usa el endpoint /api/productos/buscar?q=chocolate
     *
     * @param texto Texto a buscar dentro del nombre del producto
     * @return Lista de productos cuyo nombre contenga el texto buscado
     */
    List<Producto> findByNombreContainingIgnoreCase(String texto);

    /**
     * Consulta JPQL personalizada para búsqueda avanzada en nombre Y descripción.
     * Permite que la búsqueda devuelva resultados si el texto aparece en cualquiera
     * de los dos campos, haciendo el buscador más potente.
     *
     * @param texto Texto a buscar (se convierte a minúsculas para comparación)
     * @return Lista de productos que coincidan en nombre o descripción
     */
    @Query("SELECT p FROM Producto p WHERE " +
           "LOWER(p.nombre) LIKE LOWER(CONCAT('%', :texto, '%')) OR " +
           "LOWER(p.descripcion) LIKE LOWER(CONCAT('%', :texto, '%'))")
    List<Producto> buscarPorNombreODescripcion(@Param("texto") String texto);
}