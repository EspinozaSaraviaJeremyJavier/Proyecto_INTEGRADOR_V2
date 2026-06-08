package Modelo;

import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "usuId")
    private Long id;

    @Column(name = "usuNombre")
    private String nombre;

    @Column(name = "usuApellido")
    private String apellido;

    @Column(name = "usuCorreo", unique = true)
    private String correo;

    @Column(name = "usuContrasena")
    private String password;

    @Column(name = "usuTelefono")
    private String telefono;

    @Column(name = "usuDireccion")
    private String direccion;

    @Column(name = "rolId_fk")
    private Integer rolId;
    
    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
    private List<Direccion> direcciones;
    
    @Column(name = "usuFechaNacimiento")
    @Temporal(TemporalType.DATE)
    private Date fechaNacimiento;

    @Column(name = "usuGenero")
    private String genero;

    @Column(name = "usuFechaRegistro", updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaRegistro;

    // Métodos para inicializar la fecha de registro automáticamente
    @PrePersist
    protected void onCreate() {
        fechaRegistro = new Date();
    }
    // Constructores
    public Usuario() {}

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getApellido() { return apellido; }
    public void setApellido(String apellido) { this.apellido = apellido; }
    public String getCorreo() { return correo; }
    public void setCorreo(String correo) { this.correo = correo; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) { this.telefono = telefono; }
    public String getDireccion() { return direccion; }
    public void setDireccion(String direccion) { this.direccion = direccion; }
    public Integer getRolId() { return rolId; }
    public void setRolId(Integer rolId) { this.rolId = rolId; }
    public void setDirecciones(List<Direccion> direcciones) {this.direcciones = direcciones;}
    public List<Direccion> getDirecciones() {return direcciones;}
    public Date getFechaNacimiento() { return fechaNacimiento; }
    public void setFechaNacimiento(Date fechaNacimiento) { this.fechaNacimiento = fechaNacimiento; }
    public String getGenero() { return genero; }
    public void setGenero(String genero) { this.genero = genero; }
    public Date getFechaRegistro() { return fechaRegistro; }
}