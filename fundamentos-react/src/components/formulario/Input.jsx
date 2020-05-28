import React, { useState } from 'react';
import './Input.css';

export default (props) => {
  const [valor, setValor] = useState('Digite algo aqui');
  
  function quandoMudar(event) {
    setValor(event.target.value);
  }

  function quandoClicar(){
    setValor('');
  }

  return (
    <div className="Input">
      <h2>{valor === 'Digite algo aqui' ? '' : valor}</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <input value={valor} onChange={quandoMudar} onClick={quandoClicar}/>  {/* Componente controlado */}
        <input value={valor} readOnly />  {/* Componente apenas para leitura */}
        <input value={undefined} />  {/* Componente sem controle */}
      </div>
    </div>
  );
};
