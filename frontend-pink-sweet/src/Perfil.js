
import React from 'react';
import './index.css';

function Perfil() {
  return (
    <div className="perfil-container">
      <header className="perfil-header">
        <h2>Pink Sweet</h2>
        <nav>
          <a href="/">Inicio</a>
          <a href="/perfil">Perfil</a>
          <a href="/login">Cerrar Sesión</a>
        </nav>
      </header>
      <h1>Perfil de Usuario</h1>
      <p>Bienvenido a tu perfil. Aquí podrás ver tus pedidos, favoritos y configurar tu cuenta.</p>
    </div>

  );
}

export default Perfil;
