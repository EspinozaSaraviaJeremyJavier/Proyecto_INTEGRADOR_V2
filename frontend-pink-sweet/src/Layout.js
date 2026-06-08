// Layout.js — Header y Footer compartidos entre todas las páginas
// Replica exactamente el diseño de los HTML estáticos (css/style.css)

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const paginaActiva = location.pathname;

  const irA = (ruta, htmlRuta) => {
    // Si la ruta tiene componente React, usar navigate; si no, href HTML
    if (['/','  /productos', '/ofertas', '/nosotros', '/carrito', '/perfil'].includes(ruta)) {
      navigate(ruta);
    } else {
      window.location.href = htmlRuta;
    }
  };

  const esActiva = (ruta) => paginaActiva === ruta;

  return (
    <header style={{
      backgroundColor: '#B86B74',
      color: '#fff',
      padding: '0 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      minHeight: 80,
    }}>
      {/* Logo */}
      <div className="logo-container" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        <h1 style={{ margin: 0, padding: 0, display: 'inline-flex', alignItems: 'center' }}>
          <img
            src="/assets/products/letra.png"
            alt="Sweet Cream Rose Logo"
            style={{ height: 80, width: 'auto', marginTop: -20, marginBottom: -20, objectFit: 'contain', display: 'block' }}
            onError={e => { e.target.style.display='none'; }}
          />
        </h1>
      </div>

      {/* Navegación */}
      <nav>
        {[
          { label: 'INICIO',     ruta: '/' },
          { label: 'PRODUCTOS',  ruta: '/productos' },
          { label: 'OFERTAS',    ruta: '/ofertas' },
          { label: 'NOSOTROS',   ruta: '/nosotros' },
        ].map(item => (
          <a
            key={item.ruta}
            onClick={() => navigate(item.ruta)}
            style={{
              color: '#fff',
              textDecoration: 'none',
              margin: '0 12px',
              fontWeight: 600,
              fontSize: '0.9rem',
              opacity: esActiva(item.ruta) ? 0.7 : 1,
              cursor: 'pointer',
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Íconos derecha */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
        {/* Buscador */}
        <div style={{
          position: 'relative',
          background: '#fff',
          borderRadius: 20,
          padding: '5px 15px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <input
            type="text"
            placeholder="Buscar..."
            style={{ border: 'none', outline: 'none', width: 150, fontSize: '0.85rem' }}
          />
          <i className="fa-solid fa-magnifying-glass" style={{ color: '#999' }}></i>
        </div>

        {/* Perfil */}
        <a
          onClick={() => navigate('/perfil')}
          style={{ textDecoration: 'none', color: '#fff', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
        >
          <i className="fa-regular fa-user" style={{ fontSize: '1.3rem' }}></i>
        </a>

        {/* Carrito */}
        <a
          onClick={() => navigate('/carrito')}
          style={{ textDecoration: 'none', color: '#fff', cursor: 'pointer', position: 'relative', fontSize: '1.3rem', display: 'inline-flex', alignItems: 'center' }}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span style={{
            position: 'absolute', top: -8, right: -10,
            background: '#fff', color: '#B86B74',
            borderRadius: '50%', padding: '1px 5px',
            fontSize: '0.7rem', fontWeight: 700,
          }}>0</span>
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  const navigate = useNavigate();
  return (
    <footer style={{
      backgroundColor: '#B86B74',
      color: '#fff',
      padding: '40px 5% 15px 5%',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 30,
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      {/* Marca */}
      <div>
        <img src="/assets/products/logo.png" alt="Sweet Cream Rose" style={{ width: 80, marginBottom: 15 }}
             onError={e => e.target.style.display='none'} />
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', marginBottom: 20 }}>
          En un Mundo de experiencias duras con un pastel dale dulzura.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontWeight: 700, fontSize: '0.85rem', marginRight: 5 }}>SÍGUENOS</span>
          <a href="#" style={{ color: '#fff', fontSize: '1.1rem', marginRight: 8 }}><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#" style={{ color: '#fff', fontSize: '1.1rem', marginRight: 8 }}><i className="fa-brands fa-instagram"></i></a>
          <a href="#" style={{ color: '#fff', fontSize: '1.1rem' }}><i className="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>

      {/* Enlaces */}
      <div>
        <h3 style={{ fontSize: '1rem', marginBottom: 15, borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: 5 }}>ENLACES</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[['/', 'Inicio'], ['/productos', 'Productos'], ['/ofertas', 'Ofertas'], ['/nosotros', 'Nosotros']].map(([ruta, label]) => (
            <li key={ruta} style={{ marginBottom: 8 }}>
              <a onClick={() => navigate(ruta)} style={{ color: '#fff', textDecoration: 'none', fontSize: '0.85rem', cursor: 'pointer' }}>{label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Ayuda */}
      <div>
        <h3 style={{ fontSize: '1rem', marginBottom: 15, borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: 5 }}>AYUDA</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {['Preguntas frecuentes', 'Políticas de envío', 'Términos y condiciones', 'Políticas de privacidad'].map(item => (
            <li key={item} style={{ marginBottom: 8 }}>
              <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.85rem' }}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contacto */}
      <div>
        <h3 style={{ fontSize: '1rem', marginBottom: 15, borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: 5 }}>CONTÁCTANOS</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem' }}><i className="fa-solid fa-location-dot"></i> Lima, Perú</li>
          <li style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem' }}><i className="fa-solid fa-phone"></i> +51 987654900</li>
          <li style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem' }}><i className="fa-solid fa-envelope"></i> info@SweetCreamRose.com</li>
          <li style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem' }}><i className="fa-solid fa-clock"></i> Lunes a Sábado: 9am - 6pm</li>
        </ul>
      </div>

      {/* Copyright */}
      <div style={{
        gridColumn: '1 / -1',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: 15,
        textAlign: 'center',
        fontSize: '0.8rem',
        opacity: 0.8,
      }}>
        <p>© 2026 Sweet Cream Rose. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}