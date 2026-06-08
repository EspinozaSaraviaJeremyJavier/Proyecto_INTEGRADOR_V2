package Modelo;

import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "orden")
public class Orden {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ordId")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "usuId_fk")
    private Usuario usuario;

    @Column(name = "ordFecha", insertable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date fecha;

    @Column(name = "ordTotal")
    private Double total;

    @Column(name = "ordDireccionEntrega")
    private String direccionEntrega;

    @Enumerated(EnumType.STRING)
    @Column(name = "ordMetodoPago")
    private MetodoPago metodoPago;

    @Enumerated(EnumType.STRING)
    @Column(name = "ordEstado")
    private EstadoOrden estado;

    @OneToMany(mappedBy = "orden", cascade = CascadeType.ALL)
    private List<DetalleOrden> detalles;

    public enum MetodoPago { Efectivo, Transferencia, Tarjeta }
    public enum EstadoOrden { Pendiente, Preparando, Enviado, Entregado }

    
    public void setMetodoPago(MetodoPago metodoPago) {this.metodoPago = metodoPago;}
    public MetodoPago getMetodoPago() {return metodoPago;}
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public Usuario getUsuario() { return usuario; }
    public void setUsuario(Usuario usuario) { this.usuario = usuario; }
    public Date getFecha() { return fecha; }
    public void setFecha(Date fecha) {this.fecha = fecha;}
    public Double getTotal() { return total; }
    public void setTotal(Double total) { this.total = total; }
    public String getDireccionEntrega() { return direccionEntrega; }
    public void setDireccionEntrega(String direccionEntrega) { this.direccionEntrega = direccionEntrega; }
    public EstadoOrden getEstado() { return estado; }
    public void setEstado(EstadoOrden estado) { this.estado = estado; }
    public List<DetalleOrden> getDetalles() { return detalles; }
    public void setDetalles(List<DetalleOrden> detalles) { this.detalles = detalles; }
}