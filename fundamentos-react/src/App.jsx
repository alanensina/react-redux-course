import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';

import './App.css'

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#04 - Desafio do número aleatório" color="#2874A6">
        <Aleatorio min={0} max={100} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#52BE80">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Componente com parâmetros" color="#CB4335">
        <ComParametro titulo="Olá" aluno="Alan Ensina" nota="10" />
      </Card>

      <Card titulo="#01 - Primeiro componente" color="#D4AC0D">
        <Primeiro />
      </Card>
    </div>
  </div>
);
