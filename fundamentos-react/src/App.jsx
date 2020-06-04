import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import DesafioRepeticao from './components/repeticao/DesafioRepeticao';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Megasena from './components/megasena/Megasena';

import './App.css';

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      
      <Card titulo="#13 - Desafio da Megasena" color="#77ba77">
        <Megasena qtd={8}/>
      </Card>
      
      <Card titulo="#12 - Contador" color="#C47F70">
        <Contador numeroInicial={10} />
      </Card>

      <Card titulo="#11 - Componente controlado" color="#de9fe3">
        <Input />
      </Card>

      <Card titulo="#10 - Comunicação indireta" color="#84aff5">
        <IndiretaPai />
      </Card>

      <Card titulo="#09 - Comunicação direta" color="#36bf43">
        <DiretaPai />
      </Card>

      <Card titulo="#08 - Renderização condicional" color="#9c947e">
        <ParOuImpar numero={20} />
        <UsuarioInfo usuario={{ nome: 'Alan' }} />
        <UsuarioInfo />
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#ff455e">
        <DesafioRepeticao />
      </Card>

      <Card titulo="#06 - Repetição" color="#d69e42">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - Componente com filhos" color="#9432a8">
        <Familia sobrenome="da Silva">
          <FamiliaMembro nome="João" />
          <FamiliaMembro nome="Maria" />
          <FamiliaMembro nome="Joaquina" />
        </Familia>
      </Card>

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
