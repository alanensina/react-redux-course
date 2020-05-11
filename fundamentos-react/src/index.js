import ReactDOM from 'react-dom';
import React from 'react';

import './index.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

ReactDOM.render(
  <div>
    <Primeiro/>
    <ComParametro
    titulo="Olá !"
    aluno='Alan Ensina'
    nota='10'
    />
  </div>,
  document.getElementById('root')
);