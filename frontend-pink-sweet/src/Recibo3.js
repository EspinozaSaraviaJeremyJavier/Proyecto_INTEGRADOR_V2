import React from "react";

const Recibo3 = () => {
  return (
    <div
      style={{
        backgroundColor: "#fdf7f7",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "800px",
          backgroundColor: "#fff",
          border: "1px solid #d8a4a4",
          padding: "25px",
          color: "#6b4b4b",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "20px",
          }}
        >
          {/* LOGO */}
          <div>
            <h1
              style={{
                margin: 0,
                color: "#d47272",
                fontFamily: "cursive",
                fontSize: "34px",
              }}
            >
              Sweet Cream Rose
            </h1>

            <p style={styles.smallText}>Repostería Artesanal</p>

            <p style={styles.smallText}>+51 987654321</p>

            <p style={styles.smallText}>
              info@sweetcreamrose.com
            </p>

            <p style={styles.smallText}>
              www.sweetcreamrose.com
            </p>
          </div>

          {/* BOLETA */}
          <div
            style={{
              width: "240px",
              border: "2px solid #d47272",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                margin: "0 0 10px 0",
                color: "#b85c5c",
                fontSize: "18px",
              }}
            >
              BOLETA DE VENTA ELECTRÓNICA
            </h3>

            <p style={{ margin: "5px 0", fontSize: "13px" }}>
              RUC: 20458706521
            </p>

            <div
              style={{
                backgroundColor: "#f7dede",
                padding: "10px",
                marginTop: "10px",
                color: "#b85c5c",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              B001-00025874
            </div>
          </div>
        </div>

        {/* FECHAS */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <div style={{ fontSize: "13px" }}>
            <p>
              <strong>Fecha de emisión:</strong> 15/05/2025
            </p>

            <p>
              <strong>Hora de emisión:</strong> 11:45 AM
            </p>
          </div>
        </div>

        {/* CLIENTE */}
        <div
          style={{
            border: "1px solid #d8a4a4",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f7dede",
              padding: "10px",
              color: "#b85c5c",
              fontWeight: "bold",
            }}
          >
            DATOS DEL CLIENTE
          </div>

          <div
            style={{
              padding: "15px",
              fontSize: "13px",
            }}
          >
            <p>
              <strong>Nombres:</strong> María López
            </p>

            <p>
              <strong>DNI:</strong> 40859640
            </p>

            <p>
              <strong>Dirección:</strong> Av. Las Esperanzas 123,
              Chorrillos - Lima
            </p>
          </div>
        </div>

        {/* TABLA */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
            fontSize: "13px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f7dede" }}>
              <th style={styles.th}>CANT.</th>
              <th style={styles.th}>DESCRIPCIÓN</th>
              <th style={styles.th}>U. MED.</th>
              <th style={styles.th}>P. UNIT</th>
              <th style={styles.th}>IMPORTE</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={styles.td}>1</td>
              <td style={styles.td}>Torta de Chocolate</td>
              <td style={styles.td}>NIU</td>
              <td style={styles.td}>S/ 50.00</td>
              <td style={styles.td}>S/ 50.00</td>
            </tr>

            <tr>
              <td style={styles.td}>1</td>
              <td style={styles.td}>Cupcakes de Arándanos</td>
              <td style={styles.td}>NIU</td>
              <td style={styles.td}>S/ 18.00</td>
              <td style={styles.td}>S/ 18.00</td>
            </tr>

            <tr>
              <td style={styles.td}>1</td>
              <td style={styles.td}>Tequeños con queso</td>
              <td style={styles.td}>NIU</td>
              <td style={styles.td}>S/ 28.00</td>
              <td style={styles.td}>S/ 28.00</td>
            </tr>
          </tbody>
        </table>

        {/* TOTAL + PAGO */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          {/* PAGO */}
          <div
            style={{
              width: "40%",
              border: "1px solid #d8a4a4",
              padding: "15px",
            }}
          >
            <h4
              style={{
                marginTop: 0,
                color: "#b85c5c",
              }}
            >
              CONDICIÓN DE PAGO
            </h4>

            <p style={styles.smallText}>CONTADO</p>
            <p style={styles.smallText}>Medio de pago: YAPE</p>
            <p style={styles.smallText}>YAPE</p>
          </div>

          {/* TOTALES */}
          <div
            style={{
              width: "40%",
              border: "1px solid #d8a4a4",
            }}
          >
            <div style={styles.totalRow}>
              <span>SUBTOTAL</span>
              <span>S/ 96.61</span>
            </div>

            <div style={styles.totalRow}>
              <span>IGV 18%</span>
              <span>S/ 17.39</span>
            </div>

            <div
              style={{
                ...styles.totalRow,
                backgroundColor: "#f7dede",
                color: "#b85c5c",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              <span>IMPORTE TOTAL</span>
              <span>S/ 114.00</span>
            </div>

            <div
              style={{
                padding: "10px",
                fontSize: "12px",
              }}
            >
              Son: Ciento catorce con 00/100 soles.
            </div>
          </div>
        </div>

        {/* REPRESENTACIÓN */}
        <div
          style={{
            border: "1px solid #d8a4a4",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ width: "75%" }}>
            <h4
              style={{
                color: "#b85c5c",
                marginTop: 0,
              }}
            >
              ESTA ES UNA REPRESENTACIÓN IMPRESA DE LA BOLETA
              DE VENTA ELECTRÓNICA
            </h4>

            <p style={styles.smallText}>
              Puede ser consultada en la página web de la SUNAT
            </p>

            <p style={styles.smallText}>
              <strong>Código Hash:</strong>{" "}
              a1b2c3d4e5f67890
            </p>
          </div>

          {/* QR */}
          <div
            style={{
              width: "100px",
              height: "100px",
              border: "2px solid #ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "12px",
              color: "#777",
            }}
          >
            QR
          </div>
        </div>

        {/* FOOTER */}
        <div
          style={{
            textAlign: "center",
            color: "#d47272",
            fontFamily: "cursive",
            fontSize: "28px",
            marginBottom: "15px",
          }}
        >
          ¡Gracias por su compra!
        </div>

        {/* ICONOS */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            fontSize: "12px",
            color: "#777",
            textAlign: "center",
          }}
        >
          <div>🌿 Ingredientes seleccionados</div>
          <div>❤️ Hecho con amor</div>
          <div>🚚 Envíos seguros</div>
          <div>👩 Atención personalizada</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  th: {
    border: "1px solid #d8a4a4",
    padding: "10px",
    color: "#b85c5c",
  },

  td: {
    border: "1px solid #d8a4a4",
    padding: "10px",
    textAlign: "center",
  },

  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 15px",
    borderBottom: "1px solid #d8a4a4",
    fontSize: "14px",
  },

  smallText: {
    margin: "5px 0",
    fontSize: "12px",
  },
};

export default Recibo3;