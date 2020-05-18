import React from 'react';
import produtos from '../../data/produtos';
import './DesafioRepeticao.css';

export default (props) => {
  const trs = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
        <td>{produto.id}</td>
        <td>{produto.produto}</td>
        <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos">
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Produto</td>
            <td>Preço</td>
          </tr>
        </thead>
        <tbody>{trs}</tbody>
      </table>
    </div>
  );
};
