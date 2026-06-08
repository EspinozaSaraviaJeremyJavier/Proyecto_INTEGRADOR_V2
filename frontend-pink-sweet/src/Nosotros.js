// Nosotros.js — Página de NOSOTROS / CONTÁCTANOS
// Replica exactamente nosotros.html

import React from 'react';
import { Header, Footer } from './Layout';
import './Stylee.css';

function Nosotros() {
  return (
    <div style={{ backgroundColor: '#FFF0F2', fontFamily: "'Segoe UI', sans-serif", color: '#4A3E3F' }}>
      <Header />

      {/* ══ Hero Nosotros ══ */}
      <section className="contact-hero-section">
        <div className="contact-hero-container">
          <div className="contact-hero-text">
            <h1 className="cursive-brand-title">Contáctanos</h1>
            <h2>¡Ven a conocernos y endulza tu día!</h2>
            <p>Siempre estamos felices de recibirte y atenderte. A continuación te dejamos toda la información para que nos encuentres fácil y rápido:</p>
          </div>
          <div className="contact-hero-image">
            <img src="/assets/products/cupcakecorazon.jpg" alt="Cupcakes Sweet Cream Rose"
                 onError={e => e.target.style.display='none'} />
          </div>
        </div>
      </section>

      {/* ══ Tarjetas de info ══ */}
      <section className="info-cards-section">
        <div className="cards-grid-container">

          <div className="outer-info-card">
            <div className="inner-info-card">
              <h3>Nuestra Sucursal</h3>
              <p className="card-address">Larcomar<br />Mal. de la Reserva 610, Miraflores 15074</p>
              <div className="map-container-box">
                <img src="/assets/products/mapa.jpg" alt="Ubicación en el mapa" className="map-static-img"
                     onError={e => e.target.style.display='none'} />
              </div>
              <a href="https://maps.app.goo.gl/f1KiFD5F15MLFb358" target="_blank" rel="noreferrer" className="btn-card-action">
                Cómo llegar
              </a>
            </div>
          </div>

          <div className="outer-info-card">
            <div className="inner-info-card">
              <h3>Horarios y Contacto</h3>
              <ul className="card-schedule-list">
                <li>Lunes a Sábado de 9:00 am - 8:00 pm</li>
                <li>Domingo de 9:00 am - 4:00 pm</li>
              </ul>
              <div className="card-direct-contact">
                <p><i className="fa-solid fa-phone"></i> 81 1234 5678</p>
                <p><i className="fa-solid fa-envelope"></i> info@SweetCreamRose.com</p>
              </div>
              <div className="card-social-icons">
                <a href="#" className="social-circle-btn"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="social-circle-btn"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="social-circle-btn"><i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ Formulario de mensaje ══ */}
      <section className="message-form-section">
        <div className="form-main-banner">
          <div className="form-left-illustration">
            <img src="/assets/products/mapa.jpg" alt="Ilustración"
                 onError={e => e.target.style.display='none'} />
          </div>
          <div className="form-right-content">
            <h2>Déjanos un mensaje</h2>
            <p>¿Tienes alguna pregunta o sugerencia? Completa el formulario y te responderemos lo más pronto posible.</p>
            <form className="contact-inner-form" onSubmit={e => e.preventDefault()}>
              <div className="form-field-group">
                <label htmlFor="user-name">Nombre</label>
                <input type="text" id="user-name" placeholder="Escribe tu nombre completo" required />
              </div>
              <div className="form-field-group">
                <label htmlFor="user-message">Mensaje</label>
                <textarea id="user-message" placeholder="Mensaje" rows="4" required></textarea>
              </div>
              <div className="form-submit-container">
                <button type="submit" className="btn-submit-message">ENVIAR</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Nosotros;