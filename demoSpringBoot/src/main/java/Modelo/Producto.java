package Modelo;

import jakarta.persistence.*;

/**
 * Entidad JPA que representa un producto de la repostería Sweet Cream Rose.
 * Mapeada a la tabla 'productos' de la base de datos MySQL.
 *
 * Cada producto tiene: nombre, precio, descripción e imagen URL.
 * La imagen se almacena físicamente en el servidor y aquí se guarda su ruta.
 */
@Entity
@Table(name = "productos")
public class Producto {

    // ── Identificador único generado automáticamente por la BD ────────────────
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ── Nombre del producto (ej: "Cupcake de Chocolate") ──────────────────────
    @Column(name = "nombre", length = 255)
    private String nombre;

    // ── Precio en soles peruanos ───────────────────────────────────────────────
    @Column(name = "precio")
    private Double precio;

    // ── Descripción detallada del producto ────────────────────────────────────
    @Column(name = "descripcion", length = 255)
    private String descripcion;

    /**
     * URL relativa de la imagen del producto.
     * Ejemplo: "/uploads/1234567890_cupcake.jpg"
     * El administrador sube la imagen y el backend guarda la ruta aquí.
     * React usa esta URL para mostrar la imagen en la tienda.
     */
    @Column(name = "imagenUrl", length = 500)
    private String imagenUrl;

    // ── Constructor vacío requerido por JPA ───────────────────────────────────
    public Producto() {}

    // ── Constructor de conveniencia (útil para datos de prueba) ───────────────
    public Producto(Long id, String nombre, String descripcion, Double precio, String imagenUrl) {
        this.id         = id;
        this.nombre     = nombre;
        this.descripcion = descripcion;
        this.precio     = precio;
        this.imagenUrl  = imagenUrl;
    }

    // ── Getters y Setters ─────────────────────────────────────────────────────
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public Double getPrecio() { return precio; }
    public void setPrecio(Double precio) { this.precio = precio; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public String getImagenUrl() { return imagenUrl; }
    public void setImagenUrl(String imagenUrl) { this.imagenUrl = imagenUrl; }

    // ── toString útil para debug ───────────────────────────────────────────────
    @Override
    public String toString() {
        return "Producto{id=" + id + ", nombre='" + nombre + "', precio=" + precio + "}";
    }
}