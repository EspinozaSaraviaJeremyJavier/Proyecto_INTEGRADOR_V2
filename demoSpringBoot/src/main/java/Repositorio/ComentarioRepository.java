package Repositorio;

import Modelo.Comentario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

/**
 * Repositorio JPA para la entidad Comentario.
 * Spring Data genera automáticamente la implementación de todos los métodos CRUD.
 *
 * Métodos heredados de JpaRepository (sin necesidad de escribirlos):
 *   - save(comentario)         → Guarda o actualiza un comentario
 *   - findAll()                → Devuelve todos los comentarios
 *   - findById(id)             → Devuelve un comentario por su ID
 *   - deleteById(id)           → Elimina un comentario por su ID
 *   - count()                  → Cuenta el total de comentarios
 *
 * Métodos personalizados declarados aquí:
 *   - findByAprobadoTrue()     → Solo devuelve los comentarios aprobados (para el frontend)
 *   - findByAprobadoFalse()    → Devuelve pendientes (para el panel de administrador)
 */
@Repository
public interface ComentarioRepository extends JpaRepository<Comentario, Long> {

    /**
     * Busca todos los comentarios cuyo campo 'aprobado' sea true.
     * El frontend de la tienda solo muestra comentarios aprobados.
     * Spring interpreta el nombre del método y genera el SQL automáticamente:
     * SELECT * FROM comentarios WHERE aprobado = true
     *
     * @return Lista de comentarios aprobados visibles para el público
     */
    List<Comentario> findByAprobadoTrue();

    /**
     * Busca comentarios pendientes de aprobación.
     * Solo el administrador puede ver y aprobar estos comentarios.
     * SQL generado: SELECT * FROM comentarios WHERE aprobado = false
     *
     * @return Lista de comentarios pendientes de revisión administrativa
     */
    List<Comentario> findByAprobadoFalse();
}