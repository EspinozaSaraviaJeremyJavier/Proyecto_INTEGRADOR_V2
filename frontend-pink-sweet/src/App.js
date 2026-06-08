// ═══════════════════════════════════════════════════════════════════════════════
// App.js — Sweet Cream Rose | Pantalla Principal (Home)
// ═══════════════════════════════════════════════════════════════════════════════
// Este archivo es el componente raíz de la aplicación React.
// Contiene TODA la pantalla principal tal como aparece en las imágenes de diseño:
//   1. Navbar con búsqueda funcional, logo, menú e íconos de perfil y carrito
//   2. Slider "Nuestros Especiales" con autoplay y dots interactivos
//   3. Sección "Lo Más Comprado" con 6 productos en grid
//   4. Sección "Promociones de Festividad" (Navidad y Halloween)
//   5. Formulario "Deja tu comentario" conectado al backend Spring Boot
//   6. Footer con links, ayuda, contacto y redes sociales
// ═══════════════════════════════════════════════════════════════════════════════

import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

// ── Importación de páginas internas (ya existentes en el proyecto) ─────────────
import Productos   from './Productos';
import Ofertas     from './Ofertas';
import Nosotros    from './Nosotros';
import Login       from './Login';
import Registro    from './Registro';
import Carrito     from './Carrito';
import Perfil      from './Perfil';
import DashboardAdmin from './DashboardAdmin';

// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENTE: Header / Navbar
// Muestra el encabezado rosa con logo, menú de navegación, búsqueda y íconos
// ═══════════════════════════════════════════════════════════════════════════════
function Header({ onBuscar }) {
  const navigate = useNavigate();
  const [query, setQuery]     = useState('');         // Texto en la barra de búsqueda
  const [cartCount, setCartCount] = useState(2);      // Contador del carrito (dinámico)

  // Manejar el Enter o clic en la lupa para buscar
  const handleBuscar = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (query.trim()) {
        // Navegar a productos con el parámetro de búsqueda en la URL
        navigate(`/productos?buscar=${encodeURIComponent(query.trim())}`);
        if (onBuscar) onBuscar(query.trim());
      }
    }
  };

  return (
    <header className="navbar-custom">
      {/* ── Logo + Nombre de marca ─────────────────────────────── */}
      <div className="brand-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img
          src="/assets/logo.png"
          alt="Sweet Cream Rose Logo"
          className="logo-img"
          onError={e => { e.target.style.display = 'none'; }}
        />
        <div className="brand-text">
          <span className="brand-main">Sweet Cream Rose</span>
          <span className="brand-tag">Repostería artesanal</span>
        </div>
      </div>

      {/* ── Menú de navegación central ────────────────────────────── */}
      <nav className="nav-menu">
        <span onClick={() => navigate('/')}>INICIO</span>
        <span onClick={() => navigate('/productos')}>PRODUCTOS</span>
        <span onClick={() => navigate('/ofertas')}>OFERTAS</span>
        <span onClick={() => navigate('/nosotros')}>NOSOTROS</span>
      </nav>

      {/* ── Barra de búsqueda + íconos de usuario y carrito ──────── */}
      <div className="nav-right">
        {/* Barra de búsqueda */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleBuscar}
          />
          {/* Ícono lupa: busca al hacer clic */}
          <span onClick={handleBuscar} style={{ cursor: 'pointer', color: '#aaa', fontSize: '1rem' }}>
            🔍
          </span>
        </div>

        {/* Ícono de usuario / perfil */}
        <span
          className="icon-nav"
          onClick={() => navigate('/login')}
          title="Iniciar sesión"
        >
          👤
        </span>

        {/* Ícono de carrito con contador */}
        <span
          className="icon-nav cart-icon"
          onClick={() => navigate('/carrito')}
          title="Ver carrito"
          style={{ position: 'relative' }}
        >
          🛒
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </span>
      </div>
    </header>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENTE: Footer
// Pie de página con logo, links, ayuda, contacto y redes sociales
// ═══════════════════════════════════════════════════════════════════════════════
function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer-section">
      <div className="footer-inner">

        {/* ── Columna 1: Logo + eslogan ────────────────────────────── */}
        <div className="footer-col footer-brand">
          <img
            src="/assets/logo.png"
            alt="Sweet Cream Rose"
            className="footer-logo"
            onError={e => { e.target.style.display = 'none'; }}
          />
          <p className="footer-slogan">
            En un Mundo de esperiencias duras con un pastel dale dulcura.
          </p>
          {/* Redes sociales */}
          <div className="footer-social">
            <span className="social-link" title="Facebook">📘</span>
            <span className="social-link" title="Instagram">📸</span>
            <span className="social-link" title="WhatsApp">💬</span>
          </div>
          <p className="footer-follow">SÍGUENOS</p>
        </div>

        {/* ── Columna 2: Links de navegación ──────────────────────── */}
        <div className="footer-col">
          <h4 className="footer-heading">ENLACES</h4>
          <ul className="footer-links">
            <li onClick={() => navigate('/')}>Inicio</li>
            <li onClick={() => navigate('/productos')}>Productos</li>
            <li onClick={() => navigate('/ofertas')}>Ofertas</li>
            <li onClick={() => navigate('/nosotros')}>Nosotros</li>
          </ul>
        </div>

        {/* ── Columna 3: Ayuda / Políticas ──────────────────────────── */}
        <div className="footer-col">
          <h4 className="footer-heading">AYUDA</h4>
          <ul className="footer-links">
            <li>Preguntas frecuentes</li>
            <li>Políticas de envío</li>
            <li>Términos y condiciones</li>
            <li>Políticas de privacidad</li>
          </ul>
        </div>

        {/* ── Columna 4: Información de contacto ──────────────────── */}
        <div className="footer-col">
          <h4 className="footer-heading">CONTÁCTANOS</h4>
          <ul className="footer-contact">
            <li>📍 Lima, Perú</li>
            <li>📞 +51 987654900</li>
            <li>✉️ info@SweetCreamRose.com</li>
            <li>🕐 Lunes a Sábado: 9am - 6pm</li>
          </ul>
        </div>

      </div>

      {/* ── Línea de copyright ─────────────────────────────────────── */}
      <div className="footer-copy">
        © 2026 Sweet Cream Rose. Todos los derechos reservados.
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENTE: Home (Pantalla Principal)
// Toda la lógica y estructura visual de la página de inicio
// ═══════════════════════════════════════════════════════════════════════════════
function Home() {
  const navigate = useNavigate();

  // ── Estado del slider "Nuestros Especiales" ────────────────────────────────
  const [slideActivo, setSlideActivo] = useState(0);

  // ── Estados del formulario de comentario ──────────────────────────────────
  const [nombre,    setNombre]    = useState('');
  const [comentario, setComentario] = useState('');
  const [mensaje,   setMensaje]   = useState('');

  // ── Comentarios aprobados obtenidos del backend ────────────────────────────
  const [comentariosAprobados, setComentariosAprobados] = useState([
    // Comentarios por defecto mientras carga el backend (igual a las imágenes)
    { nombre: 'Juliana López',    contenido: 'Sus paquetes son ideales para regalar sopresas.' },
    { nombre: 'Emilio Orozco',   contenido: 'Entregan a tiempo y con buena calidad cada postre.' },
    { nombre: 'Valentina Gómez', contenido: 'Tienen ricos sabores y los productos llegan a tiempo' },
  ]);

  // ── Definición de las 3 diapositivas del banner principal ─────────────────
  // Estas slides se muestran en el carrusel "Nuestros Especiales"
  const slides = [
    {
      img:   '/assets/products/torta_principal.jpg',
      title: 'Nuestros Especiales',
      text:  'Especiales para cualquier ocasión y disfrutar con las personas que mas quieres',
      bg:    '#eeb4c1',
    },
    {
      img:   '/assets/products/cupcake.jpg',
      title: 'Pack de Cupcakes',
      text:  'La combinación perfecta de sabores para compartir en tus reuniones especiales.',
      bg:    '#d4a0b0',
    },
    {
      img:   '/assets/products/alfajores.png',
      title: 'Caja de Alfajores',
      text:  'Los mejores alfajores artesanales, suaves y con mucho dulce de leche.',
      bg:    '#e8c4cc',
    },
  ];

  // ── Autoplay del slider: cambia cada 5 segundos automáticamente ───────────
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideActivo(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer); // Limpiar al desmontar el componente
  }, [slideActivo]);

  // ── Cargar comentarios aprobados desde el backend al iniciar ──────────────
  useEffect(() => {
    fetch('http://localhost:8081/api/comentarios/aprobados')
      .then(res => res.json())
      .then(data => {
        // Si el backend devuelve comentarios, reemplazar los por defecto
        if (data && data.length > 0) {
          setComentariosAprobados(data);
        }
      })
      .catch(() => {
        // Si el backend no está activo, se mantienen los comentarios por defecto
        console.warn('No se pudo conectar con el backend. Mostrando comentarios por defecto.');
      });
  }, []);

  // ── Navegación manual del slider: flecha izquierda ───────────────────────
  const handlePrev = () => {
    setSlideActivo(prev => (prev - 1 + slides.length) % slides.length);
  };

  // ── Navegación manual del slider: flecha derecha ─────────────────────────
  const handleNext = () => {
    setSlideActivo(prev => (prev + 1) % slides.length);
  };

  // ── Enviar comentario al backend Spring Boot ──────────────────────────────
  // Conecta con: POST http://localhost:8081/enviar-comentario
  const handleComentario = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !comentario.trim()) {
      setMensaje('Por favor completa todos los campos.');
      return;
    }

    // Petición al backend Java (Spring Boot) con datos del formulario
    fetch('http://localhost:8081/enviar-comentario', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    `nombre=${encodeURIComponent(nombre)}&contenido=${encodeURIComponent(comentario)}`,
    })
      .then(res => {
        if (res.ok) {
          setMensaje('¡Comentario enviado! Será revisado por el administrador.');
          setNombre('');
          setComentario('');
        } else {
          setMensaje('Error al enviar el comentario. Intenta nuevamente.');
        }
      })
      .catch(() => {
        setMensaje('No se pudo conectar con el servidor. Intenta más tarde.');
      });

    // Limpiar el mensaje de estado después de 4 segundos
    setTimeout(() => setMensaje(''), 4000);
  };

  // ── Slide actualmente visible ─────────────────────────────────────────────
  const s = slides[slideActivo];

  // ── Datos de los 6 productos "Lo Más Comprado" ────────────────────────────
  const productosDestacados = [
    { img: '/assets/products/cupcake.jpg',         label: 'Cupcake de fresa' },
    { img: '/assets/products/pay_limon.jpg',        label: 'Pay de limón' },
    { img: '/assets/products/flan.jpg',             label: 'Flan de vainilla' },
    { img: '/assets/products/galletas.jpg',         label: 'Galletas de fresa' },
    { img: '/assets/products/gelatina.jpg',         label: 'Gelatinas' },
    { img: '/assets/products/pastel_imposible.jpg', label: 'Pastel imposible' },
  ];

  return (
    <div className="home-wrapper">

      {/* ══════════════════════════════════════════════════════════════════════
          SECCIÓN 1: LOGO CENTRAL
          Aparece debajo del navbar, centrado, antes del slider
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="center-logo">
        <img
          src="/assets/logo_grande.png"
          alt="Sweet Cream Rose"
          onError={e => { e.target.src = '/assets/logo.png'; }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECCIÓN 2: SLIDER "NUESTROS ESPECIALES"
          Banner con autoplay de 5s, flechas laterales y dots clicables
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="hero-section" style={{ position: 'relative' }}>

        {/* Flecha izquierda (navega al slide anterior) */}
        <button className="slider-arrow slider-arrow-left" onClick={handlePrev}>
          &#10094;
        </button>

        {/* Contenido del slide activo con transición de color de fondo */}
        <div className="hero-container" style={{ backgroundColor: s.bg }}>
          {/* Imagen del producto destacado */}
          <div className="hero-image">
            <img
              src={s.img}
              alt={s.title}
              onError={e => { e.target.src = '/assets/products/torta_principal.jpg'; }}
            />
          </div>
          {/* Texto descriptivo y botón */}
          <div className="hero-content">
            <h2>{s.title}</h2>
            <p>{s.text}</p>
            {/* "Ver más" lleva a la página de Productos */}
            <button
              className="btn-ver-mas"
              onClick={() => navigate('/productos')}
            >
              Ver más
            </button>
          </div>
        </div>

        {/* Flecha derecha (navega al siguiente slide) */}
        <button className="slider-arrow slider-arrow-right" onClick={handleNext}>
          &#10095;
        </button>

        {/* Dots indicadores: clic para ir a un slide específico */}
        <div className="slider-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${slideActivo === i ? 'dot-active' : ''}`}
              onClick={() => setSlideActivo(i)}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECCIÓN 3: LO MÁS COMPRADO
          Grid de 3x2 con los 6 productos más vendidos
          Clic en cualquier producto lleva a la página Productos
      ══════════════════════════════════════════════════════════════════════ */}
      <main className="container">
        <h2 className="section-title">LO MÁS COMPRADO</h2>

        <div className="products-grid">
          {productosDestacados.map((p, i) => (
            <div
              key={i}
              className="product-card"
              onClick={() => navigate('/productos')}
              title={`Ver ${p.label}`}
            >
              <img
                src={p.img}
                alt={p.label}
                onError={e => { e.target.style.display = 'none'; }}
              />
              <div className="product-label">{p.label}</div>
            </div>
          ))}
        </div>

        {/* Botón "Ver más" de la sección Lo Más Comprado */}
        <div className="center-btn">
          <button
            className="btn-secondary"
            onClick={() => navigate('/productos')}
          >
            Ver más
          </button>
        </div>
      </main>

      {/* ══════════════════════════════════════════════════════════════════════
          SECCIÓN 4: PROMOCIONES DE FESTIVIDAD
          Dos banners: uno de Navidad (marrón) y otro de Halloween (naranja)
          Ambos botones "Ver más" llevan a la página Ofertas
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="festividades-section">
        <h2 className="section-title">Promociones de Festividad</h2>

        {/* Banner Navidad — fondo color marrón rosado */}
        <div className="festividad-banner navidad">
          <div className="festividad-content">
            <h3>POSTRES para acompañar esta NAVIDAD</h3>
            <p>Mira los mejores postres para esta navidad y pasar tiempo en familia inolvidable.</p>
            <button className="btn-white" onClick={() => navigate('/ofertas')}>
              Ver más
            </button>
          </div>
          <div className="festividad-image">
            <img
              src="/assets/products/navidad.jpg"
              alt="Postres Navideños"
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

        {/* Banner Halloween — fondo naranja */}
        <div className="festividad-banner halloween">
          <div className="festividad-content">
            <h3>POSTRES para disfrutar en HALLOWEEN</h3>
            <p>Descubre nuestros deliciosos postres para Hallowen y organiza una fiesta espeluznante</p>
            <button className="btn-white" onClick={() => navigate('/ofertas')}>
              Ver más
            </button>
          </div>
          <div className="festividad-image">
            <img
              src="/assets/products/halloween.jpg"
              alt="Postres Halloween"
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

        {/* Botón Ver más general de festividades */}
        <div className="center-btn">
          <button className="btn-secondary" onClick={() => navigate('/ofertas')}>
            Ver más
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECCIÓN 5: DEJA TU COMENTARIO
          Formulario conectado al backend Spring Boot.
          Los comentarios enviados quedan pendientes hasta que el admin los apruebe.
          Debajo del formulario se muestran los comentarios ya aprobados.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="comments-section">
        <h2 className="section-title">Deja tu comentario</h2>

        {/* Formulario de comentario */}
        <form className="comment-form" onSubmit={handleComentario}>

          {/* Mensaje de estado (éxito o error) */}
          {mensaje && (
            <div className={`comment-msg ${mensaje.includes('Error') || mensaje.includes('No se pudo') ? 'msg-error' : 'msg-ok'}`}>
              {mensaje}
            </div>
          )}

          {/* Campo: Nombre del cliente */}
          <div className="form-group">
            <label>NOMBRE</label>
            <input
              type="text"
              placeholder="Escribe tu nombre completo"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>

          {/* Campo: Texto del comentario */}
          <div className="form-group">
            <textarea
              rows="4"
              placeholder="Deja un comentario"
              value={comentario}
              onChange={e => setComentario(e.target.value)}
            />
          </div>

          {/* Botón enviar */}
          <div className="form-submit">
            <button type="submit" className="btn-comentar">COMENTAR</button>
          </div>
        </form>

        {/* Testimonios / comentarios aprobados por el admin */}
        <div className="testimonials-grid">
          {comentariosAprobados.slice(0, 3).map((c, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-header">{c.nombre}</div>
              <div className="testimonial-body">{c.contenido}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENTE RAÍZ: App
// Configura el Router y define todas las rutas de la aplicación
// ═══════════════════════════════════════════════════════════════════════════════
function App() {
  return (
    <Router>
      {/*
        El Header se muestra en TODAS las páginas.
        Contiene la navegación principal entre: Inicio, Productos, Ofertas, Nosotros
      */}
      <Header />

      {/* Definición de todas las rutas de la aplicación */}
      <Routes>
        {/* Pantalla principal */}
        <Route path="/"            element={<Home />} />

        {/* Páginas del menú principal */}
        <Route path="/productos"   element={<Productos />} />
        <Route path="/ofertas"     element={<Ofertas />} />
        <Route path="/nosotros"    element={<Nosotros />} />

        {/* Autenticación */}
        <Route path="/login"       element={<Login />} />
        <Route path="/registro"    element={<Registro />} />

        {/* Área de usuario */}
        <Route path="/carrito"     element={<Carrito />} />
        <Route path="/perfil"      element={<Perfil />} />

        {/* Panel de administrador */}
        <Route path="/admin"       element={<DashboardAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;