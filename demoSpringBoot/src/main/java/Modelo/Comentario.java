package Modelo;

import jakarta.persistence.*;

/**
 * Entidad JPA que representa un comentario de cliente en la tienda Sweet Cream Rose.
 * Se almacena en la tabla 'comentarios' de la base de datos MySQL.
 * El campo 'aprobado' permite al administrador moderar los comentarios antes de mostrarlos.
 */
@Entity
@Table(name = "comentarios")
public class Comentario {

    // ── Identificador único auto-incremental ──────────────────────────────────
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ── Nombre del cliente que deja el comentario ─────────────────────────────
    @Column(name = "nombre", length = 255)
    private String nombre;

    // ── Texto del comentario escrito por el cliente ───────────────────────────
    @Column(name = "contenido", length = 255)
    private String contenido;

    /**
     * Indica si el administrador aprobó este comentario para mostrarlo en el sitio.
     * Por defecto es false: el comentario queda pendiente de revisión.
     */
    @Column(name = "aprobado", nullable = false)
    private boolean aprobado = false;

    // ── Constructor vacío requerido por JPA ───────────────────────────────────
    public Comentario() {}

    // ── Constructor de conveniencia ───────────────────────────────────────────
    public Comentario(String nombre, String contenido) {
        this.nombre   = nombre;
        this.contenido = contenido;
        this.aprobado  = false; // Todo comentario nuevo empieza sin aprobar
    }

    // ── Getters y Setters ─────────────────────────────────────────────────────
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getContenido() { return contenido; }
    public void setContenido(String contenido) { this.contenido = contenido; }

    public boolean isAprobado() { return aprobado; }
    public void setAprobado(boolean aprobado) { this.aprobado = aprobado; }

    // ── toString para facilitar el logging en consola ──────────────────────────
    @Override
    public String toString() {
        return "Comentario{id=" + id + ", nombre='" + nombre + "', aprobado=" + aprobado + "}";
    }
}