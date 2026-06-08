package Controlador;

import Modelo.Comentario;
import Repositorio.ComentarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Optional;

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * ComentarioController — Sweet Cream Rose
 * ─────────────────────────────────────────────────────────────────────────────
 * Controlador REST que expone los endpoints para el manejo completo de
 * comentarios de clientes. Se conecta con:
 *   • El frontend React (http://localhost:3000) para recibir y mostrar comentarios
 *   • El DashboardAdmin para que el administrador apruebe o rechace comentarios
 *
 * Endpoints expuestos:
 *   POST   /enviar-comentario          → Cliente envía un nuevo comentario
 *   GET    /api/comentarios/aprobados  → Frontend obtiene comentarios visibles
 *   GET    /api/comentarios/pendientes → Admin obtiene comentarios sin revisar
 *   PUT    /api/comentarios/aprobar/{id}   → Admin aprueba un comentario
 *   DELETE /api/comentarios/eliminar/{id}  → Admin elimina un comentario
 * ─────────────────────────────────────────────────────────────────────────────
 */
@RestController
@CrossOrigin(origins = "http://localhost:3000") // Permite peticiones desde React
public class ComentarioController {

    // Spring inyecta automáticamente la implementación del repositorio
    @Autowired
    private ComentarioRepository comentarioRepo;

    // ══════════════════════════════════════════════════════════════════════════
    // ENDPOINT 1 — El cliente envía un comentario desde el formulario del Home
    // URL: POST http://localhost:8081/enviar-comentario
    // Body: application/x-www-form-urlencoded  (nombre=X&contenido=Y)
    // ══════════════════════════════════════════════════════════════════════════
    @PostMapping("/enviar-comentario")
    public ResponseEntity<Map<String, String>> recibirComentario(
            @RequestParam("nombre")   String nombre,
            @RequestParam("contenido") String contenido) {

        Map<String, String> respuesta = new HashMap<>();

        // Validación: los campos no pueden estar vacíos
        if (nombre == null || nombre.isBlank() || contenido == null || contenido.isBlank()) {
            respuesta.put("mensaje", "El nombre y el comentario son obligatorios.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(respuesta);
        }

        // Crear y guardar el comentario nuevo (aprobado = false por defecto)
        Comentario nuevo = new Comentario(nombre.trim(), contenido.trim());
        comentarioRepo.save(nuevo);

        // Respuesta exitosa al frontend de React
        respuesta.put("mensaje", "Comentario recibido. Será revisado por el administrador.");
        return ResponseEntity.status(HttpStatus.CREATED).body(respuesta);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // ENDPOINT 2 — React obtiene los comentarios aprobados para mostrar en Home
    // URL: GET http://localhost:8081/api/comentarios/aprobados
    // Solo devuelve comentarios con aprobado = true (moderados por el admin)
    // ══════════════════════════════════════════════════════════════════════════
    @GetMapping("/api/comentarios/aprobados")
    public ResponseEntity<List<Comentario>> listarAprobados() {
        // Llama al método personalizado del repositorio que filtra por aprobado=true
        List<Comentario> aprobados = comentarioRepo.findByAprobadoTrue();
        return ResponseEntity.ok(aprobados);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // ENDPOINT 3 — El DashboardAdmin lista comentarios pendientes de revisión
    // URL: GET http://localhost:8081/api/comentarios/pendientes
    // Solo accesible desde el panel de administración
    // ══════════════════════════════════════════════════════════════════════════
    @GetMapping("/api/comentarios/pendientes")
    public ResponseEntity<List<Comentario>> listarPendientes() {
        // Devuelve todos los comentarios que aún no han sido aprobados
        List<Comentario> pendientes = comentarioRepo.findByAprobadoFalse();
        return ResponseEntity.ok(pendientes);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // ENDPOINT 4 — El admin aprueba un comentario desde el Dashboard
    // URL: PUT http://localhost:8081/api/comentarios/aprobar/{id}
    // Una vez aprobado, aparecerá en el frontend de la tienda
    // ══════════════════════════════════════════════════════════════════════════
    @PutMapping("/api/comentarios/aprobar/{id}")
    public ResponseEntity<Map<String, String>> aprobarComentario(@PathVariable Long id) {
        Map<String, String> respuesta = new HashMap<>();

        // Buscar el comentario en la base de datos por su ID
        Optional<Comentario> comentarioOpt = comentarioRepo.findById(id);

        if (comentarioOpt.isEmpty()) {
            // El comentario no existe en la base de datos
            respuesta.put("mensaje", "Comentario no encontrado con ID: " + id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(respuesta);
        }

        // Marcar el comentario como aprobado y guardar el cambio en la BD
        Comentario comentario = comentarioOpt.get();
        comentario.setAprobado(true);
        comentarioRepo.save(comentario);

        respuesta.put("mensaje", "Comentario aprobado exitosamente. Ya es visible en la tienda.");
        return ResponseEntity.ok(respuesta);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // ENDPOINT 5 — El admin elimina un comentario inapropiado
    // URL: DELETE http://localhost:8081/api/comentarios/eliminar/{id}
    // Elimina definitivamente el comentario de la base de datos
    // ══════════════════════════════════════════════════════════════════════════
    @DeleteMapping("/api/comentarios/eliminar/{id}")
    public ResponseEntity<Map<String, String>> eliminarComentario(@PathVariable Long id) {
        Map<String, String> respuesta = new HashMap<>();

        // Verificar que el comentario existe antes de intentar eliminarlo
        if (!comentarioRepo.existsById(id)) {
            respuesta.put("mensaje", "Comentario no encontrado con ID: " + id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(respuesta);
        }

        // Eliminar de la base de datos
        comentarioRepo.deleteById(id);

        respuesta.put("mensaje", "Comentario eliminado correctamente.");
        return ResponseEntity.ok(respuesta);
    }
}