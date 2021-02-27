import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../../context';
import { addToCart, removeToCart, addToFavorite, removeToFavorite, deleteToCart } from '../../../context/actions';

const Cart = () => {
  const { cart, wishList } = useStateValue();
  const history = useHistory();
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      alignItems: 'center',
      gap: '25px',
    }}>
      <button type='button' onClick={() => history.goBack()}>Go back</button>
      <h1 style={{ gridColumnEnd: 'span 4' }}>{`Carrito ${cart.size}`}</h1>
      {cart?.products?.map(({ count, product }) => (
        <div
          key={product.name}
          style={{
            background: '#041454',
            color: '#fff',
            padding: '20px',
            width: '150px',
          }}
        >
          <p>{product.name}</p>
          <p>{product.stock}</p>
          <p>{count}</p>
          <button type='button' disabled={count <= 1} onClick={() => removeToCart({ cart, product })}>
            Remover
          </button>
          <button type='button' disabled={count >= product.stock} onClick={() => addToCart({ cart, product })}>
            Agregar
          </button>
          <button type='button' onClick={() => deleteToCart({ cart, product })}>
            Eliminar
          </button>
          {wishList.products.find((item) => item.id === product.id) && (
          <button
            type="button"
            onClick={() => removeToFavorite({ wishList, product })}
          >
            Eliminar de favoritos
          </button>
        )}
        {!wishList.products.find((item) => item.id === product.id) && (
          <button
            type="button"
            onClick={() => addToFavorite({ wishList, product })}
          >
            Agragar a favoritos
          </button>
        )}
        </div>
      ))}
      {cart?.recipes?.map(({ count, recipe }) => (
        <div
          key={recipe.name}
          style={{
            background: '#044C04',
            color: '#fff',
            padding: '20px',
            width: '150px',
          }}
        >
          <p>{recipe.name}</p>
          <p>{recipe.country}</p>
          <p>{count}</p>
          <button type='button' disabled={count <= 1} onClick={() => removeToCart({ cart, recipe })}>
            Remover
          </button>
          <button type='button' onClick={() => addToCart({ cart, recipe })}>
            Agregar
          </button>
          <button type='button' onClick={() => deleteToCart({ cart, recipe })}>
            Eliminar
          </button>
          {wishList.recipes.find((item) => item.id === recipe.id) && (
          <button
            type="button"
            onClick={() => removeToFavorite({ wishList, recipe })}
          >
            Eliminar de favoritos
          </button>
        )}
        {!wishList.recipes.find((item) => item.id === recipe.id) && (
          <button
            type="button"
            onClick={() => addToFavorite({ wishList, recipe })}
          >
            Agragar a favoritos
          </button>
        )}
        </div>
      ))}
    </div>
  )
};

export default Cart;