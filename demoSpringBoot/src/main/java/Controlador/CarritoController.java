package Controlador;

import Modelo.CarritoItem;
import Modelo.Producto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/carrito")
@CrossOrigin(origins = "*") // Permite la conexión desde el servidor de React
public class CarritoController {

    // Lista simulada en memoria (puedes conectarla a tu repositorio u ordenes posteriormente)
    private static List<CarritoItem> listaCarrito = new ArrayList<>();

    static {
        // Inicialización con datos de prueba basados en tu html original
        listaCarrito.add(new CarritoItem(new Producto(1L, "Torta Triple Chocolate", "Deliciosa torta de chocolate húmedo con ganache", 48.00, "assets/products/torta_principal.jpg"), 1));
        listaCarrito.add(new CarritoItem(new Producto(2L, "Cupcake de Arándanos", "Cupcakes de vainilla con arándanos frescos", 16.00, "assets/products/cupcake_arandano.png"), 2));
        listaCarrito.add(new CarritoItem(new Producto(3L, "Alfajor Tradicional", "Alfajor artesanal con manjar blanco y azúcar impalpable", 11.00, "assets/products/torta triple chocolate.jpg"), 1));
    }

    @GetMapping
    public ResponseEntity<List<CarritoItem>> obtenerCarrito() {
        return ResponseEntity.ok(listaCarrito);
    }

    @PostMapping("/actualizar-cantidad")
    public ResponseEntity<List<CarritoItem>> actualizarCantidad(@RequestParam Long productoId, @RequestParam Integer nuevaCantidad) {
        for (CarritoItem item : listaCarrito) {
            if (item.getProducto().getId().equals(productoId)) {
                item.setCantidad(nuevaCantidad);
                break;
            }
        }
        return ResponseEntity.ok(listaCarrito);
    }

    @DeleteMapping("/eliminar/{productoId}")
    public ResponseEntity<List<CarritoItem>> eliminarItem(@PathVariable Long productoId) {
        listaCarrito.removeIf(item -> item.getProducto().getId().equals(productoId));
        return ResponseEntity.ok(listaCarrito);
    }

    @PostMapping("/pagar")
    public ResponseEntity<String> procesarPago(@RequestBody String datosPago) {
        // Aquí se procesaría el comprobante (Boleta/Factura) enviado desde React
        return ResponseEntity.ok("¡Pedido recibido con éxito en Sweet Cream Rose Backend!");
    }
}