import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../../context';
import { addToCart, removeToFavorite } from '../../../context/actions';

const Favorites = () => {
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
      <h1 style={{ gridColumnEnd: 'span 4' }}>{`Favoritos ${wishList.size}`}</h1>
      {wishList?.products?.map((product) => (
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
          <p>{product.price}</p>
          <button type='button' onClick={() => addToCart({ cart, product })}>
            Agregar al carrito
          </button>
          {wishList?.products?.find((item) => item.id === product.id) && (
            <button
              type="button"
              onClick={() => removeToFavorite({ wishList, product })}
            >
              Eliminar de favoritos
            </button>
          )}
        </div>
      ))}
      {wishList?.recipes?.map((recipe) => (
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
          <button type='button' onClick={() => addToCart({ cart, recipe })}>
            Agregar al carrito
          </button>
          {wishList?.recipes?.find((item) => item.id === recipe.id) && (
            <button
              type="button"
              onClick={() => removeToFavorite({ wishList, recipe })}
            >
              Eliminar de favoritos
            </button>
          )}
        </div>
      ))}
    </div>
  )
};

export default Favorites;