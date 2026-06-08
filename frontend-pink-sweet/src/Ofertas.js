// Ofertas.js — Página de OFERTAS
// Replica exactamente ofertas.html

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from './Layout';
import './Stylee.css';

const ofertasDestacadas = [
  { img: '/assets/products/torta triple chocolate.jpg', nombre: 'Torta Triple Chocolate', desc: 'Delicioso bizcocho de chocolate con relleno y cobertura de ganache, decorada con crema de chocolate.', precioOld: 'S/. 80.00', precioNew: 'S/. 64.00', badge: '-20%' },
  { img: '/assets/products/tequeños.png',               nombre: 'Croissant Relleno',       desc: 'Croissant crocante con suave relleno de queso.',                                                       precioOld: 'S/. 38.00', precioNew: 'S/. 32.30', badge: '-15%' },
  { img: '/assets/products/trufas.png',                 nombre: 'Trufas de Fresa',          desc: 'Delicadas trufas de chocolate rellenas con crema sabor fresa.',                                        precioOld: 'S/. 45.00', precioNew: 'S/. 33.75', badge: '-25%' },
  { img: '/assets/products/empanadas.png',              nombre: 'Mini Empanadas de Carne',  desc: 'Empanadas doradas con relleno de carne casera.',                                                       precioOld: 'S/. 36.00', precioNew: 'S/. 30.60', badge: '-15%' },
  { img: '/assets/products/alfajores.png',              nombre: 'Alfajor Clásico',           desc: 'Alfajores artesanales rellenos de manjar y espolvoreados con azúcar.',                                precioOld: 'S/. 28.00', precioNew: 'S/. 22.40', badge: '-20%' },
  { img: '/assets/products/cupcake_arandano.png',       nombre: 'Cupcakes de Arándano',     desc: 'Cupcakes esponjosos decorados con crema y arándanos frescos.',                                         precioOld: 'S/. 42.00', precioNew: 'S/. 37.80', badge: '-10%' },
];

function Ofertas() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#FFF0F2', fontFamily: "'Segoe UI', sans-serif", color: '#4A3E3F' }}>
      <Header />

      {/* ══ Cabecera ofertas ══ */}
      <section className="offers-header">
        <div className="center-logo">
          <img src="/assets/products/logo.png" alt="Sweet Cream Rose" className="main-offers-logo"
               onError={e => e.target.style.display='none'} />
        </div>
        <div className="welcome-text">
          <p className="cursive-text">Aprovecha nuestras ofertas en postres artesanales hechos con amor.</p>
          <p className="cursive-text">Sabores irresistibles ahora a precios especiales.</p>
        </div>
        <div className="title-deco">
          <h2>OFERTAS</h2>
          <div className="deco-hearts"> --- 🤍 ---</div>
        </div>
      </section>

      {/* ══ Banner hero oferta ══ */}
      <section className="main-offer-section">
        <div className="hero-offer-banner">
          <div className="hero-offer-content">
            <span className="special-tag"><i className="fa-solid fa-heart"></i> DESCUENTOS ESPECIALES</span>
            <h2>Disfruta lo mejor por menos</h2>
            <p>Aprovecha nuestras ofertas por tiempo limitado en tus productos favoritos.</p>
            <a href="#ofertas-grid" className="btn-hero-offer">
              APROVECHAR OFERTA <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="hero-offer-image">
            <img src="/assets/products/torta de fresa.png" alt="Torta Especial"
                 onError={e => e.target.style.display='none'} />
            <div className="discount-badge-circle">
              <span className="badge-small">Hasta</span>
              <span className="badge-large">25%</span>
              <span className="badge-small">DSCTO.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Grid ofertas ══ */}
      <section className="featured-offers-section" id="ofertas-grid">
        <div className="section-tag-title">
          <i className="fa-solid fa-tag tag-icon"></i> OFERTAS DESTACADAS
          <div className="deco-hearts"> ------------- </div>
        </div>

        <div className="offers-grid">
          {ofertasDestacadas.map((o, i) => (
            <div key={i} className="offer-card">
              <div className="badge-discount-sticker">{o.badge}</div>
              <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
              <img src={o.img} alt={o.nombre} onError={e => { e.target.style.minHeight='160px'; e.target.style.backgroundColor='#F9D5DA'; e.target.style.display='none'; }} />
              <div className="offer-card-body">
                <h3>{o.nombre}</h3>
                <p className="description">{o.desc}</p>
                <div className="price-container">
                  <span className="old-price">{o.precioOld}</span>
                  <span className="new-price">{o.precioNew}</span>
                </div>
                <button className="btn-add-cart">
                  <i className="fa-solid fa-cart-shopping"></i> AÑADIR AL CARRITO
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ Banner tiempo limitado ══ */}
      <section className="limited-time-container">
        <div className="limited-time-banner">
          <div className="limited-left">
            <div className="clock-circle">
              <i className="fa-regular fa-clock"></i>
            </div>
            <div className="limited-text">
              <h3>¡OFERTAS POR TIEMPO LIMITADO!</h3>
              <p>No te quedes sin tus favoritos. Promociones válidas hasta agotar stock</p>
            </div>
          </div>
          <a href="#ofertas-grid" className="btn-aprovechar">¡APROVÉCHALOS YA!</a>
        </div>
      </section>

      {/* ══ Props bar ══ */}
      <div className="value-props-bar">
        <div className="prop-item"><div className="prop-icon"><i className="fa-solid fa-rose"></i></div><span>Ingredientes de primera calidad</span></div>
        <div className="prop-item"><div className="prop-icon"><i className="fa-regular fa-heart"></i></div><span>Hecho con amor en cada detalle</span></div>
        <div className="prop-item"><div className="prop-icon"><i className="fa-solid fa-truck"></i></div><span>Envíos seguros y rápidos</span></div>
        <div className="prop-item"><div className="prop-icon"><i className="fa-regular fa-user"></i></div><span>Atención personalizada para ti</span></div>
      </div>

      <Footer />
    </div>
  );
}

export default Ofertas;