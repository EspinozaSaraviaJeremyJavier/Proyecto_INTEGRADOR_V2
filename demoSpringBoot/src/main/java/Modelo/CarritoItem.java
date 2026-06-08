package Modelo;

public class CarritoItem {
    private Producto producto;
    private Integer cantidad;
    private Double subtotal;

    public CarritoItem() {}

    public CarritoItem(Producto producto, Integer cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
        calcularSubtotal();
    }

    public void calcularSubtotal() {
        if (this.producto != null && this.cantidad != null) {
            this.subtotal = this.producto.getPrecio() * this.cantidad;
        }
    }

    // Getters y Setters
    public Producto getProducto() { return producto; }
    public void setProducto(Producto producto) { 
        this.producto = producto; 
        calcularSubtotal();
    }

    public Integer getCantidad() { return cantidad; }
    public void setCantidad(Integer cantidad) { 
        this.cantidad = cantidad; 
        calcularSubtotal();
    }

    public Double getSubtotal() { return subtotal; }
    public void setSubtotal(Double subtotal) { this.subtotal = subtotal; }
}