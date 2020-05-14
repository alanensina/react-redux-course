import React from 'react';

export default (props) => {
  const {min, max} = props;

  const valorSorteado = parseInt(Math.random() * (max-min)) + min;
  return (
    <div>
      <h2>
        Foi sorteado um valor entre {min} e {max}, o número sorteado
        foi: {valorSorteado}!
      </h2>
    </div>
  );
};
