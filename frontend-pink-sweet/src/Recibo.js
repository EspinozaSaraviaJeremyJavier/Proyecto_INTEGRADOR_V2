import React from "react";

const productos = [
  { nombre: "Torta de Chocolate", cantidad: 1, precio: 50 },
  { nombre: "Torta de Chocolate", cantidad: 1, precio: 35 },
  { nombre: "Torta de Chocolate", cantidad: 1, precio: 25 },
];

const Recibo = () => {
  const subtotal = productos.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const igv = subtotal * 0.18;
  const total = subtotal + igv;

  const estilos = {
    pagina: {
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },

    recibo: {
      width: "700px",
      backgroundColor: "#fff",
      border: "1px solid #f2b6c1",
      padding: "25px",
      color: "#555",
    },

    top: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "20px",
    },

    logoSection: {
      width: "45%",
    },

    logo: {
      width: "90px",
      marginBottom: "10px",
    },

    nombreEmpresa: {
      fontFamily: "'Edwardian Script ITC', cursive",
      fontSize: "42px",
      color: "#5d3b3b",
      margin: "0",
    },

    subtitulo: {
      color: "#d88c9a",
      marginTop: "5px",
      fontSize: "14px",
    },

    infoEmpresa: {
      color: "#d88c9a",
      fontSize: "13px",
      lineHeight: "1.7",
    },

    facturaBox: {
      textAlign: "right",
      width: "45%",
    },

    ruc: {
      color: "#d87b8c",
      fontWeight: "bold",
      fontSize: "14px",
    },

    factura: {
      backgroundColor: "#f6b8c2",
      color: "#fff",
      padding: "10px 20px",
      display: "inline-block",
      borderRadius: "6px",
      marginTop: "20px",
      fontWeight: "bold",
    },

    pedido: {
      marginTop: "15px",
      color: "#d87b8c",
      fontSize: "15px",
    },

    clienteSection: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "25px",
      marginBottom: "20px",
      borderTop: "1px solid #eee",
      paddingTop: "15px",
    },

    clienteInfo: {
      lineHeight: "1.8",
      fontSize: "14px",
    },

    tabla: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px",
      overflow: "hidden",
      borderRadius: "10px",
    },

    th: {
      backgroundColor: "#f6c7cf",
      padding: "12px",
      border: "1px solid #e6a6b2",
      textAlign: "left",
      color: "#6a4a4a",
      fontSize: "14px",
    },

    td: {
      padding: "12px",
      border: "1px solid #f0c3cb",
      fontSize: "14px",
    },

    totalRow: {
      backgroundColor: "#f8d5db",
      fontWeight: "bold",
    },

    metodoPago: {
      marginTop: "15px",
      paddingTop: "15px",
      borderTop: "1px solid #ddd",
      fontSize: "14px",
    },

    footer: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },

    gracias: {
      fontFamily: "'Edwardian Script ITC', cursive",
      fontSize: "38px",
      color: "#5d3b3b",
      marginBottom: "10px",
    },

    firma: {
      borderTop: "1px solid #999",
      width: "140px",
      textAlign: "center",
      paddingTop: "5px",
      fontSize: "12px",
      marginTop: "30px",
    },

    qr: {
      width: "90px",
      height: "90px",
      objectFit: "cover",
    },

    web: {
      textAlign: "center",
      marginTop: "15px",
      fontSize: "13px",
      color: "#777",
    },
  };

  return (
    <div style={estilos.pagina}>
      <div style={estilos.recibo}>
        
        {/* ENCABEZADO */}
        <div style={estilos.top}>
          
          {/* IZQUIERDA */}
          <div style={estilos.logoSection}>
            <img
              src="/imagenes/logo de boletas.jpeg"
              alt="Logo"
              style={estilos.logo}
            />

            <h1 style={estilos.nombreEmpresa}>
              Sweet Cream Rose
            </h1>

            <p style={estilos.subtitulo}>Repostería</p>

            <div style={estilos.infoEmpresa}>
              <div>RUC: 20458706521</div>
              <div>+51 987654321</div>
              <div>info@sweetdelights.pe</div>
            </div>
          </div>

          {/* DERECHA */}
          <div style={estilos.facturaBox}>
            <div style={estilos.ruc}>
              RUC: 20458706521
            </div>

            <div style={estilos.infoEmpresa}>
              <div>Calle Principal N°4</div>
              <div>Lima, Perú</div>
              <div>+51 987654321</div>
              <div>info@sweetdelights.pe</div>
            </div>

            <div style={estilos.factura}>
              FACTURA N° 001-000145
            </div>

            <div style={estilos.pedido}>
              Pedido N°: 000452
            </div>
          </div>
        </div>

        {/* CLIENTE */}
        <div style={estilos.clienteSection}>
          
          <div style={estilos.clienteInfo}>
            <div>
              <strong>Cliente:</strong>
            </div>

            <div>María López</div>

            <div>DNI: 47859684</div>

            <div>
              📍 Calle Principal N°456, Lima, Perú
            </div>

            <div>📞 +51 987654321</div>
          </div>

          <div style={estilos.clienteInfo}>
            <div>
              <strong>Fecha:</strong> 15/04/2024
            </div>

            <div>
              <strong>Vencimiento:</strong> 20/04/2024
            </div>
          </div>
        </div>

        {/* TABLA */}
        <table style={estilos.tabla}>
          <thead>
            <tr>
              <th style={estilos.th}>Producto</th>
              <th style={estilos.th}>Cantidad</th>
              <th style={estilos.th}>Precio</th>
            </tr>
          </thead>

          <tbody>
            {productos.map((producto, index) => (
              <tr key={index}>
                <td style={estilos.td}>
                  {producto.nombre}
                </td>

                <td
                  style={{
                    ...estilos.td,
                    textAlign: "center",
                  }}
                >
                  {producto.cantidad}
                </td>

                <td style={estilos.td}>
                  S/{producto.precio.toFixed(2)}
                </td>
              </tr>
            ))}

            <tr>
              <td
                colSpan="2"
                style={{
                  ...estilos.td,
                  fontWeight: "bold",
                }}
              >
                Subtotal:
              </td>

              <td style={estilos.td}>
                S/{subtotal.toFixed(2)}
              </td>
            </tr>

            <tr>
              <td colSpan="2" style={estilos.td}>
                IGV (18%):
              </td>

              <td style={estilos.td}>
                S/{igv.toFixed(2)}
              </td>
            </tr>

            <tr style={estilos.totalRow}>
              <td colSpan="2" style={estilos.td}>
                Total a pagar:
              </td>

              <td style={estilos.td}>
                S/{total.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>

        {/* MÉTODO DE PAGO */}
        <div style={estilos.metodoPago}>
          Método de pago: Yape
        </div>

        {/* FOOTER */}
        <div style={estilos.footer}>
          
          <div>
            <div style={estilos.gracias}>
              Gracias por su compra!
            </div>

            <div style={estilos.firma}>
              <img
            src="/imagenes/Firma.png"
            alt="Firma"
            style={estilos.firma}
               />
              Firma del empleado
            </div>
          </div>

          <img
            src="/imagenes/QR.png"
            alt="QR"
            style={estilos.qr}
          />
          
        </div>

        <div style={estilos.web}>
          www.Sweetdelights.pe
        </div>
      </div>
    </div>
  );
};

export default Recibo;