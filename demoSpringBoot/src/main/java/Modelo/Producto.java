package Modelo;
import jakarta.persistence.*;

@Entity
@Table(name = "producto")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "proId")
    private Long id;

    @Column(name = "proNombre", nullable = false)
    private String nombre;

    @Column(name = "proDescripcion")
    private String descripcion;

    @Column(name = "proPrecio")
    private Double precio;

    // Aquí se almacena la ruta de la imagen como TEXTO (String)
    @Column(name = "proImagenUrl")
    private String imagenUrl;

    // Constructores
    public Producto() {}

    public Producto(Long id, String nombre, String descripcion, Double precio, String imagenUrl) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagenUrl = imagenUrl;
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public Double getPrecio() { return precio; }
    public void setPrecio(Double precio) { this.precio = precio; }

    public String getImagenUrl() { return imagenUrl; }
    public void setImagenUrl(String imagenUrl) { this.imagenUrl = imagenUrl; }
}