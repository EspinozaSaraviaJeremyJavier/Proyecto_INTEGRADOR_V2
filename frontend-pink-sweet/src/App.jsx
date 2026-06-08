import { useState, useEffect, useRef } from "react";

import torta        from "./assets/products/torta_principal.jpg";
import navidad      from "./assets/products/navidad.jpg";
import halloween    from "./assets/products/halloween.jpg";
import cupcake      from "./assets/products/cupcake.jpg";
import payLimon     from "./assets/products/pay_limon.jpg";
import flan         from "./assets/products/flan.jpg";
import galletas     from "./assets/products/galletas.jpg";
import gelatina     from "./assets/products/gelatina.jpg";
import pastelImposible from "./assets/products/pastel_imposible.jpg";
import letra        from "./assets/products/letra.png";
import logo         from "./assets/products/logo.png";

// Productos
import tortaFuczia     from "./assets/products/torta fuczia.jpg";
import chocotorta      from "./assets/products/chocotorta.jpg";
import milkshake       from "./assets/products/milkshake.jpg";
import tequenos        from "./assets/products/tequeños.png";
import frapeFresa      from "./assets/products/frape_fresa.jpg";
import muffin          from "./assets/products/muffin.jpg";
import tortaMousse     from "./assets/products/torta_mousse.jpg";
import cupcakesVainilla from "./assets/products/cupcakes_vainilla.jpg";
import tortaDurazno    from "./assets/products/torta_durazno.jpg";

// Ofertas
import tortaFresa       from "./assets/products/torta de fresa.png";
import tortaChoco       from "./assets/products/torta triple chocolate.jpg";
import trufas           from "./assets/products/trufas.png";
import empanadas        from "./assets/products/empanadas.png";
import alfajores        from "./assets/products/alfajores.png";
import cupcakeArandano  from "./assets/products/cupcake_arandano.png";

// ─── DATA ────────────────────────────────────────────────
const slides = [
  { img: torta,     title: "Nuestros Especiales",  text: "Especiales para cualquier ocasión y disfrutar con las personas que más quieres" },
  { img: navidad,   title: "Postres Navideños",     text: "Celebra la navidad con los mejores postres artesanales para compartir en familia" },
  { img: halloween, title: "Postres de Halloween",  text: "Sorprende a todos con postres espeluznantes y deliciosos para Halloween" },
];

const homeProducts = [
  { img: cupcake,        label: "Cupcake de fresa" },
  { img: payLimon,       label: "Pay de limón" },
  { img: flan,           label: "Flan de vainilla" },
  { img: galletas,       label: "Galletas de fresa" },
  { img: gelatina,       label: "Gelatina" },
  { img: pastelImposible,label: "Pastel de Flan con Chocolate" },
];

const allProducts = [
  { img: tortaFuczia,     name: "Torta Frutal Rosa",            desc: "Deliciosa torta cubierta con crema y frutas frescas.",                     price: "S/ 32.00" },
  { img: galletas,        name: "Galletas con Mermelada",       desc: "Galletas artesanales rellenas de dulce mermelada de frutos rojos.",         price: "S/ 12.00" },
  { img: chocotorta,      name: "Torta Selva Dulce",            desc: "Esponjosa torta de chocolate decorada con crema y cerezas.",                price: "S/ 35.00" },
  { img: milkshake,       name: "Postre Oreo Cremoso",          desc: "Capas de crema, chocolate y galleta Oreo en vaso.",                         price: "S/ 18.00" },
  { img: tequenos,        name: "Croissant Relleno",            desc: "Croissant crocante con suave relleno de queso.",                            price: "S/ 14.00" },
  { img: frapeFresa,      name: "Milkshake de Fresa",           desc: "Refrescante batido de fresa con crema chantilly y toppings dulces.",        price: "S/ 20.00" },
  { img: muffin,          name: "Cupcake de Vainilla",          desc: "Cupcake esponjoso con cobertura cremosa de vainilla.",                      price: "S/ 10.00" },
  { img: tortaMousse,     name: "Mini Torta de Chocolate",      desc: "Torta gourmet con mousse y cobertura brillante de chocolate.",              price: "S/ 30.00" },
  { img: cupcakesVainilla,name: "Cupcake Vainilla",             desc: "Cupcake decorado con crema y coloridos sprinkles.",                         price: "S/ 11.00" },
  { img: pastelImposible, name: "Pastel de Flan con Chocolate", desc: "Pastel gourmet con flan de vainilla y chocolate.",                          price: "S/ 12.00" },
  { img: tortaDurazno,    name: "Torta Tropical",               desc: "Torta cremosa decorada con duraznos y chantilly.",                          price: "S/ 34.00" },
  { img: gelatina,        name: "Gelatina de Fresa",            desc: "Refrescante gelatina de fresa con trozos de fruta natural.",                price: "S/ 15.00" },
];

const categories = [
  { icon: "fa-cake-candles",  label: "Entremets" },
  { icon: "fa-birthday-cake", label: "Tortas Clásicas" },
  { icon: "fa-cookie",        label: "Galletas" },
  { icon: "fa-bread-slice",   label: "Tequeños" },
  { icon: "fa-hamburger",     label: "Mini Sandwiches" },
  { icon: "fa-chart-pie",     label: "Mini Empanadas" },
  { icon: "fa-cookie-bite",   label: "Alfajores" },
  { icon: "fa-candy-cane",    label: "Trufas" },
  { icon: "fa-ice-cream",     label: "Postres Fríos" },
  { icon: "fa-ice-cream",     label: "Cupcakes" },
];

const offerProducts = [
  { img: tortaChoco,      name: "Torta Triple Chocolate",  desc: "Bizcocho de chocolate con relleno y cobertura de ganache, decorada con crema de chocolate.", oldPrice: "S/. 80.00", newPrice: "S/. 64.00", discount: "-20%" },
  { img: tequenos,        name: "Croissant Relleno",       desc: "Croissant crocante con suave relleno de queso.",                                             oldPrice: "S/. 38.00", newPrice: "S/. 32.30", discount: "-15%" },
  { img: trufas,          name: "Trufas de Fresa",         desc: "Delicadas trufas de chocolate rellenas con crema sabor fresa.",                              oldPrice: "S/. 45.00", newPrice: "S/. 33.75", discount: "-25%" },
  { img: empanadas,       name: "Mini Empanadas de Carne", desc: "Empanadas doradas con relleno de carne casera.",                                             oldPrice: "S/. 36.00", newPrice: "S/. 30.60", discount: "-15%" },
  { img: alfajores,       name: "Alfajor Clásico",         desc: "Alfajores artesanales rellenos de manjar y espolvoreados con azúcar.",                       oldPrice: "S/. 28.00", newPrice: "S/. 22.40", discount: "-20%" },
  { img: cupcakeArandano, name: "Cupcakes de Arándano",    desc: "Cupcakes esponjosos decorados con crema y arándanos frescos.",                               oldPrice: "S/. 42.00", newPrice: "S/. 37.80", discount: "-10%" },
];

const valueProps = [
  { icon: "fa-seedling",   label: "Ingredientes de primera calidad" },
  { icon: "fa-heart",      label: "Hecho con amor en cada detalle" },
  { icon: "fa-truck",      label: "Envíos seguros y rápidos" },
  { icon: "fa-user",       label: "Atención personalizada para ti" },
];

const testimonials = [
  { name: "Juliana López",   text: "Sus paquetes son ideales para regalar sorpresas." },
  { name: "Emilio Orozco",   text: "Entregan a tiempo y con buena calidad cada postre." },
  { name: "Valentina Gómez", text: "Tienen ricos sabores y los productos llegan a tiempo." },
];

// ─── GLOBAL CSS ──────────────────────────────────────────
const globalCSS = `
  * { box-sizing:border-box; margin:0; padding:0; }
  body { font-family:'Lato',sans-serif; }
  .scr-nav a { font-family:'Lato',sans-serif; font-size:13px; letter-spacing:1.5px; font-weight:700; color:#2d1a10; text-decoration:none; padding:4px 0; border-bottom:2px solid transparent; transition:border-color .2s,color .2s; cursor:pointer; }
  .scr-nav a:hover,.scr-nav a.active { border-bottom:2px solid #c8506a; color:#c8506a; }
  .scr-btn-primary { background:#c8506a; color:#fff; border:none; padding:11px 28px; font-family:'Lato',sans-serif; font-weight:700; font-size:13px; letter-spacing:1.5px; cursor:pointer; border-radius:2px; text-decoration:none; transition:background .2s; display:inline-block; }
  .scr-btn-primary:hover { background:#a83858; }
  .scr-btn-outline { background:transparent; color:#c8506a; border:2px solid #c8506a; padding:9px 26px; font-family:'Lato',sans-serif; font-weight:700; font-size:13px; letter-spacing:1.5px; cursor:pointer; border-radius:2px; text-decoration:none; transition:background .2s,color .2s; display:inline-block; }
  .scr-btn-outline:hover { background:#c8506a; color:#fff; }
  .scr-btn-white { background:#fff; color:#c8506a; border:none; padding:11px 28px; font-family:'Lato',sans-serif; font-weight:700; font-size:13px; letter-spacing:1.5px; cursor:pointer; border-radius:2px; text-decoration:none; transition:background .2s; display:inline-block; }
  .scr-btn-white:hover { background:#f5e6ea; }
  .footer-link { color:#f5c8d0; font-family:'Lato',sans-serif; font-size:14px; text-decoration:none; transition:color .2s; display:block; margin-bottom:8px; cursor:pointer; }
  .footer-link:hover { color:#fff; }
  .social-icon { width:34px; height:34px; border-radius:50%; background:rgba(255,255,255,.12); display:inline-flex; align-items:center; justify-content:center; color:#fff; text-decoration:none; font-size:15px; margin-right:6px; transition:background .2s; }
  .social-icon:hover { background:rgba(255,255,255,.28); }
  .hero-slide { display:none; }
  .hero-slide.active { display:flex; }
  .dot { width:10px; height:10px; border-radius:50%; cursor:pointer; border:2px solid #c8506a; transition:background .2s; display:inline-block; }
  .product-card-img { width:100%; height:200px; object-fit:cover; display:block; border-radius:8px 8px 0 0; transition:transform .35s; }
  .product-card-wrap:hover .product-card-img { transform:scale(1.05); }
  .product-card-wrap { border-radius:8px; overflow:hidden; box-shadow:0 2px 12px rgba(200,80,106,.10); background:#fff; cursor:pointer; }
  .testimonial-card { background:#fdf7f8; border:1px solid #f0d0d8; border-radius:10px; padding:20px 22px; }
  .catalog-card { background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 2px 14px rgba(200,80,106,.10); position:relative; transition:transform .25s,box-shadow .25s; }
  .catalog-card:hover { transform:translateY(-4px); box-shadow:0 6px 24px rgba(200,80,106,.18); }
  .catalog-card img { width:100%; height:200px; object-fit:cover; display:block; }
  .wishlist-btn { position:absolute; top:10px; right:10px; background:#fff; border:none; border-radius:50%; width:32px; height:32px; cursor:pointer; font-size:15px; color:#c8506a; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 6px rgba(0,0,0,.12); transition:background .2s; z-index:2; }
  .wishlist-btn:hover { background:#fdf2f4; }
  .category-item { display:flex; flex-direction:column; align-items:center; gap:8px; cursor:pointer; transition:transform .2s; }
  .category-item:hover { transform:translateY(-3px); }
  .category-icon-box { width:56px; height:56px; border-radius:50%; background:#fdf2f4; border:2px solid #f0d0d8; display:flex; align-items:center; justify-content:center; font-size:20px; color:#c8506a; transition:background .2s,border-color .2s; }
  .category-item:hover .category-icon-box { background:#c8506a; color:#fff; border-color:#c8506a; }
  .offer-card { background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 2px 14px rgba(200,80,106,.10); position:relative; transition:transform .25s,box-shadow .25s; }
  .offer-card:hover { transform:translateY(-4px); box-shadow:0 6px 24px rgba(200,80,106,.18); }
  .offer-card img { width:100%; height:210px; object-fit:cover; display:block; }
  .badge-discount { position:absolute; top:12px; left:12px; background:#c8506a; color:#fff; font-family:'Lato',sans-serif; font-size:13px; font-weight:700; padding:4px 10px; border-radius:20px; letter-spacing:.5px; z-index:2; }
  .btn-add-cart { width:100%; background:#2d1a10; color:#fff; border:none; padding:10px; font-family:'Lato',sans-serif; font-weight:700; font-size:12px; letter-spacing:1.5px; cursor:pointer; transition:background .2s; margin-top:12px; border-radius:4px; }
  .btn-add-cart:hover { background:#c8506a; }
  .prop-item { display:flex; flex-direction:column; align-items:center; gap:10px; text-align:center; }
  .prop-icon { width:52px; height:52px; border-radius:50%; background:#fdf2f4; border:2px solid #f0d0d8; display:flex; align-items:center; justify-content:center; font-size:20px; color:#c8506a; }
  @media(max-width:700px){
    .hero-slide.active{flex-direction:column!important;}
    .hero-text-block{padding:24px 20px!important;}
    .home-products-grid{grid-template-columns:repeat(2,1fr)!important;}
    .festi-row{flex-direction:column!important;}
    .footer-cols{flex-direction:column!important;gap:32px!important;}
    .testimonials-grid{grid-template-columns:1fr!important;}
    .header-inner{flex-wrap:wrap;gap:10px!important;}
    .catalog-grid{grid-template-columns:repeat(2,1fr)!important;}
    .categories-grid{grid-template-columns:repeat(4,1fr)!important;}
    .offers-grid{grid-template-columns:repeat(2,1fr)!important;}
    .value-props-grid{grid-template-columns:repeat(2,1fr)!important;}
    .hero-offer-inner{flex-direction:column!important;}
  }
`;

// ─── HEADER ──────────────────────────────────────────────
function Header({ page, setPage, cartCount }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  return (
    <header style={{ position:"sticky", top:0, zIndex:100, background:"#fff", borderBottom:"1px solid #f0d0d8", padding:"0 40px", height:68, display:"flex", alignItems:"center", boxShadow:"0 2px 8px rgba(200,80,106,.07)" }}>
      <div className="header-inner" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%", gap:20 }}>
        <div style={{ display:"flex", alignItems:"center", cursor:"pointer" }} onClick={() => setPage("inicio")}>
          <img src={letra} alt="Sweet Cream Rose Logo" style={{ height:44, objectFit:"contain" }} />
        </div>
        <nav className="scr-nav" style={{ display:"flex", gap:28 }}>
          {[["inicio","INICIO"],["productos","PRODUCTOS"],["ofertas","OFERTAS"],["nosotros","NOSOTROS"]].map(([key,label]) => (
            <a key={key} className={page === key ? "active" : ""} onClick={() => setPage(key)}>{label}</a>
          ))}
        </nav>
        <div style={{ display:"flex", alignItems:"center", gap:16 }}>
          <div style={{ display:"flex", alignItems:"center", gap:6 }}>
            {searchOpen && (
              <input autoFocus type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)}
                placeholder="Buscar..."
                style={{ border:"1px solid #f0d0d8", borderRadius:4, padding:"5px 10px", fontSize:13, outline:"none", width:160 }} />
            )}
            <button onClick={() => setSearchOpen(o => !o)} style={{ background:"none", border:"none", cursor:"pointer", color:"#2d1a10", fontSize:17 }}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <a href="#" style={{ color:"#2d1a10", fontSize:17 }}><i className="fa-regular fa-user"></i></a>
          <a href="#" style={{ position:"relative", color:"#2d1a10", fontSize:17 }}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span style={{ position:"absolute", top:-8, right:-8, background:"#c8506a", color:"#fff", borderRadius:"50%", width:17, height:17, fontSize:10, fontFamily:"'Lato',sans-serif", fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center" }}>{cartCount}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

// ─── FOOTER ──────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer style={{ background:"#2d1a10", padding:"52px 40px 20px" }}>
      <div className="footer-cols" style={{ display:"flex", gap:48, flexWrap:"wrap", marginBottom:40 }}>
        <div style={{ flex:"0 0 220px" }}>
          <img src={logo} alt="Sweet Cream Rose" style={{ height:52, objectFit:"contain", marginBottom:14, filter:"brightness(0) invert(1)" }} />
          <p style={{ fontFamily:"'Lato',sans-serif", fontSize:13, color:"#c9a0a8", lineHeight:1.7, marginBottom:18 }}>En un Mundo de experiencias duras con un pastel dale dulzura.</p>
          <div style={{ display:"flex", alignItems:"center", gap:4 }}>
            <span style={{ fontFamily:"'Lato',sans-serif", fontSize:12, fontWeight:700, color:"#f5c8d0", letterSpacing:1, marginRight:6 }}>SÍGUENOS</span>
            <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
        <div style={{ flex:1, minWidth:130 }}>
          <h3 style={{ fontFamily:"'Lato',sans-serif", fontSize:12, fontWeight:700, letterSpacing:2, color:"#fff", marginBottom:16, textTransform:"uppercase" }}>Enlaces</h3>
          {[["inicio","Inicio"],["productos","Productos"],["ofertas","Ofertas"],["nosotros","Nosotros"]].map(([key,label]) => (
            <a key={key} className="footer-link" onClick={() => setPage(key)}>{label}</a>
          ))}
        </div>
        <div style={{ flex:1, minWidth:160 }}>
          <h3 style={{ fontFamily:"'Lato',sans-serif", fontSize:12, fontWeight:700, letterSpacing:2, color:"#fff", marginBottom:16, textTransform:"uppercase" }}>Ayuda</h3>
          {["Preguntas frecuentes","Políticas de envío","Términos y condiciones","Políticas de privacidad"].map(l => (
            <a key={l} href="#" className="footer-link">{l}</a>
          ))}
        </div>
        <div style={{ flex:1, minWidth:180 }}>
          <h3 style={{ fontFamily:"'Lato',sans-serif", fontSize:12, fontWeight:700, letterSpacing:2, color:"#fff", marginBottom:16, textTransform:"uppercase" }}>Contáctanos</h3>
          {[
            { icon:"fa-location-dot", text:"Lima, Perú" },
            { icon:"fa-phone",        text:"+51 987654900" },
            { icon:"fa-envelope",     text:"info@SweetCreamRose.com" },
            { icon:"fa-clock",        text:"Lunes a Sábado: 9am - 6pm" },
          ].map((c,i) => (
            <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:10, marginBottom:10 }}>
              <i className={`fa-solid ${c.icon}`} style={{ color:"#c8506a", fontSize:14, marginTop:2 }}></i>
              <span style={{ fontFamily:"'Lato',sans-serif", fontSize:13, color:"#c9a0a8", lineHeight:1.5 }}>{c.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ borderTop:"1px solid rgba(255,255,255,.1)", paddingTop:18, textAlign:"center" }}>
        <p style={{ fontFamily:"'Lato',sans-serif", fontSize:12, color:"#8a6060", letterSpacing:.5 }}>© 2026 Sweet Cream Rose. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

// ─── PAGE HEADER (reutilizable) ───────────────────────────
function PageHeader({ title, subtitle1, subtitle2 }) {
  return (
    <section style={{ background:"#fdf2f4", padding:"48px 24px 32px", textAlign:"center", borderBottom:"1px solid #f0d0d8" }}>
      <img src={logo} alt="Sweet Cream Rose" style={{ height:80, objectFit:"contain", marginBottom:16 }} />
      <p style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", fontSize:18, color:"#7a4055", marginBottom:6 }}>{subtitle1}</p>
      <p style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", fontSize:16, color:"#a07080", marginBottom:28 }}>{subtitle2}</p>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16 }}>
        <div style={{ height:1, width:60, background:"#f0d0d8" }}></div>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:26, fontWeight:700, color:"#2d1a10", letterSpacing:3 }}>{title}</h2>
        <div style={{ height:1, width:60, background:"#f0d0d8" }}></div>
      </div>
      <div style={{ marginTop:8, color:"#c8506a", fontSize:18, letterSpacing:4 }}>— 🤍 —</div>
    </section>
  );
}

// ─── INICIO ──────────────────────────────────────────────
function Inicio({ setPage }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(testimonials);
  const timerRef = useRef(null);

  const startSlider = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrentSlide(s => (s + 1) % slides.length), 4000);
  };
  useEffect(() => { startSlider(); return () => clearInterval(timerRef.current); }, []);
  const goToSlide = i => { setCurrentSlide(i); startSlider(); };

  const handleComment = e => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;
    setComments([{ name: commentName, text: commentText }, ...comments]);
    setCommentName(""); setCommentText("");
  };

  return (
    <>
      {/* HERO SLIDER */}
      <section style={{ position:"relative", background:"#fdf2f4", overflow:"hidden" }}>
        {slides.map((slide, i) => (
          <div key={i} className={`hero-slide${currentSlide === i ? " active" : ""}`} style={{ alignItems:"stretch", minHeight:420 }}>
            <div style={{ flex:"0 0 55%", overflow:"hidden", maxHeight:480 }}>
              <img src={slide.img} alt={slide.title} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
            </div>
            <div className="hero-text-block" style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"center", padding:"40px 56px", background:"#fdf2f4" }}>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:36, fontWeight:700, color:"#2d1a10", marginBottom:16, lineHeight:1.25 }}>{slide.title}</h2>
              <p style={{ fontFamily:"'Lato',sans-serif", fontSize:16, color:"#7a4055", marginBottom:32, lineHeight:1.7 }}>{slide.text}</p>
              <button className="scr-btn-primary" onClick={() => setPage("productos")}>Ver más</button>
            </div>
          </div>
        ))}
        <div style={{ position:"absolute", bottom:18, left:"50%", transform:"translateX(-50%)", display:"flex", gap:8 }}>
          {slides.map((_, i) => (
            <span key={i} className="dot" style={{ background: currentSlide === i ? "#c8506a" : "rgba(200,80,106,.3)" }} onClick={() => goToSlide(i)} />
          ))}
        </div>
      </section>

      {/* LO MÁS COMPRADO */}
      <main style={{ maxWidth:1100, margin:"0 auto", padding:"60px 24px 40px" }}>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, textAlign:"center", color:"#2d1a10", letterSpacing:2, marginBottom:36, textTransform:"uppercase" }}>Lo más comprado</h2>
        <div className="home-products-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
          {homeProducts.map((p, i) => (
            <div key={i} className="product-card-wrap" onClick={() => setPage("productos")}>
              <div style={{ overflow:"hidden" }}>
                <img src={p.img} alt={p.label} className="product-card-img" />
              </div>
              <div style={{ padding:"12px 16px", fontFamily:"'Lato',sans-serif", fontSize:14, fontWeight:700, color:"#2d1a10", letterSpacing:.5 }}>{p.label}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:36 }}>
          <button className="scr-btn-outline" onClick={() => setPage("productos")}>Ver más</button>
        </div>
      </main>

      {/* FESTIVIDADES */}
      <section style={{ background:"#fdf2f4", padding:"60px 24px" }}>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, textAlign:"center", color:"#2d1a10", letterSpacing:2, marginBottom:40, textTransform:"uppercase" }}>Promociones de Festividad</h2>
        <div className="festi-row" style={{ display:"flex", borderRadius:14, overflow:"hidden", maxWidth:960, margin:"0 auto 28px", background:"linear-gradient(135deg,#1a3c2e 0%,#2d6647 100%)", boxShadow:"0 4px 24px rgba(0,0,0,.13)" }}>
          <div style={{ flex:1, padding:"40px 44px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:24, color:"#fff", marginBottom:14, lineHeight:1.3 }}>POSTRES para acompañar esta <span style={{ color:"#f5d76e" }}>NAVIDAD</span></h3>
            <p style={{ fontFamily:"'Lato',sans-serif", fontSize:15, color:"rgba(255,255,255,.85)", marginBottom:28, lineHeight:1.7 }}>Mira los mejores postres para esta navidad y pasar tiempo en familia inolvidable.</p>
            <button className="scr-btn-white" style={{ alignSelf:"flex-start" }} onClick={() => setPage("ofertas")}>Ver más</button>
          </div>
          <div style={{ flex:"0 0 42%", overflow:"hidden", maxHeight:280 }}>
            <img src={navidad} alt="Postres Navideños" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
          </div>
        </div>
        <div className="festi-row" style={{ display:"flex", borderRadius:14, overflow:"hidden", maxWidth:960, margin:"0 auto", background:"linear-gradient(135deg,#2b1a0e 0%,#5c3010 100%)", boxShadow:"0 4px 24px rgba(0,0,0,.13)" }}>
          <div style={{ flex:1, padding:"40px 44px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:24, color:"#fff", marginBottom:14, lineHeight:1.3 }}>POSTRES para disfrutar en <span style={{ color:"#ff8c00" }}>HALLOWEEN</span></h3>
            <p style={{ fontFamily:"'Lato',sans-serif", fontSize:15, color:"rgba(255,255,255,.85)", marginBottom:28, lineHeight:1.7 }}>Descubre nuestros deliciosos postres para Halloween y organiza una fiesta espeluznante.</p>
            <button className="scr-btn-white" style={{ alignSelf:"flex-start" }} onClick={() => setPage("ofertas")}>Ver más</button>
          </div>
          <div style={{ flex:"0 0 42%", overflow:"hidden", maxHeight:280 }}>
            <img src={halloween} alt="Postres Halloween" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
          </div>
        </div>
        <div style={{ textAlign:"center", marginTop:36 }}>
          <button className="scr-btn-outline" onClick={() => setPage("ofertas")}>Ver más</button>
        </div>
      </section>

      {/* COMENTARIOS */}
      <section style={{ maxWidth:900, margin:"0 auto", padding:"60px 24px" }}>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, textAlign:"center", color:"#2d1a10", letterSpacing:2, marginBottom:36, textTransform:"uppercase" }}>Deja tu comentario</h2>
        <form onSubmit={handleComment} style={{ background:"#fdf2f4", borderRadius:12, padding:"30px 36px", marginBottom:40, border:"1px solid #f0d0d8" }}>
          <div style={{ marginBottom:16 }}>
            <label style={{ display:"block", fontFamily:"'Lato',sans-serif", fontSize:12, fontWeight:700, letterSpacing:1.5, color:"#7a4055", marginBottom:6, textTransform:"uppercase" }}>Nombre</label>
            <input type="text" value={commentName} onChange={e => setCommentName(e.target.value)} placeholder="Escribe tu nombre completo"
              style={{ width:"100%", border:"1px solid #f0d0d8", borderRadius:6, padding:"10px 14px", fontSize:14, outline:"none", fontFamily:"'Lato',sans-serif", background:"#fff", color:"#2d1a10" }} />
          </div>
          <div style={{ marginBottom:20 }}>
            <textarea value={commentText} onChange={e => setCommentText(e.target.value)} rows={4} placeholder="Deja un comentario"
              style={{ width:"100%", border:"1px solid #f0d0d8", borderRadius:6, padding:"10px 14px", fontSize:14, outline:"none", resize:"vertical", fontFamily:"'Lato',sans-serif", background:"#fff", color:"#2d1a10" }} />
          </div>
          <div style={{ textAlign:"right" }}>
            <button type="submit" className="scr-btn-primary">COMENTAR</button>
          </div>
        </form>
        <div className="testimonials-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
          {comments.slice(0,6).map((t,i) => (
            <div key={i} className="testimonial-card">
              <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:15, color:"#c8506a", marginBottom:10 }}>{t.name}</div>
              <div style={{ fontFamily:"'Lato',sans-serif", fontSize:14, color:"#5a3040", lineHeight:1.6 }}>{t.text}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// ─── PRODUCTOS ───────────────────────────────────────────
function Productos({ setPage }) {
  const [wishlist, setWishlist] = useState([]);
  const toggleWish = i => setWishlist(w => w.includes(i) ? w.filter(x => x !== i) : [...w, i]);

  return (
    <>
      <PageHeader title="PRODUCTOS"
        subtitle1="Deliciosos postres artesanales hechos con amor."
        subtitle2="Explora nuestras categorías y encuentra el dulce perfecto para cada ocasión." />

      {/* CATEGORÍAS */}
      <section style={{ maxWidth:1000, margin:"0 auto", padding:"40px 24px" }}>
        <div className="categories-grid" style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:20 }}>
          {categories.map((cat, i) => (
            <div key={i} className="category-item">
              <div className="category-icon-box"><i className={`fa-solid ${cat.icon}`}></i></div>
              <span style={{ fontFamily:"'Lato',sans-serif", fontSize:12, fontWeight:700, color:"#2d1a10", letterSpacing:.5, textAlign:"center" }}>{cat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CATÁLOGO */}
      <section style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px 60px" }}>
        <div style={{ textAlign:"center", marginBottom:36 }}>
          <span style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:700, color:"#2d1a10", letterSpacing:3 }}>✨ TODOS LOS PRODUCTOS ✨</span>
        </div>
        <div className="catalog-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
          {allProducts.map((p, i) => (
            <div key={i} className="catalog-card">
              <button className={`wishlist-btn${wishlist.includes(i) ? " active" : ""}`} onClick={() => toggleWish(i)}>
                <i className={wishlist.includes(i) ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
              </button>
              <img src={p.img} alt={p.name} />
              <div style={{ padding:"16px 18px" }}>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:16, fontWeight:700, color:"#2d1a10", marginBottom:6 }}>{p.name}</h3>
                <p style={{ fontFamily:"'Lato',sans-serif", fontSize:13, color:"#7a4055", lineHeight:1.6, marginBottom:12 }}>{p.desc}</p>
                <p style={{ fontFamily:"'Lato',sans-serif", fontSize:16, fontWeight:700, color:"#c8506a" }}>{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:"0 24px 60px" }}>
        <div style={{ maxWidth:900, margin:"0 auto", background:"linear-gradient(135deg,#c8506a 0%,#a83858 100%)", borderRadius:14, padding:"32px 40px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:20 }}>
          <div style={{ display:"flex", alignItems:"center", gap:20 }}>
            <div style={{ width:56, height:56, borderRadius:"50%", background:"rgba(255,255,255,.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, color:"#fff" }}>
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
            <div>
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:20, color:"#fff", marginBottom:4 }}>¿No encuentras lo que buscas?</h3>
              <p style={{ fontFamily:"'Lato',sans-serif", fontSize:14, color:"rgba(255,255,255,.85)" }}>Contáctanos y con gusto te ayudamos a crear el postre perfecto</p>
            </div>
          </div>
          <button className="scr-btn-white">CONTACTAR <i className="fa-solid fa-chevron-right" style={{ marginLeft:6 }}></i></button>
        </div>
      </section>
    </>
  );
}

// ─── OFERTAS ─────────────────────────────────────────────
function Ofertas() {
  const [wishlist, setWishlist] = useState([]);
  const toggleWish = i => setWishlist(w => w.includes(i) ? w.filter(x => x !== i) : [...w, i]);

  const scrollToGrid = () => document.getElementById("ofertas-grid")?.scrollIntoView({ behavior:"smooth" });

  return (
    <>
      <PageHeader title="OFERTAS"
        subtitle1="Aprovecha nuestras ofertas en postres artesanales hechos con amor."
        subtitle2="Sabores irresistibles ahora a precios especiales." />

      {/* HERO BANNER OFERTA */}
      <section style={{ background:"linear-gradient(135deg,#fdf2f4 0%,#f5c8d8 100%)", padding:"52px 40px" }}>
        <div className="hero-offer-inner" style={{ maxWidth:1000, margin:"0 auto", display:"flex", alignItems:"center", gap:48, flexWrap:"wrap" }}>
          <div style={{ flex:1, minWidth:260 }}>
            <span style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#c8506a", color:"#fff", fontFamily:"'Lato',sans-serif", fontSize:12, fontWeight:700, letterSpacing:1.5, padding:"6px 16px", borderRadius:20, marginBottom:20 }}>
              <i className="fa-solid fa-heart"></i> DESCUENTOS ESPECIALES
            </span>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:36, fontWeight:700, color:"#2d1a10", marginBottom:14, lineHeight:1.25 }}>Disfruta lo mejor por menos</h2>
            <p style={{ fontFamily:"'Lato',sans-serif", fontSize:16, color:"#7a4055", marginBottom:32, lineHeight:1.7 }}>Aprovecha nuestras ofertas por tiempo limitado en tus productos favoritos.</p>
            <button className="scr-btn-primary" onClick={scrollToGrid}>
              APROVECHAR OFERTA <i className="fa-solid fa-arrow-right" style={{ marginLeft:8 }}></i>
            </button>
          </div>
          <div style={{ flex:"0 0 300px", position:"relative", display:"flex", justifyContent:"center" }}>
            <img src={tortaFresa} alt="Torta Especial de Oferta"
              style={{ width:260, height:260, objectFit:"cover", borderRadius:"50%", border:"6px solid #fff", boxShadow:"0 8px 32px rgba(200,80,106,.25)", display:"block" }} />
            <div style={{ position:"absolute", top:0, right:20, width:72, height:72, borderRadius:"50%", background:"#c8506a", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 12px rgba(200,80,106,.4)" }}>
              <span style={{ fontFamily:"'Lato',sans-serif", fontSize:10, fontWeight:700, color:"rgba(255,255,255,.8)", letterSpacing:1 }}>Hasta</span>
              <span style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:700, color:"#fff", lineHeight:1 }}>25%</span>
              <span style={{ fontFamily:"'Lato',sans-serif", fontSize:10, fontWeight:700, color:"rgba(255,255,255,.8)", letterSpacing:1 }}>DSCTO.</span>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTAS DESTACADAS */}
      <section id="ofertas-grid" style={{ maxWidth:1100, margin:"0 auto", padding:"60px 24px" }}>
        <div style={{ textAlign:"center", marginBottom:40 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:12 }}>
            <i className="fa-solid fa-tag" style={{ color:"#c8506a", fontSize:18 }}></i>
            <span style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:700, color:"#2d1a10", letterSpacing:2 }}>OFERTAS DESTACADAS</span>
          </div>
          <div style={{ marginTop:8, color:"#c8506a", letterSpacing:6, fontSize:14 }}>— — — — — —</div>
        </div>
        <div className="offers-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
          {offerProducts.map((p, i) => (
            <div key={i} className="offer-card">
              <span className="badge-discount">{p.discount}</span>
              <button className={`wishlist-btn${wishlist.includes(i) ? " active" : ""}`} onClick={() => toggleWish(i)}>
                <i className={wishlist.includes(i) ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
              </button>
              <img src={p.img} alt={p.name} />
              <div style={{ padding:"16px 18px" }}>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:16, fontWeight:700, color:"#2d1a10", marginBottom:6 }}>{p.name}</h3>
                <p style={{ fontFamily:"'Lato',sans-serif", fontSize:13, color:"#7a4055", lineHeight:1.6, marginBottom:14 }}>{p.desc}</p>
                <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:4 }}>
                  <span style={{ fontFamily:"'Lato',sans-serif", fontSize:13, color:"#b0a0a5", textDecoration:"line-through" }}>{p.oldPrice}</span>
                  <span style={{ fontFamily:"'Lato',sans-serif", fontSize:18, fontWeight:700, color:"#c8506a" }}>{p.newPrice}</span>
                </div>
                <button className="btn-add-cart">
                  <i className="fa-solid fa-cart-shopping" style={{ marginRight:8 }}></i>AÑADIR AL CARRITO
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER TIEMPO LIMITADO */}
      <section style={{ padding:"0 24px 48px" }}>
        <div style={{ maxWidth:900, margin:"0 auto", background:"linear-gradient(135deg,#c8506a 0%,#a83858 100%)", borderRadius:14, padding:"28px 40px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:20 }}>
          <div style={{ display:"flex", alignItems:"center", gap:20 }}>
            <div style={{ width:54, height:54, borderRadius:"50%", background:"rgba(255,255,255,.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, color:"#fff", flexShrink:0 }}>
              <i className="fa-regular fa-clock"></i>
            </div>
            <div>
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:20, color:"#fff", marginBottom:4 }}>¡OFERTAS POR TIEMPO LIMITADO!</h3>
              <p style={{ fontFamily:"'Lato',sans-serif", fontSize:14, color:"rgba(255,255,255,.85)" }}>No te quedes sin tus favoritos. Promociones válidas hasta agotar stock</p>
            </div>
          </div>
          <button className="scr-btn-white" onClick={scrollToGrid}>¡APROVÉCHALOS YA!</button>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section style={{ background:"#fdf2f4", padding:"48px 24px", borderTop:"1px solid #f0d0d8" }}>
        <div className="value-props-grid" style={{ maxWidth:900, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:24 }}>
          {valueProps.map((v, i) => (
            <div key={i} className="prop-item">
              <div className="prop-icon"><i className={`fa-solid ${v.icon}`}></i></div>
              <span style={{ fontFamily:"'Lato',sans-serif", fontSize:13, color:"#5a3040", fontWeight:600, lineHeight:1.5 }}>{v.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// ─── ROOT APP ────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("inicio");
  const [cartCount] = useState(2);

  const navigateTo = p => { setPage(p); window.scrollTo({ top:0, behavior:"smooth" }); };

  return (
    <div style={{ fontFamily:"'Playfair Display','Georgia',serif", background:"#fff", color:"#2d1a10", minHeight:"100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <style>{globalCSS}</style>

      <Header page={page} setPage={navigateTo} cartCount={cartCount} />

      {page === "inicio"    && <Inicio    setPage={navigateTo} />}
      {page === "productos" && <Productos setPage={navigateTo} />}
      {page === "ofertas"   && <Ofertas   setPage={navigateTo} />}
      {page === "nosotros"  && (
        <div style={{ minHeight:400, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:16 }}>
          <p style={{ fontFamily:"'Playfair Display',serif", fontSize:22, color:"#c8506a" }}>Página en construcción 🍰</p>
          <button className="scr-btn-outline" onClick={() => navigateTo("inicio")}>Volver al inicio</button>
        </div>
      )}

      <Footer setPage={navigateTo} />
    </div>
  );
}