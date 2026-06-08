import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import Productos      from './Productos';
import Ofertas        from './Ofertas';
import Nosotros       from './Nosotros';
import Login          from './Login';
import Registro       from './Registro';
import Carrito        from './Carrito';
import Perfil         from './Perfil';
import DashboardAdmin from './DashboardAdmin';

// ═══════════════════════════════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════════════════════════════
function Header() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleBuscar = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (query.trim()) {
        navigate(`/productos?buscar=${encodeURIComponent(query.trim())}`);
      }
    }
  };

  return (
    <header className="navbar-custom">

      {/* ── LOGO DEL NAVBAR (esquina izquierda) ──────────────────────
          PON AQUÍ: el logo pequeño que aparece en el navbar rosado
          Ejemplo: si tu archivo se llama "logo_nav.png" → src="/assets/logo_nav.png"
          NOMBRE DE IMAGEN: logo pequeño con texto "Sweet Cream Rose" */}
      <div className="brand-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img
          src="/assets/logo.png"
          alt="Sweet Cream Rose"
          className="logo-img"
          onError={e => { e.target.style.display = 'none'; }}
        />
        <div className="brand-text">
          <span className="brand-main">Sweet Cream Rose</span>
          <span className="brand-tag">Repostería artesanal</span>
        </div>
      </div>

      {/* Menú de navegación */}
      <nav className="nav-menu">
        <span onClick={() => navigate('/')}>INICIO</span>
        <span onClick={() => navigate('/productos')}>PRODUCTOS</span>
        <span onClick={() => navigate('/ofertas')}>OFERTAS</span>
        <span onClick={() => navigate('/nosotros')}>NOSOTROS</span>
      </nav>

      {/* Barra de búsqueda + íconos */}
      <div className="nav-right">
        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleBuscar}
          />
          <span onClick={handleBuscar} style={{ cursor: 'pointer', color: '#aaa' }}>🔍</span>
        </div>
        <span className="icon-nav" onClick={() => navigate('/login')} title="Perfil">👤</span>
        <span className="icon-nav" onClick={() => navigate('/carrito')} style={{ position: 'relative' }} title="Carrito">
          🛒
          <span className="cart-badge">2</span>
        </span>
      </div>
    </header>
  );
}

// ═══════════════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════════════
function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer-section">
      <div className="footer-inner">

        {/* ── LOGO DEL FOOTER ──────────────────────────────────────────
            PON AQUÍ: el logo redondo que aparece en el pie de página
            Ejemplo: "/assets/AQUI_VA_EL_LOGO_REDONDO_DEL_FOOTER.png"
            Es el mismo logo grande circular con flores */}
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
          <p className="footer-follow">SÍGUENOS</p>
          <div className="footer-social">
            <span className="social-link">📘</span>
            <span className="social-link">📸</span>
            <span className="social-link">💬</span>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">ENLACES</h4>
          <ul className="footer-links">
            <li onClick={() => navigate('/')}>Inicio</li>
            <li onClick={() => navigate('/productos')}>Productos</li>
            <li onClick={() => navigate('/ofertas')}>Ofertas</li>
            <li onClick={() => navigate('/nosotros')}>Nosotros</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">AYUDA</h4>
          <ul className="footer-links">
            <li>Preguntas frecuentes</li>
            <li>Políticas de envío</li>
            <li>Términos y condiciones</li>
            <li>Políticas de privacidad</li>
          </ul>
        </div>

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
      <div className="footer-copy">
        © 2026 Sweet Cream Rose. Todos los derechos reservados.
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════════
// HOME — PANTALLA PRINCIPAL
// ═══════════════════════════════════════════════════════════════════
function Home() {
  const navigate = useNavigate();
  const [slideActivo, setSlideActivo] = useState(0);
  const [nombre,      setNombre]      = useState('');
  const [comentario,  setComentario]  = useState('');
  const [mensaje,     setMensaje]     = useState('');
  const [comentariosAprobados, setComentariosAprobados] = useState([
    { nombre: 'Juliana López',    contenido: 'Sus paquetes son ideales para regalar sopresas.' },
    { nombre: 'Emilio Orozco',   contenido: 'Entregan a tiempo y con buena calidad cada postre.' },
    { nombre: 'Valentina Gómez', contenido: 'Tienen ricos sabores y los productos llegan a tiempo.' },
  ]);

  // ── SLIDES DEL BANNER PRINCIPAL ────────────────────────────────────────────
  // Cada slide tiene: imagen, título, texto y color de fondo
  const slides = [
    {
      // ── SLIDE 1 ────────────────────────────────────────────────────────────
      // PON AQUÍ: la torta/postre principal que aparece en el primer banner
      // Es la torta rosada con efecto espejo que se ve en la imagen de diseño
      img:   '/assets/inicio.jpg',
      title: 'Nuestros Especiales',
      text:  'Especiales para cualquier ocasión y disfrutar con las personas que mas quieres',
      bg:    '#eeb4c1',
    },
    {
      // ── SLIDE 2 ────────────────────────────────────────────────────────────
      // PON AQUÍ: imagen de cupcakes para el segundo banner
      img:   '/assets/AQUI_VA_LA_IMAGEN_DEL_SLIDE2_CUPCAKES.jpg',
      title: 'Pack de Cupcakes',
      text:  'La combinación perfecta de sabores para compartir en tus reuniones especiales.',
      bg:    '#d4a0b0',
    },
    {
      // ── SLIDE 3 ────────────────────────────────────────────────────────────
      // PON AQUÍ: imagen de alfajores para el tercer banner
      img:   '/assets/AQUI_VA_LA_IMAGEN_DEL_SLIDE3_ALFAJORES.jpg',
      title: 'Caja de Alfajores',
      text:  'Los mejores alfajores artesanales, suaves y con mucho dulce de leche.',
      bg:    '#e8c4cc',
    },
  ];

  // Autoplay cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideActivo(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Cargar comentarios aprobados del backend
  useEffect(() => {
    fetch('http://localhost:8081/api/comentarios/aprobados')
      .then(res => res.json())
      .then(data => { if (data && data.length > 0) setComentariosAprobados(data); })
      .catch(() => {});
  }, []);

  const handlePrev = () => setSlideActivo(prev => (prev - 1 + slides.length) % slides.length);
  const handleNext = () => setSlideActivo(prev => (prev + 1) % slides.length);

  const handleComentario = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !comentario.trim()) {
      setMensaje('Por favor completa todos los campos.');
      return;
    }
    fetch('http://localhost:8081/enviar-comentario', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `nombre=${encodeURIComponent(nombre)}&contenido=${encodeURIComponent(comentario)}`,
    })
      .then(res => {
        if (res.ok) {
          setMensaje('¡Comentario enviado! Será revisado por el administrador.');
          setNombre('');
          setComentario('');
        } else {
          setMensaje('Error al enviar el comentario.');
        }
      })
      .catch(() => setMensaje('No se pudo conectar con el servidor.'));
    setTimeout(() => setMensaje(''), 4000);
  };

  const s = slides[slideActivo];

  // ── PRODUCTOS "LO MÁS COMPRADO" ──────────────────────────────────────────
  const productosDestacados = [
    {
      // PON AQUÍ: imagen de cupcake de fresa (primer cuadrito del grid)
      img:   '/assets/AQUI_VA_CUPCAKE_DE_FRESA.jpg',
      label: 'Cupcake de fresa',
    },
    {
      // PON AQUÍ: imagen de pay de limón (segundo cuadrito)
      img:   '/assets/AQUI_VA_PAY_DE_LIMON.jpg',
      label: 'Pay de limón',
    },
    {
      // PON AQUÍ: imagen de flan de vainilla (tercer cuadrito)
      img:   '/assets/AQUI_VA_FLAN_DE_VAINILLA.jpg',
      label: 'Flan de vainilla',
    },
    {
      // PON AQUÍ: imagen de galletas de fresa (cuarto cuadrito)
      img:   '/assets/AQUI_VA_GALLETAS_DE_FRESA.jpg',
      label: 'Galletas de fresa',
    },
    {
      // PON AQUÍ: imagen de gelatina (quinto cuadrito)
      img:   '/assets/AQUI_VA_GELATINA.jpg',
      label: 'Gelatinas',
    },
    {
      // PON AQUÍ: imagen de pastel imposible (sexto cuadrito)
      img:   '/assets/AQUI_VA_PASTEL_IMPOSIBLE.jpg',
      label: 'Pastel imposible',
    },
  ];

  return (
    <div className="home-wrapper">

      {/* ── LOGO CENTRAL GRANDE ──────────────────────────────────────────────
          PON AQUÍ: el logo grande circular con flores que aparece centrado
          debajo del navbar (igual al que se ve en la página de Productos)
          Es el logo redondo con "Sweet Cream Rose" y flores decorativas */}
      <div className="center-logo">
        <img
          src="/assets/AQUI_VA_EL_LOGO_GRANDE_CIRCULAR_CON_FLORES.png"
          alt="Sweet Cream Rose"
          onError={e => { e.target.style.display = 'none'; }}
        />
      </div>

      {/* ══ SLIDER — NUESTROS ESPECIALES ══════════════════════════════════ */}
      <section className="hero-section" style={{ position: 'relative' }}>
        <button className="slider-arrow slider-arrow-left" onClick={handlePrev}>&#10094;</button>

        <div className="hero-container" style={{ backgroundColor: s.bg }}>
          <div className="hero-image">
            <img
              src={s.img}
              alt={s.title}
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="hero-content">
            <h2>{s.title}</h2>
            <p>{s.text}</p>
            <button className="btn-ver-mas" onClick={() => navigate('/productos')}>
              Ver más
            </button>
          </div>
        </div>

        <button className="slider-arrow slider-arrow-right" onClick={handleNext}>&#10095;</button>

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

      {/* ══ LO MÁS COMPRADO ═══════════════════════════════════════════════ */}
      <main className="container">
        <h2 className="section-title">LO MÁS COMPRADO</h2>
        <div className="products-grid">
          {productosDestacados.map((p, i) => (
            <div key={i} className="product-card" onClick={() => navigate('/productos')}>
              <img src={p.img} alt={p.label} onError={e => { e.target.style.display = 'none'; }} />
              <div className="product-label">{p.label}</div>
            </div>
          ))}
        </div>
        <div className="center-btn">
          <button className="btn-secondary" onClick={() => navigate('/productos')}>Ver más</button>
        </div>
      </main>

      {/* ══ PROMOCIONES DE FESTIVIDAD ══════════════════════════════════════ */}
      <section className="festividades-section">
        <h2 className="section-title">Promociones de Festividad</h2>

        {/* Banner Navidad */}
        <div className="festividad-banner navidad">
          <div className="festividad-content">
            <h3>POSTRES para acompañar esta NAVIDAD</h3>
            <p>Mira los mejores postres para esta navidad y pasar tiempo en familia inolvidable.</p>
            <button className="btn-white" onClick={() => navigate('/ofertas')}>Ver más</button>
          </div>
          <div className="festividad-image">
            {/* PON AQUÍ: imagen de galletas o postres navideños
                Es la foto de galletas de jengibre con decoración navideña */}
            <img
              src="/assets/AQUI_VA_IMAGEN_NAVIDAD_GALLETAS_JENGIBRE.jpg"
              alt="Postres Navideños"
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

        {/* Banner Halloween */}
        <div className="festividad-banner halloween">
          <div className="festividad-content">
            <h3>POSTRES para disfrutar en HALLOWEEN</h3>
            <p>Descubre nuestros deliciosos postres para Hallowen y organiza una fiesta espeluznante</p>
            <button className="btn-white" onClick={() => navigate('/ofertas')}>Ver más</button>
          </div>
          <div className="festividad-image">
            {/* PON AQUÍ: imagen de cupcakes de Halloween con calabazas
                Es la foto de cupcakes naranja/verde decorados con calabazas */}
            <img
              src="/assets/AQUI_VA_IMAGEN_HALLOWEEN_CUPCAKES_CALABAZA.jpg"
              alt="Postres Halloween"
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

        <div className="center-btn">
          <button className="btn-secondary" onClick={() => navigate('/ofertas')}>Ver más</button>
        </div>
      </section>

      {/* ══ DEJA TU COMENTARIO ════════════════════════════════════════════ */}
      <section className="comments-section">
        <h2 className="section-title">Deja tu comentario</h2>

        <form className="comment-form" onSubmit={handleComentario}>
          {mensaje && (
            <div className={`comment-msg ${
              mensaje.includes('Error') || mensaje.includes('No se pudo') || mensaje.includes('completa')
                ? 'msg-error' : 'msg-ok'
            }`}>
              {mensaje}
            </div>
          )}
          <div className="form-group">
            <label>NOMBRE</label>
            <input
              type="text"
              placeholder="Escribe tu nombre completo"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              rows="4"
              placeholder="Deja un comentario"
              value={comentario}
              onChange={e => setComentario(e.target.value)}
            />
          </div>
          <div className="form-submit">
            <button type="submit" className="btn-comentar">COMENTAR</button>
          </div>
        </form>

        <div className="testimonials-grid">
          {comentariosAprobados.slice(0, 3).map((c, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-header">{c.nombre}</div>
              <div className="testimonial-body">{c.contenido}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// APP RAÍZ — sin Router (ya está en index.js)
// ═══════════════════════════════════════════════════════════════════
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/ofertas"   element={<Ofertas />} />
        <Route path="/nosotros"  element={<Nosotros />} />
        <Route path="/login"     element={<Login />} />
        <Route path="/registro"  element={<Registro />} />
        <Route path="/carrito"   element={<Carrito />} />
        <Route path="/perfil"    element={<Perfil />} />
        <Route path="/admin"     element={<DashboardAdmin />} />
      </Routes>
    </>
  );
}

export default App;