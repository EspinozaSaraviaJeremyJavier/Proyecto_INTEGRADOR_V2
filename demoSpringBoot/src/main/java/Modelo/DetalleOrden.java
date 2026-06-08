package Modelo;

import jakarta.persistence.*;

@Entity
@Table(name = "detalles_orden")
public class DetalleOrden {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "detoId")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "ordId_fk")
    private Orden orden;

    @ManyToOne
    @JoinColumn(name = "proId_fk") 
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "varId_fk") // ¡IMPORTANTE! Sin esto, el trigger de stock fallará
    private ProductoVariante variante;

    @Column(name = "detoCantidad")
    private Integer cantidad;

    @Column(name = "detoPrecio")
    private Double precio;

    @Column(name = "detoSubTotal") // El trigger 'tr_calculo_subtotal' llenará esto
    private Double subTotal;

    public Integer getId() {return id;}
    public void setId(Integer id) {this.id = id;}

    public Orden getOrden() {return orden;}
    public void setOrden(Orden orden) {this.orden = orden;}

    public Producto getProducto() {return producto;}
    public void setProducto(Producto producto) {this.producto = producto;}

    public ProductoVariante getVariante() {return variante;}
    public void setVariante(ProductoVariante variante) {this.variante = variante;}

    public Integer getCantidad() {return cantidad;}
    public void setCantidad(Integer cantidad) {this.cantidad = cantidad;}

    public Double getPrecio() {return precio;}
    public void setPrecio(Double precio) {this.precio = precio;}

    public Double getSubTotal() {return subTotal;}
    public void setSubTotal(Double subTotal) {this.subTotal = subTotal;}
}
