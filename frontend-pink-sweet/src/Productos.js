import React, { useState } from 'react';
import logoPrincipal from './assets/logo.png';
import bannerPrincipal from './assets/banner.png';
import iconUser from './assets/icon-user.png';
import iconCart from './assets/icon-cart.png';
import iconShop from './assets/icon-shop.png';
import iconLupa from './assets/icon-lupa.png';
import dividerTitle from './assets/divider-title.png';
import dividerSub from './assets/divider-subtitle.png';
import dividerProduct from './assets/divider-product.png';

// ICONOS
import iconEntremets from './assets/icon-entremets.png';
import iconTortas from './assets/icon-tortas-clasicas.png';
import iconGalletas from './assets/icon-galletas.png';
import iconTequenos from './assets/icon-tequenos.png';
import iconSandwiches from './assets/icon-mini-sandwiches.png';
import iconEmpanadas from './assets/icon-mini-empanadas.png';
import iconAlfajores from './assets/icon-alfajores.png';
import iconTrufas from './assets/icon-trufas.png';
import iconPostres from './assets/icon-postres-frios.png';
import iconCupcakes from './assets/icon-cupcakes.png';

// ENTREMETS
import imgELimon from './assets/products/e-limon.png';
import imgEGlaseadoEspejo from './assets/products/e-glaseado-espejo.png';
import imgEFresa from './assets/products/e-fresa.png';
import imgEMora from './assets/products/e-mora.png';
import imgECoco from './assets/products/e-coco.png';
import imgEMiniEntremets from './assets/products/e-mini-entremets.png';

// TORTAS CLASICAS
import imgTcTripleChocolate from './assets/products/tc-triple-chocolate.png';
import imgTcVainillaConFrutas from './assets/products/tc-vainilla-con-frutas.png';
import imgTcZanahoria from './assets/products/tc-zanahoria.png';
import imgTcRedVelvet from './assets/products/tc-red-velvet.png';
import imgTcChocolate from './assets/products/tc-chocolate.png';
import imgTcMaracuya from './assets/products/tc-maracuya.png';

// GALLETAS
import imgGFresa from './assets/products/g-fresa.jpg';
import imgGPina from './assets/products/g-pina.jpg';
import imgGManzana from './assets/products/g-manzana.jpg';
import imgGChocolate from './assets/products/g-chocolate.png';
import imgGAvenaYPasas from './assets/products/g-avena-y-pasas.png';
import imgGPersonalizadas from './assets/products/g-personalizadas.jpg';

// TEQUENOS VARIADOS
import imgTvPollo from './assets/products/tv-pollo.png';
import imgTvClasicos from './assets/products/tv-clasicos.png';
import imgTvQuesoGouda from './assets/products/tv-queso-gouda.png';
import imgTvGuayabaYQueso from './assets/products/tv-guayaba-y-queso.png';
import imgTvJamonYQueso from './assets/products/tv-jamon-y-queso.png';
import imgTvNuttela from './assets/products/tv-nuttela.png';

// MINI SANDWICHES
import imgMsMiniSandwichesGourmet from './assets/products/ms-mini-sandwiches-gourmet.png';
import imgMsMiniCroissantsRellenos from './assets/products/ms-mini-croissants-rellenos.png';
import imgMsMiniSandwichesDelipe from './assets/products/ms-mini-sandwiches-delipe.png';
import imgMsMiniBaguettas from './assets/products/ms-mini-baguettas.png';
import imgMsMiniWraps from './assets/products/ms-mini-wraps.png';
import imgMsMiniCiabattas from './assets/products/ms-mini-ciabattas.png';

// MINI EMPANADAS
import imgMePollo from './assets/products/me-pollo.png';
import imgMeQueso from './assets/products/me-queso.png';
import imgMeCarne from './assets/products/me-carne.png';
import imgMeEspinacaYQueso from './assets/products/me-espinaca-y-queso.png';
import imgMeJamonYQueso from './assets/products/me-jamon-y-queso.png';
import imgMeChampinones from './assets/products/me-champinones.png';

// ALFAJORES
import imgAClasico from './assets/products/a-clasico.png';
import imgAChocolate from './assets/products/a-chocolate.png';
import imgACoco from './assets/products/a-coco.png';
import imgAManjarYNueces from './assets/products/a-manjar-y-nueces.png';
import imgAChocolateBlanco from './assets/products/a-chocolate-blanco.png';
import imgAColores from './assets/products/a-colores.png';

// TRUFAS
import imgTClasicas from './assets/products/t-clasicas.png';
import imgTFresa from './assets/products/t-fresa.png';
import imgTOreo from './assets/products/t-oreo.png';
import imgTMaracuya from './assets/products/t-maracuya.png';
import imgTChocolateBelga from './assets/products/t-chocolate-belga.png';
import imgTCoco from './assets/products/t-coco.png';

// POSTRES FRIOS
import imgPfMini3LechesClasico from './assets/products/pf-mini-3-leches-clasico.png';
import imgPfMini3LechesDeChocolate from './assets/products/pf-mini-3-leches-de-chocolate.png';
import imgPfMini3LechesDeFresa from './assets/products/pf-mini-3-leches-de-fresa.png';
import imgPfMini3LechesDeMaracuya from './assets/products/pf-mini-3-leches-de-maracuya.png';
import imgPfVasitoDeOreoCream from './assets/products/pf-vasito-de-oreo-cream.png';
import imgPfVasitoDeFresaYChantilly from './assets/products/pf-vasito-de-fresa-y-chantilly.png';

// CUPCAKES
import imgCChocolate from './assets/products/c-chocolate.jpg';
import imgCVainilla from './assets/products/c-vainilla.jpg';
import imgCZanahoria from './assets/products/c-zanahoria.jpg';
import imgCFresa from './assets/products/c-fresa.png';
import imgCOreo from './assets/products/c-oreo.png';
import imgCArandano from './assets/products/c-arandano.png';

const Productos = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('empanadas');

  const listadoCategorias = [
    { id: 'entremets', nombre: 'Entremets', icono: iconEntremets },
    { id: 'tortas', nombre: 'Tortas Clásicas', icono: iconTortas },
    { id: 'galletas', nombre: 'Galletas', icono: iconGalletas },
    { id: 'tequenos', nombre: 'Tequeños', icono: iconTequenos },
    { id: 'sandwiches', nombre: 'Mini Sandwiches', icono: iconSandwiches },
    { id: 'empanadas', nombre: 'Mini Empanadas', icono: iconEmpanadas },
    { id: 'alfajores', nombre: 'Alfajores', icono: iconAlfajores },
    { id: 'trufas', nombre: 'Trufas', icono: iconTrufas },
    { id: 'postres', nombre: 'Postres Fríos', icono: iconPostres, col: '2 / 3' },
    { id: 'cupcakes', nombre: 'Cupcakes', icono: iconCupcakes, col: '3 / 4' },
  ];

  const CATALOGO = {
    entremets: {
      titulo: "ENTREMETS",
      icono: iconEntremets,
      items: [
        { id: 'e1', nombre: "Limón", desc: "Suave entremet de limón con un corazón de curd de limón y un bizzocho de vainilla ligero y esponjoso.", precio: "12.00", img: imgELimon },
        { id: 'e2', nombre: "Glaseado Espejo", desc: "Elegante entremet con mousse de frutos del bosque y un interior de crema de vainilla con mermelada de arándanos. Acabado en glaseado espejo brillante.", precio: "12.00", img: imgEGlaseadoEspejo },
        { id: 'e3', nombre: "Fresa", desc: "Fusión perfecta de mousse de fresa cremosa y un interior suave de vainilla con gelée de fresa natural.", precio: "12.00", img: imgEFresa },
        { id: 'e4', nombre: "Mora", desc: "Exquisito entremet de mora con mousse ligera y un corazón de gel de mora silvestre sobre bizcocho de chocolate.", precio: "12.00", img: imgEMora },
        { id: 'e5', nombre: "Coco", desc: "Delicado entremet de coco con relleno tropical de maracuyá y bizcocho de vainilla húmedo.", precio: "12.00", img: imgECoco },
        { id: 'e6', nombre: "Mini Entremets", desc: "Pequeños corazones de mousse y gelatina en diferentes sabores. Ideales para detalles únicos y celebraciones especiales.", precio: "15.00", img: imgEMiniEntremets },
      ]
    },
    tortas: {
      titulo: "TORTAS CLÁSICAS",
      icono: iconTortas,
      items: [
        { id: 'tc1', nombre: "Triple Chocolate", desc: "Delicioso bizcocho de chocolate con relleno y cobertura de ganache, decorado con crema de chocolate.", precio: "45.00", img: imgTcTripleChocolate },
        { id: 'tc2', nombre: "Vainilla con Frutas", desc: "Bizcocho de vainilla esponjoso con relleno de crema chantilly y frutas frescas de temporada.", precio: "40.00", img: imgTcVainillaConFrutas },
        { id: 'tc3', nombre: "Zanahoria", desc: "Húmeda torta de zanahoria con nueces y pasas, cubierta con frosting de queso crema.", precio: "38.00", img: imgTcZanahoria },
        { id: 'tc4', nombre: "Red Velvet", desc: "Clásica torta red velvet con capas de bizcocho rojo y frosting de queso crema.", precio: "42.00", img: imgTcRedVelvet },
        { id: 'tc5', nombre: "Chocolate", desc: "Bizcocho de chocolate intenso con relleno y cobertura de ganache de chocolate belga.", precio: "35.00", img: imgTcChocolate },
        { id: 'tc6', nombre: "Maracuyá", desc: "Suave bizcocho de vainilla con mousse de maracuyá y cobertura de pulpa natural.", precio: "38.00", img: imgTcMaracuya },
      ]
    },
    galletas: {
      titulo: "GALLETAS",
      icono: iconGalletas,
      items: [
        { id: 'g1', nombre: "Fresa", desc: "Deliciosas galletas de fresa con copos de avena, mermelada en figuras y un toque de vainilla.", precio: "3.50", img: imgGFresa },
        { id: 'g2', nombre: "Piña", desc: "Galletas deliciosas de piña, avena, bañadas en una crema de coco y vainilla para disfrutar el paladar.", precio: "3.50", img: imgGPina },
        { id: 'g3', nombre: "Manzana", desc: "Deliciosas galletas de manzana, vainilla, nuez, almendras y avena bañadas en crema de caramelo.", precio: "3.50", img: imgGManzana },
        { id: 'g4', nombre: "Chocolate", desc: "Galletas deliciosas de piña, avena, bañadas en una crema de coco y vainilla para disfrutar el paladar.", precio: "4.00", img: imgGChocolate },
        { id: 'g5', nombre: "Avena y Pasas", desc: "Deliciosas galletas de manzana, vainilla, nuez, almendras y avena bañadas en crema de caramelo.", precio: "3.50", img: imgGAvenaYPasas },
        { id: 'g6', nombre: "Personalizadas", desc: "Galletas artesanales personalizadas, decoradas con diseños únicos ideales para baby showers, cumpleaños, quinceañeros y momentos especiales. Cada detalle es hecho con amor para sorprender y endulzar tus celebraciones.", precio: "5.00", img: imgGPersonalizadas },
      ]
    },
    tequenos: {
      titulo: "TEQUEÑOS VARIADOS",
      icono: iconTequenos,
      items: [
        { id: 'tv1', nombre: "Pollo", desc: "Deliciosos tequeños rellenos de pollo desmechado con un toque de especias. ¡Irresistibles!", precio: "8.00", img: imgTvPollo },
        { id: 'tv2', nombre: "Clásicos", desc: "La receta tradicional que nunca falla. Rellenos de queso blanco llanero, crujientes por fuera y derretidos por dentro.", precio: "7.00", img: imgTvClasicos },
        { id: 'tv3', nombre: "Queso Gouda", desc: "Rellenos con cremoso queso gouda que se derrite perfectamente, creando un sabor suave y delicioso.", precio: "9.00", img: imgTvQuesoGouda },
        { id: 'tv4', nombre: "Guayaba y Queso", desc: "La combinación perfecta entre lo dulce y lo salado. Queso blanco llanero con dulce de guayaba.", precio: "8.50", img: imgTvGuayabaYQueso },
        { id: 'tv5', nombre: "Jamón y Queso", desc: "Rellenos de jamón de calidad y queso derretido. Un clásico que siempre encanta.", precio: "8.50", img: imgTvJamonYQueso },
        { id: 'tv6', nombre: "Nutella", desc: "Para los amantes de lo dulce. Rellenos de Nutella cremosa y envueltos en nuestra masa crujiente.", precio: "9.50", img: imgTvNuttela },
      ]
    },
    sandwiches: {
      titulo: "MINI SANDWICHES",
      icono: iconSandwiches,
      items: [
        { id: 'ms1', nombre: "Gourmet", desc: "Una selección de delgados mini sándwiches elaborados con ingredientes gourmet. ¡Perfectos para cualquier ocasión!", precio: "10.00", img: imgMsMiniSandwichesGourmet },
        { id: 'ms2', nombre: "Croissants Rellenos", desc: "Crujientes mini croissants rellenos de queso, jamón, tomate y lechuga fresca.", precio: "12.00", img: imgMsMiniCroissantsRellenos },
        { id: 'ms3', nombre: "Delipe", desc: "Una selección de mágicos mini sándwiches elaborados con ingredientes premium. ¡Perfectos para cualquier evento!", precio: "9.00", img: imgMsMiniSandwichesDelipe },
        { id: 'ms4', nombre: "Mini Baguettas", desc: "Mini baguettes rellenas de pollo, jamón, queso, lechuga, tomate y aderezos suaves. ¡La elección ideal para los amantes del buen sabor!", precio: "11.00", img: imgMsMiniBaguettas },
        { id: 'ms5', nombre: "Mini Wraps", desc: "Suaves wraps rellenos de pollo, jamón, queso crema y vegetales frescos. Prácticos, saludables y deliciosos.", precio: "10.50", img: imgMsMiniWraps },
        { id: 'ms6', nombre: "Mini Ciabattas", desc: "Pan ciabatta artesanal con rellenos de jamón serrano, queso, rúcula y tomate seco. ¡Una combinación irresistible!", precio: "11.50", img: imgMsMiniCiabattas },
      ]
    },
    empanadas: {
      titulo: "MINI EMPANADAS",
      icono: iconEmpanadas,
      items: [
        { id: 'me1', nombre: "Pollo", desc: "Una selección de mini empanadas rellenas con jugoso pollo desmenuzado, sazonado con especias y un toque de cebolla.", precio: "5.00", img: imgMePollo },
        { id: 'me2', nombre: "Queso", desc: "Deliciosas empanadas rellenas de queso fundido, cremosas por dentro y doradas por fuera.", precio: "5.00", img: imgMeQueso },
        { id: 'me3', nombre: "Carne", desc: "Rellenas con carne molida sazonada, cebolla, ajíes y especias. ¡El sabor tradicional que te encantará!", precio: "5.00", img: imgMeCarne },
        { id: 'me4', nombre: "Espinaca y Queso", desc: "Una combinación perfecta de espinaca fresca y queso derretido, envuelta en una masa crujiente y doradita.", precio: "5.00", img: imgMeEspinacaYQueso },
        { id: 'me5', nombre: "Jamón y Queso", desc: "Suaves mini empanadas rellenas de jamón cocido y queso derretido. Clásicas y deliciosas.", precio: "5.00", img: imgMeJamonYQueso },
        { id: 'me6', nombre: "Champiñones", desc: "Rellenas de champiñones salteados con cebolla, ajo y un toque de crema. ¡Delicadas y llenas de sabor!", precio: "5.00", img: imgMeChampinones },
      ]
    },
    alfajores: {
      titulo: "ALFAJORES",
      icono: iconAlfajores,
      items: [
        { id: 'a1', nombre: "Clásico", desc: "Delicadas tapitas artesanales con un suave relleno de dulce de leche y un toque de azúcar en polvo.", precio: "2.50", img: imgAClasico },
        { id: 'a2', nombre: "Chocolate", desc: "Exquisitas tapitas de cacao con un relleno cremoso de dulce de leche, bañadas en chocolate semiamargo.", precio: "3.00", img: imgAChocolate },
        { id: 'a3', nombre: "Coco", desc: "Tiernas tapitas rellenas de dulce de leche y cubiertas con baño de chocolate blanco y coco rallado.", precio: "2.50", img: imgACoco },
        { id: 'a4', nombre: "Manjar y Nueces", desc: "Relleno de manjar blanco cremoso y bordes cubiertos con crocantes nueces picadas.", precio: "3.50", img: imgAManjarYNueces },
        { id: 'a5', nombre: "Chocolate Blanco", desc: "Relleno de dulce de leche cubierto con chocolate blanco y delicadas lineas de chocolate oscuro.", precio: "3.00", img: imgAChocolateBlanco },
        { id: 'a6', nombre: "Colores", desc: "Clásico alfajor relleno de dulce de leche y decorado con coloridos granitos que lo hacen irresistible.", precio: "2.50", img: imgAColores },
      ]
    },
    trufas: {
      titulo: "TRUFAS",
      icono: iconTrufas,
      items: [
        { id: 't1', nombre: "Clásicas", desc: "Deliciosas trufas de chocolate semi amargo con un interior suave y cremoso. El clásico que nunca pasa de moda.", precio: "1.50", img: imgTClasicas },
        { id: 't2', nombre: "Fresa", desc: "Chocolate negro relleno de una suave crema de fresa natural. Dulces, frutales y absolutamente irresistibles.", precio: "1.50", img: imgTFresa },
        { id: 't3', nombre: "Oreo", desc: "Combinación perfecta de chocolate blanco y galletas Oreo. Cremosas, crujientes y llenas de sabor.", precio: "2.00", img: imgTOreo },
        { id: 't4', nombre: "Maracuyá", desc: "Chocolate blanco con un corazón cremoso de maracuyá. Dulce, tropical y refrescante.", precio: "1.50", img: imgTMaracuya },
        { id: 't5', nombre: "Chocolate Belga", desc: "Intenso chocolate belga con un interior suave y sedoso. Para los verdaderos amantes del chocolate.", precio: "2.50", img: imgTChocolateBelga },
        { id: 't6', nombre: "Coco", desc: "Chocolate blanco con un delicado relleno de coco. Suaves, cremosas y con un toque exótico.", precio: "1.50", img: imgTCoco },
      ]
    },
    postres: {
      titulo: "POSTRES FRÍOS",
      icono: iconPostres,
      items: [
        { id: 'pf1', nombre: "Mini 3 Leches Clásico", desc: "Suave bizcocho bañado en tres leches con crema chantilly y un toque de canela.", precio: "6.00", img: imgPfMini3LechesClasico },
        { id: 'pf2', nombre: "3 Leches de Chocolate", desc: "Delicioso bizcocho de chocolate con tres leches, crema chantilly y virutas de chocolate.", precio: "6.50", img: imgPfMini3LechesDeChocolate },
        { id: 'pf3', nombre: "3 Leches de Fresa", desc: "Esponjoso bizcocho de vainilla con tres leches, crema chantilly y cubierta de fresa natural.", precio: "6.50", img: imgPfMini3LechesDeFresa },
        { id: 'pf4', nombre: "3 Leches de Maracuyá", desc: "Bizcocho bañado en tres leches con crema chantilly y un toque tropical de maracuyá.", precio: "6.50", img: imgPfMini3LechesDeMaracuya },
        { id: 'pf5', nombre: "Vasito Oreo Cream", desc: "Copas de crema de vainilla y trocitos de Oreo sobre base de chocolate húmedo.", precio: "5.50", img: imgPfVasitoDeOreoCream },
        { id: 'pf6', nombre: "Vasito Fresa y Chantilly", desc: "Fresas frescas con crema chantilly y suave bizcocho de vanilla.", precio: "5.50", img: imgPfVasitoDeFresaYChantilly },
      ]
    },
    cupcakes: {
      titulo: "CUPCAKES",
      icono: iconCupcakes,
      items: [
        { id: 'c1', nombre: "Chocolate", desc: "Bizcocho de vainilla, chocolate o red velvet con betún de mantequilla o chocolate y chispas de azúcar.", precio: "4.50", img: imgCChocolate },
        { id: 'c2', nombre: "Vainilla", desc: "Delicioso y suave pastelito de miga fina con un toque de dulzor a chocolate, es ideal para decorar con crema batida y/o fondant. Se pueden utilizar para crear pasteles y postres.", precio: "4.00", img: imgCVainilla },
        { id: 'c3', nombre: "Zanahoria", desc: "Relleno y decorado con betún de queso crema, mucha nuez y coco rallado.", precio: "5.00", img: imgCZanahoria },
        { id: 'c4', nombre: "Fresa", desc: "Delicioso y suave pastelito de miga fina con un toque de dulzor a chocolate, es ideal para decorar con crema batida y/o fondant. Se pueden utilizar para crear pasteles y postres.", precio: "4.50", img: imgCFresa },
        { id: 'c5', nombre: "Oreo", desc: "Relleno y decorado con betún de queso crema, mucha nuez y coco rallado.", precio: "5.00", img: imgCOreo },
        { id: 'c6', nombre: "Arándano", desc: "Delicioso y suave pastelito de miga fina con un toque de dulzor a chocolate, es ideal para decorar con crema batida y/o fondant. Se pueden utilizar para crear pasteles y postres.", precio: "5.00", img: imgCArandano },
      ]
    }
  };

  const dataActual = CATALOGO[categoriaActiva];

  return (
    <div style={{ backgroundColor: '#FFEFEF', fontFamily: 'sans-serif' }}>
      
      <header style={{ backgroundColor: '#C6676D', width: '100%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src={bannerPrincipal} alt="Sweet Cream Rose Logo" style={{ height: '45px', objectFit: 'contain', cursor: 'pointer' }} />
          <nav style={{ display: 'flex', gap: '15px' }}>
            <button style={{ border: 'none', padding: '8px 20px', backgroundColor: '#EAAFB8', color: '#5A3E41', fontFamily: 'Poppins-SemiBold', fontSize: '14px', cursor: 'pointer' }}>INICIO</button>
            <button style={{ border: 'none', padding: '8px 20px', backgroundColor: '#FFEFEF', color: '#5A3E41', fontFamily: 'Poppins-SemiBold', fontSize: '14px', cursor: 'pointer' }}>PRODUCTOS</button>
            <button style={{ border: 'none', padding: '8px 20px', backgroundColor: '#EAAFB8', color: '#5A3E41', fontFamily: 'Poppins-SemiBold', fontSize: '14px', cursor: 'pointer' }}>OFERTAS</button>
            <button style={{ border: 'none', padding: '8px 20px', backgroundColor: '#EAAFB8', color: '#5A3E41', fontFamily: 'Poppins-SemiBold', fontSize: '14px', cursor: 'pointer' }}>NOSOTROS</button>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '4px', padding: '0 10px', width: '220px' }}>
              <input type="text" placeholder="Buscar..." style={{ border: 'none', outline: 'none', width: '100%', padding: '8px 0', backgroundColor: 'transparent', fontFamily: 'sans-serif' }} />
              <img src={iconLupa} alt="Lupa" style={{ height: '16px', cursor: 'pointer', marginLeft: '5px' }} />
            </div>
            <img src={iconUser} alt="Usuario" style={{ height: '32px', cursor: 'pointer' }} />
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <img src={iconCart} alt="Carrito" style={{ height: '32px' }} />
              <div style={{ position: 'absolute', top: '-4px', right: '-4px', backgroundColor: 'white', color: '#C6676D', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px', fontWeight: 'bold' }}>0</div>
            </div>
          </div>
        </div>
      </header>

      <section style={{ textAlign: 'center', padding: '40px 20px' }}>
        <img src={logoPrincipal} alt="Logo Sweet Cream Rose" style={{ width: '230px', objectFit: 'contain', marginBottom: '15px' }} />
        <h2 style={{ color: '#5A3E41', margin: '10 0 25px 30', fontFamily: 'Poppins-Bold', fontSize: '30px' }}>PRODUCTOS</h2>
        <img src={dividerTitle} alt="divisor" style={{ width: '180px', height: 'auto', display: 'block', margin: '0 auto 20px auto' }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', maxWidth: '850px', margin: '0 auto', justifyContent: 'center' }}>
          
          {listadoCategorias.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => setCategoriaActiva(cat.id)}
              style={{ 
                gridColumn: cat.col ? cat.col : 'auto', // Centra los últimos dos si tienen "col"
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', height: '90px', 
                border: '2px solid #DE788E', borderRadius: '10px', padding: '0 15px', 
                fontFamily: 'Poppins-SemiBold', cursor: 'pointer', fontWeight: 'bold',
                backgroundColor: categoriaActiva === cat.id ? '#DE788E' : '#FFEFEF', 
                color: categoriaActiva === cat.id ? 'white' : '#984350',
              }}
            >
              <img 
                src={cat.icono} 
                alt="Icono" 
                style={{ 
                  width: '60px', height: '60px', objectFit: 'contain', 
                  filter: categoriaActiva === cat.id ? 'brightness(0) invert(1)' : 'none' 
                }} 
              /> 
              {cat.nombre}
            </div>
          ))}

        </div>
      </section>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', marginTop: '30px', marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '15px' }}>
          <img src={dataActual.icono} alt={`Icono ${dataActual.titulo}`} style={{ width: '80px', height: '80px' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ color: '#5A3E41', fontSize: '40px', fontFamily: 'Poppins-Bold', margin: '0' }}>
              {dataActual.titulo}
            </h1>
            <img src={dividerSub} alt="Divisor Subtitulo" style={{ width: '100%', height: '26px', marginTop: '-10px', objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      <main style={{ maxWidth: '1100px', margin: '40px auto', display: 'flex', flexDirection: 'column', gap: '60px', padding: '0 20px' }}>
        
        {dataActual.items.map((prod, index) => {

          const isEven = index % 2 === 0;

          return (
            <div key={prod.id} style={{ 
              display: 'flex', 
              flexDirection: isEven ? 'row' : 'row-reverse',
              height: '320px', 
              backgroundColor: '#FFEFEF', border: '2px solid #C3666D', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' 
            }}>
              
              <div style={{ flex: '1.3' }}>
                <img src={prod.img} alt={prod.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <div style={{ flex: '1', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: isEven ? 'left' : 'right' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: isEven ? 'row' : 'row-reverse' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: isEven ? 'flex-start' : 'flex-end' }}>
                    <h2 style={{ color: '#5A3E41', fontSize: '32px', margin: '0 0 5px 0', fontFamily: 'Poppins-Bold' }}>{prod.nombre}</h2>
                    <img src={dividerProduct} alt="Divisor de Producto" style={{ width: '100%', height: '26px', marginTop: '-5px', objectFit: 'contain' }} />
                  </div>
                  <div style={{ width: '45px', height: '45px', borderRadius: '100%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0px 5px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
                    <span style={{ fontSize: '40px', color: '#C3666D', marginTop: '-2px' }}>♡</span>
                  </div>
                </div>

                <p style={{ color: '#222', fontSize: '15px', fontFamily: 'Poppins-Medium', lineHeight: '1.6', margin: '10px 0' }}>
                  {prod.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: isEven ? 'flex-start' : 'flex-end' }}>
                  <span style={{ fontSize: '24px', color: '#5A3E41', fontFamily: 'Poltawski-Nowy' }}>S/. {prod.precio}</span>
                  <span style={{ fontSize: '14px', color: '#59423CBA', fontFamily: 'Poppins-Medium' }}>por unidad</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '10px', justifyContent: isEven ? 'flex-start' : 'flex-end' }}>
                  <label style={{ fontSize: '15px', fontFamily: 'Poppins-Medium', color: '#000000' }}>Cantidad:</label>
                  <input type="number" defaultValue="1" style={{ width: '110px', backgroundColor: '#EAAFB8', border: '1px solid #C3666D', borderRadius: '0px', padding: '5px', color: 'white', fontFamily: 'Poppins-Medium', textAlign: 'center' }} />
                  <button style={{ backgroundColor: '#C3666D', color: 'white', border: 'none', padding: '6px 26px', borderRadius: '20px', cursor: 'pointer', fontFamily: 'Poppins-Medium', fontSize: '15px' }}>Comprar</button>
                </div>
              </div>

            </div>
          );
        })}

      </main>

      <section style={{ backgroundColor: '#FACFD8', padding: '0 70px', margin: '80px auto', maxWidth: '940px', height: '175px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <div style={{ width: '130px', height: '130px', flexShrink: 0, backgroundColor: 'white', border: '4px solid #EAAFB8', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
            <img src={iconShop} alt="Icono Tienda" style={{ width: '65%', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div>
            <h3 style={{ color: '#7D2530', margin: '0 0 5px 0', fontSize: '22px', fontFamily: 'Poppins-SemiBold' }}>¿No encuentras lo que buscas?</h3>
            <p style={{ margin: '0', color: '#B14B47', fontSize: '19px', fontFamily: 'Signika-Regular', maxWidth: '400px', lineHeight: '1.2' }}>Contáctanos y con gusto te ayudamos a crear el postre perfecto</p>
          </div>
        </div>
        <button style={{ backgroundColor: '#C3666D', color: 'white', fontSize: '16px', fontFamily: 'Poppins-Bold', border: 'none', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>CONTACTAR <span style={{ fontSize: '18px' }}>›</span></button>
      </section>

      <footer style={{ backgroundColor: '#C2656C', color: 'white', padding: '60px 40px 20px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '160px', alignItems: 'flex-start', width: '100%', marginBottom: '40px', maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', maxWidth: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '120px', height: '120px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', margin: '0 auto' }}>
                <img src={logoPrincipal} alt="Logo Sweet Cream Rose" style={{ width: '80%', height: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ fontSize: '12px', marginTop: '15px', color: 'white', lineHeight: '1.4', maxWidth: '180px' }}>En un mundo de experiencias duras con un pastel dale dulzura.</p>
          </div>
          <div>
            <h4 style={{ margin: '0 0 15px 0', fontSize: '16px', fontWeight: 'bold', color: 'white' }}>ENLACES</h4>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0', lineHeight: '2', fontSize: '14px' }}>
                <li style={{ cursor: 'pointer', color: 'white' }}>Inicio</li>
                <li style={{ cursor: 'pointer', color: 'white' }}>Productos</li>
                <li style={{ cursor: 'pointer', color: 'white' }}>Ofertas</li>
                <li style={{ cursor: 'pointer', color: 'white' }}>Nosotros</li>
            </ul>
          </div>
          <div>
            <h4 style={{ margin: '0 0 15px 0', fontSize: '16px', fontWeight: 'bold', color: 'white' }}>AYUDA</h4>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0', lineHeight: '2', fontSize: '14px' }}>
                <li style={{ cursor: 'pointer', color: 'white' }}>Preguntas frecuentes</li>
                <li style={{ cursor: 'pointer', color: 'white' }}>Políticas de envío</li>
                <li style={{ cursor: 'pointer', color: 'white' }}>Términos y condiciones</li>
                <li style={{ cursor: 'pointer', color: 'white' }}>Políticas de privacidad</li>
            </ul>
          </div>
          <div>
            <h4 style={{ margin: '0 0 15px 0', fontSize: '16px', fontWeight: 'bold', color: 'white' }}>CONTÁCTANOS</h4>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0', lineHeight: '2', fontSize: '14px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}><img src={iconUser} alt="Pin Icon" style={{ width: '16px', height: '16px' }} />Lima, Perú</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}><img src={iconUser} alt="Phone Icon" style={{ width: '16px', height: '16px' }} />+51 987654900</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}><img src={iconUser} alt="Envelope Icon" style={{ width: '16px', height: '16px' }} />info@SweetCreamRose.com</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}><img src={iconUser} alt="Clock Icon" style={{ width: '16px', height: '16px' }} />Lunes a Sábado: 9am - 6pm</li>
            </ul>
          </div>
        </div>
        <div style={{ width: '100%', borderTop: '1px solid #EAAFB8', marginBottom: '20px' }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ fontSize: '15px', fontWeight: 'bold', color: 'white', fontFamily: 'Poppins-Bold' }}>SÍGUENOS</span>
            <img src={iconUser} alt="Facebook" style={{ width: '25px', height: '25px', cursor: 'pointer' }} />
            <img src={iconUser} alt="Instagram" style={{ width: '25px', height: '25px', cursor: 'pointer' }} />
            <img src={iconUser} alt="WhatsApp" style={{ width: '25px', height: '25px', cursor: 'pointer' }} />
          </div>
          <p style={{ fontSize: '13px', color: 'white', margin: '0', textAlign: 'right', fontFamily: 'Poppins-Regular' }}>© 2026 Sweet Cream Rose. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Productos;