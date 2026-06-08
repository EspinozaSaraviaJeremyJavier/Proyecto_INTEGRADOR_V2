import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Registro from './Registro';
import Perfil from './Perfil';
// Productos
import Productos from './Productos';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"          element={<App />} />
      <Route path="/login"     element={<Login />} />
      <Route path="/registro"  element={<Registro />} />
      <Route path="/perfil"    element={<Perfil />} />
      <Route path="/productos" element={<Productos />} />
    </Routes>
  </BrowserRouter>
);