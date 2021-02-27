import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../context';
import {
  changeTheme,
  addToCart,
  removeToCart,
  addToFavorite,
  removeToFavorite,
} from '../../../context/actions';
import Currency from '../../Currency/Currency';

const Home = () => {
  const { theme, products, recipes, cart, wishList, dispatch } = useStateValue();
  const newTheme = theme === 'light' ? 'dark' : 'light';
  const [currency, setCurrency] = useState({ format: 'en-US', currency: 'USD'});

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        alignItems: 'center',
        gap: '25px',
      }}
    >
      <h1 style={{ gridColumnEnd: 'span 2' }}>{`Home ${theme}`}</h1>
      <button
        type="button"
        onClick={() => changeTheme({ theme: newTheme, dispatch })}
      >
        Change theme
      </button>
      <Link to="/cart">{`Carrito: ${cart?.size || 0}`}</Link>
      <Link to="/favorites">{`Favoritos: ${wishList?.size || 0}`}</Link>
      <div style={{ gridColumnEnd: 'span 5', display: 'flex', justifyContent: 'space-between' }}>
        <form>
          <label htmlFor="Searcher">
            <p>Buscador</p>
            <input id="Searcher" name="searcher" type="text" />
          </label>
        </form>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type='button' onClick={() => setCurrency({ format: 'es-MX', currency: 'MXN' })}>MXN</button>
          <button type='button' onClick={() => setCurrency({ format: 'es-CO', currency: 'COP' })}>CO</button>
          <button type='button' onClick={() => setCurrency({ format: 'en-US', currency: 'USD' })}>USD</button>
        </div>
      </div>
      <div style={{ gridColumnEnd: 'span 5' }}>
        <h2>Productos</h2>
      </div>
      {products?.map((product) => (
        <div
          key={product.id}
          style={{ background: '#f5f5f5f5', padding: '20px', width: '150px' }}
        >
          <p>{product.name}</p>
          <Currency price={product.price} currency={currency} />
          {/* <p>{product.price}</p> */}
          <button type="button" onClick={() => addToCart({ cart, product, dispatch })}>
            Agragar al carrito
          </button>
          {wishList.products.find((item) => item.id === product.id) && (
            <button
              type="button"
              onClick={() => removeToFavorite({ wishList, product, dispatch })}
            >
              Eliminar de favoritos
            </button>
          )}
          {!wishList.products.find((item) => item.id === product.id) && (
            <button
              type="button"
              onClick={() => addToFavorite({ wishList, product, dispatch })}
            >
              Agragar a favoritos
            </button>
          )}
        </div>
      ))}
      <div style={{ gridColumnEnd: 'span 5' }}>
        <h2>Recetas</h2>
      </div>
      {recipes?.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            background: '#044C04',
            padding: '20px',
            width: '150px',
            color: '#fff',
          }}
        >
          <p>{recipe.name}</p>
          <p>{recipe.country}</p>
          <button type="button" onClick={() => addToCart({ cart, recipe, dispatch })}>
            Agragar al carrito
          </button>
          {wishList?.recipes.find((item) => item.id === recipe.id) && (
            <button
              type="button"
              onClick={() => removeToFavorite({ wishList, recipe, dispatch })}
            >
              Eliminar de favoritos
            </button>
          )}
          {!wishList?.recipes.find((item) => item.id === recipe.id) && (
            <button
              type="button"
              onClick={() => addToFavorite({ wishList, recipe, dispatch })}
            >
              Agragar a favoritos
            </button>
          )}
        </div>
      ))}
      {cart?.size > 0 && (
        <div style={{ gridColumnEnd: 'span 5' }}>
          <h2>Carrito</h2>
        </div>
      )}
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
          <p>{count}</p>
          <button type="button" onClick={() => removeToCart({ cart, product, dispatch })}>
            Eliminar
          </button>
        </div>
      ))}
      {wishList?.size > 0 && (
        <div style={{ gridColumnEnd: 'span 5' }}>
          <h2>Favoritos</h2>
        </div>
      )}
      {wishList?.products?.map((product) => (
        <div
          key={product.name}
          style={{
            background: '#8C0404',
            color: '#fff',
            padding: '20px',
            width: '150px',
          }}
        >
          <p>{product.name}</p>
          <button type="button" onClick={() => addToCart({ cart, product, dispatch })}>
            Agragar al carrito
          </button>
          <button
            type="button"
            onClick={() => removeToFavorite({ wishList, product, dispatch })}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
