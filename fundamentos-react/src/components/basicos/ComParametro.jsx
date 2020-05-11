import React from 'react';

export default function (props) {
  const situacao = props.nota >= 7 ? 'aprovado' : 'reprovado';

  return (
    <div>
      <h2>
        {props.titulo}, <strong>{props.aluno}!</strong>
      </h2>
      <h3>
        Sua nota foi {props.nota}. Você foi <strong>{situacao}</strong>
      </h3>
    </div>
  );
}
