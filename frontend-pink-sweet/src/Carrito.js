// Carrito.js — Página de CARRITO
// Replica exactamente carrito.html con lógica funcional

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from './Layout';
import './Stylee.css';

const itemsIniciales = [
  { id: 1, img: '/assets/products/torta_principal.jpg',       nombre: 'Torta Triple Chocolate',  desc: 'Deliciosa torta de chocolate húmedo con ganache', precio: 48.00, cantidad: 1 },
  { id: 2, img: '/assets/products/cupcake_arandano.png',      nombre: 'Cupcake de Arándanos',    desc: 'Cupcakes de vainilla con arándanos frescos',      precio: 16.00, cantidad: 2 },
  { id: 3, img: '/assets/products/torta triple chocolate.jpg', nombre: 'Alfajor Tradicional',    desc: 'Alfajor artesanal con manjar blanco y azúcar',    precio: 11.00, cantidad: 1 },
];

function Carrito() {
  const navigate = useNavigate();
  const [items, setItems] = useState(itemsIniciales);
  const [comprobante, setComprobante] = useState('boleta');
  const [comentario, setComentario] = useState('');
  const ENVIO = 8.00;

  const cambiarCantidad = (id, delta) => {
    setItems(prev => prev.map(item => {
      if (item.id !== id) return item;
      const nueva = item.cantidad + delta;
      return nueva < 1 ? item : { ...item, cantidad: nueva };
    }));
  };

  const eliminar = (id) => setItems(prev => prev.filter(item => item.id !== id));

  const subtotal = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const igv = subtotal * 0.18;
  const total = subtotal + ENVIO + igv;
  const totalProductos = items.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div style={{ backgroundColor: '#FFF0F2', fontFamily: "'Segoe UI', sans-serif", color: '#4A3E3F' }}>
      <Header />

      <main className="cart-page-container">
        {/* ══ Bienvenida ══ */}
        <div className="cart-welcome-header">
          <img src="/assets/products/logo.png" alt="Sweet Cream Rose" className="cart-circle-logo"
               onError={e => e.target.style.display='none'} />
          <p className="cart-welcome-text">Tu espacio personal para organizar tus pedidos, favoritos y disfrutar de una experiencia más dulce.</p>
        </div>

        <h2 className="cart-main-title">MI CARRITO</h2>
        <div className="title-divider"><span>--- ♥️ ---</span></div>

        {/* ══ Productos ══ */}
        <section className="cart-section-box">
          <h3 className="cart-box-title">
            <i className="fas fa-shopping-basket"></i> PRODUCTOS EN TU CARRITO ({totalProductos})
          </h3>

          <div className="cart-items-list" id="cart-items-container">
            {items.length === 0 ? (
              <p style={{ textAlign: 'center', padding: 30, color: '#888' }}>
                Tu carrito está vacío. <a onClick={() => navigate('/productos')} style={{ color: '#B86B74', cursor: 'pointer' }}>Ver productos</a>
              </p>
            ) : items.map(item => (
              <div key={item.id} className="cart-item-row">
                <img src={item.img} alt={item.nombre} className="item-img" onError={e => e.target.style.display='none'} />
                <div className="item-details">
                  <h4>{item.nombre}</h4>
                  <p>{item.desc}</p>
                </div>
                <div className="item-controls">
                  <div className="quantity-selector">
                    <button className="qty-btn btn-minus" onClick={() => cambiarCantidad(item.id, -1)}>-</button>
                    <span className="qty-value">{item.cantidad}</span>
                    <button className="qty-btn btn-plus" onClick={() => cambiarCantidad(item.id, +1)}>+</button>
                  </div>
                </div>
                <div className="item-pricing">
                  <span className="item-price">S/ {item.precio.toFixed(2)}</span>
                  <span className="item-subtotal">Subtotal: S/ {(item.precio * item.cantidad).toFixed(2)}</span>
                  <button className="btn-delete-item" onClick={() => eliminar(item.id)}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>

          <div className="delivery-status-box">
            <div className="delivery-info">
              <i className="fas fa-map-marker-alt pin-icon"></i>
              <div>
                <span className="delivery-title">Enviar a Casa</span>
                <span className="delivery-address">Av. Los Rosales 123, San Borja, Lima - Lima</span>
              </div>
            </div>
            <a href="#" className="btn-change-address">Cambiar →</a>
          </div>

          <div className="center-btn-container">
            <a href="#" className="btn-shipping-options">
              <i className="fas fa-truck"></i> ELEGIR OPCIONES DE ENVÍO
            </a>
          </div>
        </section>

        {/* ══ Comentarios del pedido ══ */}
        <section className="cart-comments-box">
          <h3 className="comments-box-title">
            <i className="far fa-comment-dots"></i> COMENTARIOS DEL PEDIDO (OPCIONAL)
          </h3>
          <p className="comments-box-subtitle">Agrega indicaciones especiales para tu pedido, mensaje en la torta, detalles de entrega, etc.</p>
          <div className="textarea-container">
            <textarea
              id="cart-textarea"
              placeholder='Ejem: Escribir "Feliz cumpleaños Ana" en la torta'
              maxLength={250}
              value={comentario}
              onChange={e => setComentario(e.target.value)}
            ></textarea>
            <span className="char-count">{comentario.length}/250</span>
          </div>
        </section>

        {/* ══ Comprobante ══ */}
        <section className="cart-section-box">
          <h3 className="cart-box-title">
            <i className="far fa-clipboard"></i> COMPROBANTE DE PAGO
          </h3>
          <p className="cart-box-subtitle">Selecciona el tipo de comprobante</p>

          <div className="invoice-radio-group">
            <label className="radio-label">
              <input type="radio" name="comprobante" value="boleta" checked={comprobante === 'boleta'}
                     onChange={() => setComprobante('boleta')} />
              <span className="custom-radio"></span>
              <strong>Boleta</strong> (Para persona natural)
            </label>
            <label className="radio-label">
              <input type="radio" name="comprobante" value="factura" checked={comprobante === 'factura'}
                     onChange={() => setComprobante('factura')} />
              <span className="custom-radio"></span>
              <strong>Factura</strong> (Para empresa)
            </label>
          </div>

          {comprobante === 'boleta' && (
            <div className="invoice-form-grid">
              <div className="invoice-field">
                <label>Nombre Completo (Opcional)</label>
                <input type="text" placeholder="Ej. María Rodríguez" />
              </div>
              <div className="invoice-field">
                <label>DNI (Opcional)</label>
                <input type="text" placeholder="Ej. 12345678" />
              </div>
            </div>
          )}

          {comprobante === 'factura' && (
            <div className="invoice-form-grid">
              <div className="invoice-field">
                <label>Razón Social</label>
                <input type="text" placeholder="Ej. Inversiones Dulces S.A.C." />
              </div>
              <div className="invoice-field">
                <label>RUC</label>
                <input type="text" placeholder="Ej. 20123456789" />
              </div>
              <div className="invoice-field" style={{ gridColumn: 'span 2' }}>
                <label>Dirección Fiscal</label>
                <input type="text" placeholder="Ej. Av. Primavera 456, San Borja" />
              </div>
            </div>
          )}
        </section>

        {/* ══ Resumen del pedido ══ */}
        <section className="cart-section-box">
          <h3 className="cart-box-title">
            <i className="fas fa-receipt"></i> RESUMEN DEL PEDIDO
          </h3>
          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal ({totalProductos} productos)</span>
              <span>S/ {subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Envío</span>
              <span>S/ {ENVIO.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>IGV (18%)</span>
              <span>S/ {igv.toFixed(2)}</span>
            </div>
            <div className="summary-row total-row">
              <span>TOTAL</span>
              <span className="total-price">S/ {total.toFixed(2)}</span>
            </div>
          </div>

          <div className="center-btn-container">
            <button className="btn-submit-pay" onClick={() => alert('¡Procesando pago con Sweet Cream Rose!')}>
              IR A PAGAR →
            </button>
          </div>

          <div className="secure-checkout-badge">
            <div className="shield-circle">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="secure-text">
              <h4>Tus compras están 100% protegidas</h4>
              <p>Usamos tecnología de encriptación avanzada para proteger tu información</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Carrito;