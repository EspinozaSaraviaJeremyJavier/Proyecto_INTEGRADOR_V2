import React from "react";

const productos = [
  { nombre: "Torta de Chocolate", cantidad: 1, precio: 50 },
  { nombre: "Torta de Vainilla", cantidad: 1, precio: 35 },
  { nombre: "Torta de Fresa", cantidad: 1, precio: 25 },
];

const estilos = {
  pagina: {
    backgroundColor: "#FFEFEF",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  header: {
    textAlign: "center",
    marginBottom: "30px",
  },

  logo: {
    width: "180px",
    marginBottom: "10px",
  },

  tituloEmpresa: {
    color: "#5A3E41",
    fontFamily: "Edwardian Script ITC, cursive",
    fontSize: "38px",
    margin: "5px 0",
  },

  textoInfo: {
    color: "#C3666D",
    margin: "4px 0",
  },

  boleta: {
    backgroundColor: "#fff",
    width: "900px",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },

  tituloBoleta: {
    textAlign: "center",
    color: "#5A3E41",
    marginBottom: "5px",
  },

  numeroBoleta: {
    textAlign: "center",
    color: "#C3666D",
    marginBottom: "30px",
  },

  infoCliente: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "25px",
    flexWrap: "wrap",
    gap: "20px",
  },

  tabla: {
    width: "100%",
    borderCollapse: "collapse",
    overflow: "hidden",
    borderRadius: "15px",
  },

  th: {
    backgroundColor: "#FFC5C3",
    color: "#5A3E41",
    padding: "14px",
    border: "1px solid #DE788E",
    textAlign: "left",
  },

  td: {
    padding: "12px",
    border: "1px solid #DE788E",
  },

  total: {
    fontWeight: "bold",
    backgroundColor: "#FFF3F3",
  },

  footer: {
    marginTop: "25px",
    textAlign: "center",
  },

  gracias: {
    fontFamily: "Edwardian Script ITC, cursive",
    fontSize: "30px",
    color: "#5A3E41",
    fontWeight: "bold",
  },

  copyright: {
    color: "#C3666D",
    marginTop: "10px",
  },
};

const Boletas = () => {
  const subtotal = productos.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const igv = subtotal * 0.18;
  const total = subtotal + igv;

  return (
    <div style={estilos.pagina}>
      {/* HEADER */}
      <header style={estilos.header}>
        <img
          src="/imagenes/logo de boletas.jpeg"
          alt="Logo"
          style={estilos.logo}
        />

        <h1 style={estilos.tituloEmpresa}>Sweet Cream Rose</h1>

        <p style={estilos.textoInfo}>RUC: 20458706521</p>
        <p style={estilos.textoInfo}>📞 +51 987654321</p>
        <p style={estilos.textoInfo}>📧 info@sweetcreamrose.com</p>
      </header>

      {/* BOLETA */}
      <main style={estilos.boleta}>
        <h2 style={estilos.tituloBoleta}>Boleta de Venta</h2>

        <p style={estilos.numeroBoleta}>N° 001-000087</p>

        {/* DATOS */}
        <section style={estilos.infoCliente}>
          <div>
            <p>
              <strong>Cliente:</strong> Juan Pérez
            </p>

            <p>
              <strong>Teléfono:</strong> +51 987654321
            </p>
          </div>

          <div>
            <p>
              <strong>Pedido:</strong> 000452
            </p>

            <p>
              <strong>Fecha:</strong> 15/04/2024
            </p>
          </div>
        </section>

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
                <td style={estilos.td}>{producto.nombre}</td>

                <td style={{ ...estilos.td, textAlign: "center" }}>
                  {producto.cantidad}
                </td>

                <td style={estilos.td}>
                  S/. {producto.precio.toFixed(2)}
                </td>
              </tr>
            ))}

            <tr style={estilos.total}>
              <td colSpan="2" style={estilos.td}>
                Subtotal
              </td>

              <td style={estilos.td}>
                S/. {subtotal.toFixed(2)}
              </td>
            </tr>

            <tr style={estilos.total}>
              <td colSpan="2" style={estilos.td}>
                IGV (18%)
              </td>

              <td style={estilos.td}>
                S/. {igv.toFixed(2)}
              </td>
            </tr>

            <tr style={estilos.total}>
              <td colSpan="2" style={estilos.td}>
                Total a Pagar
              </td>

              <td style={estilos.td}>
                S/. {total.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>

        {/* MÉTODO DE PAGO */}
        <div style={{ marginTop: "20px" }}>
          <strong>Método de pago:</strong> Efectivo
        </div>
      </main>

      {/* FOOTER */}
      <footer style={estilos.footer}>
        <p style={estilos.gracias}>¡Gracias por su compra!</p>

        <p style={estilos.copyright}>
          © 2024 Sweet Cream Rose. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Boletas;