import React from 'react';

export default (props) => {
  const callback = props.quandoClicar;
  const min = 0;
  const max = 100;

  const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
  const gerarNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(_) => {
          callback('Alan', gerarIdade(), gerarNerd());
        }}
      >
        Fornecer informações
      </button>
    </div>
  );
};
