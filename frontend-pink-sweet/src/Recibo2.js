import React from "react";

const Recibo2 = () => {
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
          border: "1px solid #d9a5a5",
          padding: "25px",
          color: "#6b4b4b",
        }}
      >
        {/* ENCABEZADO */}
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
                color: "#d27b7b",
                margin: 0,
                fontFamily: "cursive",
              }}
            >
              Sweet Kiss
            </h1>

            <p style={{ margin: "5px 0", fontSize: "13px" }}>
              Repostería Artesanal
            </p>

            <p style={{ margin: "4px 0", fontSize: "12px" }}>
              Calle Principal 145, Lima, Perú
            </p>

            <p style={{ margin: "4px 0", fontSize: "12px" }}>
              +51 999 123 456
            </p>

            <p style={{ margin: "4px 0", fontSize: "12px" }}>
              contacto@sweetkiss.com
            </p>
          </div>

          {/* FACTURA */}
          <div
            style={{
              border: "2px solid #d27b7b",
              padding: "15px",
              width: "250px",
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
              FACTURA DE VENTA ELECTRÓNICA
            </h3>

            <p style={{ margin: "5px 0", fontSize: "14px" }}>
              RUC: 20458706521
            </p>

            <div
              style={{
                backgroundColor: "#f5dede",
                padding: "10px",
                marginTop: "10px",
                fontWeight: "bold",
                color: "#b85c5c",
              }}
            >
              B001 - 00005874
            </div>
          </div>
        </div>

        {/* FECHAS */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "30px",
            marginBottom: "20px",
            fontSize: "13px",
          }}
        >
          <div>
            <p>
              <strong>Fecha de emisión:</strong> 15/06/2024
            </p>
            <p>
              <strong>Hora:</strong> 11:45 AM
            </p>
            <p>
              <strong>Vencimiento:</strong> 15/06/2024
            </p>
          </div>
        </div>

        {/* DATOS CLIENTE */}
        <div
          style={{
            border: "1px solid #d9a5a5",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f5dede",
              padding: "10px",
              fontWeight: "bold",
              color: "#b85c5c",
            }}
          >
            DATOS DEL CLIENTE
          </div>

          <div style={{ padding: "15px", fontSize: "13px" }}>
            <p>
              <strong>Razón social:</strong> Inversiones Dulces S.A.C
            </p>

            <p>
              <strong>RUC:</strong> 20123456789
            </p>

            <p>
              <strong>Dirección:</strong> Av. Los Manzanos 456 - Lima
            </p>

            <p>
              <strong>Correo:</strong> contacto@dulcessac.com
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
            <tr style={{ backgroundColor: "#f5dede", color: "#b85c5c" }}>
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
              <td style={styles.td}>S/ 55.00</td>
              <td style={styles.td}>S/ 55.00</td>
            </tr>

            <tr>
              <td style={styles.td}>2</td>
              <td style={styles.td}>Cupcakes de vainilla</td>
              <td style={styles.td}>NIU</td>
              <td style={styles.td}>S/ 18.00</td>
              <td style={styles.td}>S/ 36.00</td>
            </tr>

            <tr>
              <td style={styles.td}>1</td>
              <td style={styles.td}>Tequeños con queso</td>
              <td style={styles.td}>NIU</td>
              <td style={styles.td}>S/ 24.00</td>
              <td style={styles.td}>S/ 24.00</td>
            </tr>
          </tbody>
        </table>

        {/* OBSERVACIONES + TOTALES */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          {/* OBSERVACIONES */}
          <div
            style={{
              flex: 1,
              border: "1px solid #d9a5a5",
              padding: "15px",
            }}
          >
            <h4 style={{ color: "#b85c5c", marginTop: 0 }}>
              OBSERVACIONES
            </h4>

            <p>Gracias por su preferencia</p>
          </div>

          {/* TOTALES */}
          <div
            style={{
              width: "280px",
              border: "1px solid #d9a5a5",
            }}
          >
            <div style={styles.totalRow}>
              <span>OP. GRAVADA</span>
              <span>S/ 96.61</span>
            </div>

            <div style={styles.totalRow}>
              <span>IGV 18%</span>
              <span>S/ 17.39</span>
            </div>

            <div
              style={{
                ...styles.totalRow,
                backgroundColor: "#f5dede",
                fontWeight: "bold",
                color: "#b85c5c",
                fontSize: "16px",
              }}
            >
              <span>IMPORTE TOTAL</span>
              <span>S/ 114.00</span>
            </div>
          </div>
        </div>

        {/* PIE */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div
            style={{
              flex: 1,
              border: "1px solid #d9a5a5",
              padding: "15px",
              fontSize: "13px",
            }}
          >
            <h4 style={{ color: "#b85c5c", marginTop: 0 }}>
              CONDICIONES DE PAGO
            </h4>

            <p>CONTADO</p>
            <p>Medio de pago: YAPE</p>
            <p>Código Hash: a1b2c3d4e5</p>
          </div>

          <div
            style={{
              flex: 1,
              border: "1px solid #d9a5a5",
              padding: "15px",
              textAlign: "center",
              fontSize: "13px",
            }}
          >
            <p>Representación impresa de la</p>

            <h3 style={{ color: "#b85c5c" }}>
              FACTURA ELECTRÓNICA
            </h3>

            <p>
              Puede verificar el comprobante en:
              <br />
              www.sunat.gob.pe
            </p>
          </div>
        </div>

        {/* MENSAJE FINAL */}
        <div
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#b85c5c",
            fontFamily: "cursive",
            fontSize: "24px",
          }}
        >
          ¡Gracias por su compra!
        </div>
      </div>
    </div>
  );
};

const styles = {
  th: {
    border: "1px solid #d9a5a5",
    padding: "10px",
    textAlign: "center",
  },

  td: {
    border: "1px solid #d9a5a5",
    padding: "10px",
    textAlign: "center",
  },

  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 15px",
    borderBottom: "1px solid #d9a5a5",
    fontSize: "14px",
  },
};

export default Recibo2;