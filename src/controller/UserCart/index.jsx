import React from 'react';

const UserCart = ({ user }) => {
  const handlerDeleteProduct = () => {

  };
  return (
    <div>
      {user.cart.map((product) => (
        <React.Fragment key={product.id}>
          <p>{product.name}</p>
          <p>{product.count}</p>
          <button type='button'>Remover</button>
          <button type='button'>Agragar</button>
          <button type='button'>Eliminar</button>
        </React.Fragment>
      ))}
    </div>
  );
}

export default UserCart;