// App.js — Página de INICIO interactiva
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from './Layout';
import './Stylee.css';

function App() {
  const navigate = useNavigate();
  const [slideActivo, setSlideActivo] = useState(0);
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');
  const [mensajeComentario, setMensajeComentario] = useState('');

  const slides = [
    {
      img: '/assets/products/torta_principal.jpg',
      title: 'Nuestros Especiales',
      text: 'Especiales para cualquier ocasión y disfrutar con las personas que más quieres.',
    },
    {
      img: '/assets/products/cupcake.jpg',
      title: 'Pack de Cupcakes',
      text: 'La combinación perfecta de sabores para compartir en tus reuniones.',
    },
    {
      img: '/assets/products/alfajores.png',
      title: 'Caja de Alfajores',
      text: 'Los mejores alfajores artesanales, suaves y con mucho dulce de leche.',
    },
  ];

  // 🔄 Autoplay del slider (Cambio automático cada 5 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [slideActivo]);

  // Handler para avanzar manualmente a la derecha
  const handleNextSlide = () => {
    setSlideActivo((prev) => (prev + 1) % slides.length);
  };

  // Handler para retroceder manualmente a la izquierda
  const handlePrevSlide = () => {
    setSlideActivo((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // ✉️ Enviar comentario al backend en Spring Boot
  const handleComentario = (e) => {
    e.preventDefault();
    if (!nombre || !comentario) return;

    fetch('http://localhost:8081/enviar-comentario', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `nombre=${encodeURIComponent(nombre)}&contenido=${encodeURIComponent(comentario)}`,
    })
      .then((res) => {
        if (res.ok) {
          setMensajeComentario('¡Comentario enviado! Será revisado pronto.');
          setNombre('');
          setComentario('');
        } else {
          setMensajeComentario('Error al procesar en el servidor.');
        }
      })
      .catch(() => setMensajeComentario('Error al enviar. Intenta más tarde.'));

    setTimeout(() => setMensajeComentario(''), 4000);
  };

  const s = slides[slideActivo];

  return (
    <div style={{ backgroundColor: '#FFF0F2', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#4A3E3F' }}>
      {/* El Header ya gestiona internamente la navegación al presionar Inicio, Productos, Ofertas, Nosotros, Perfil y Carrito */}
      <Header />

      {/* ═══════════════ HERO / SLIDER DESLIZABLE INTERACTIVO ═══════════════ */}
      <section className="hero-section" style={{ position: 'relative' }}>
        {/* Flecha Izquierda */}
        <button 
          onClick={handlePrevSlide}
          style={{
            position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(184, 107, 116, 0.7)', color: 'white', border: 'none',
            borderRadius: '50%', width: '45px', height: '45px', fontSize: '1.5rem',
            cursor: 'pointer', zIndex: 10, fontWeight: 'bold'
          }}
        >
          &#10094;
        </button>

        <div className="hero-container">
          <div className="hero-image">
            <img
              id="hero-img"
              src={s.img}
              alt={s.title}
              onError={e => { e.target.src = '/assets/products/torta_principal.jpg'; }}
            />
          </div>
          <div className="hero-content">
            <h2 id="hero-title">{s.title}</h2>
            <p id="hero-text">{s.text}</p>
            <a onClick={() => navigate('/productos')} className="btn-ver-mas" style={{ cursor: 'pointer' }}>Ver más</a>
          </div>
        </div>

        {/* Flecha Derecha */}
        <button 
          onClick={handleNextSlide}
          style={{
            position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(184, 107, 116, 0.7)', color: 'white', border: 'none',
            borderRadius: '50%', width: '45px', height: '45px', fontSize: '1.5rem',
            cursor: 'pointer', zIndex: 10, fontWeight: 'bold'
          }}
        >
          &#10095;
        </button>

        {/* Indicadores / Dots */}
        <div className="slider-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot${slideActivo === i ? ' active' : ''}`}
              onClick={() => setSlideActivo(i)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════ LO MÁS COMPRADO ═══════════════ */}
      <main className="container">
        <h2 className="section-title">LO MÁS COMPRADO</h2>
        <div className="products-grid">
          {[
            { img: '/assets/products/cupcake.jpg', label: 'Cupcake de fresa' },
            { img: '/assets/products/pay_limon.jpg', label: 'Pay de limón' },
            { img: '/assets/products/flan.jpg', label: 'Flan de vainilla' },
            { img: '/assets/products/galletas.jpg', label: 'Galletas de fresa' },
            { img: '/assets/products/gelatina.jpg', label: 'Gelatina' },
            { img: '/assets/products/pastel_imposible.jpg', label: 'Pastel de Flan con Chocolate' },
          ].map((p, i) => (
            <div 
              key={i} 
              className="product-card" 
              onClick={() => navigate('/productos')} 
              style={{ cursor: 'pointer' }}
            >
              <img src={p.img} alt={p.label} onError={e => { e.target.style.display='none'; }} />
              <div className="product-label">{p.label}</div>
            </div>
          ))}
        </div>
        <div className="center-btn">
          <a onClick={() => navigate('/productos')} className="btn-secondary" style={{ cursor: 'pointer' }}>Ver más</a>
        </div>
      </main>

      {/* ═══════════════ FESTIVIDADES (MÁS PROMOCIONES) ═══════════════ */}
      <section className="festividades-section">
        <h2 className="section-title">Promociones de Festividad</h2>

        <div className="festividad-banner navidad">
          <div className="festividad-content">
            <h3>POSTRES para acompañar esta NAVIDAD</h3>
            <p>Mira los mejores postres para esta navidad y pasar tiempo en familia inolvidable.</p>
            <a onClick={() => navigate('/ofertas')} className="btn-white" style={{ cursor: 'pointer' }}>Ver más</a>
          </div>
          <div className="festividad-image">
            <img src="/assets/products/navidad.jpg" alt="Postres Navideños" onError={e => e.target.style.display='none'} />
          </div>
        </div>

        <div className="festividad-banner halloween">
          <div className="festividad-content">
            <h3>POSTRES para disfrutar en HALLOWEEN</h3>
            <p>Descubre nuestros deliciosos postres para Halloween y organiza una fiesta espeluznante.</p>
            <a onClick={() => navigate('/ofertas')} className="btn-white" style={{ cursor: 'pointer' }}>Ver más</a>
          </div>
          <div className="festividad-image">
            <img src="/assets/products/halloween.jpg" alt="Postres Halloween" onError={e => e.target.style.display='none'} />
          </div>
        </div>

        <div className="center-btn">
          <a onClick={() => navigate('/ofertas')} className="btn-secondary" style={{ cursor: 'pointer' }}>Ver más</a>
        </div>
      </section>

      {/* ═══════════════ SECCIÓN COMENTARIOS ═══════════════ */}
      <section className="comments-section">
        <h2 className="section-title">Deja tu comentario</h2>

        <form className="comment-form" onSubmit={handleComentario}>
          {mensajeComentario && (
            <div style={{ backgroundColor: '#D4EDDA', color: '#155724', padding: '10px 16px', borderRadius: 6, marginBottom: 16, textAlign: 'center' }}>
              {mensajeComentario}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="name">NOMBRE</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Escribe tu nombre completo" 
              value={nombre} 
              onChange={e => setNombre(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <textarea 
              id="comment" 
              rows="4" 
              placeholder="Deja un comentario" 
              value={comentario} 
              onChange={e => setComentario(e.target.value)}
            ></textarea>
          </div>
          <div className="form-submit">
            <button type="submit" className="btn-comentar">COMENTAR</button>
          </div>
        </form>

        <div className="testimonials-grid">
          {[
            { nombre: 'Juliana López', texto: 'Sus paquetes son ideales para regalar sorpresas.' },
            { nombre: 'Emilio Orozco', texto: 'Entregan a tiempo y con buena calidad cada postre.' },
            { nombre: 'Valentina Gómez', texto: 'Tienen ricos sabores y los productos llegan a tiempo.' },
          ].map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-header">{t.nombre}</div>
              <div className="testimonial-body">{t.texto}</div>
            </div>
          ))}
        </div>
      </section>

      {/* El Footer renderiza y gestiona dinámicamente sus links internos de rutas */}
      <Footer />
    </div>
  );
}

export default App;