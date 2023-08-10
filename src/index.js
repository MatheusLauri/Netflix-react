import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';


import Cabecalho from './pagina-principal/index'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      
          <Route path='/' element={<Cabecalho />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

