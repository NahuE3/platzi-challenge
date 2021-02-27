import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setTheme,
  addToCart,
  removeToCart,
  addToFavorite,
  removeToFavorite,
} from '../../../redux/actions';

const Home = ({
  theme,
  products,
  recipes,
  cart,
  wishList,
  setTheme,
  addToCart,
  removeToCart,
  addToFavorite,
  removeToFavorite,
}) => (
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
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Change theme
    </button>
    <Link to="/cart">{`Carrito: ${cart?.size || 0}`}</Link>
    <Link to="/favorites">{`Favoritos: ${wishList?.size || 0}`}</Link>
    <div style={{ gridColumnEnd: 'span 5' }}>
      <form>
        <label htmlFor="Searcher">
          <p>Buscador</p>
          <input id="Searcher" name="searcher" type="text" />
        </label>
      </form>
    </div>
    <div style={{ gridColumnEnd: 'span 5' }}>
      <h2>Productos</h2>
    </div>
    {products.map((product) => (
      <div
        key={product.id}
        style={{ background: '#f5f5f5f5', padding: '20px', width: '150px' }}
      >
        <p>{product.name}</p>
        <p>{product.price}</p>
        <button type="button" onClick={() => addToCart({ cart, product })}>
          Agragar al carrito
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
    <div style={{ gridColumnEnd: 'span 5' }}>
      <h2>Recetas</h2>
    </div>
    {recipes.map((recipe) => (
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
        <button type="button" onClick={() => addToCart({ cart, recipe })}>Agragar al carrito</button>
        {wishList?.recipes.find((item) => item.id === recipe.id) && (
          <button type="button" onClick={() => removeToFavorite({ wishList, recipe })}>Eliminar de favoritos</button>
        )}
        {!wishList?.recipes.find((item) => item.id === recipe.id) && (
          <button type="button" onClick={() => addToFavorite({ wishList, recipe })}>Agragar a favoritos</button>
        )}
      </div>
    ))}
    {cart.size > 0 && (
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
        <button type="button" onClick={() => removeToCart({ cart, product })}>
          Eliminar
        </button>
      </div>
    ))}
    {wishList.size > 0 && (
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
        <button type="button" onClick={() => addToCart({ cart, product })}>
          Agragar al carrito
        </button>
        <button
          type="button"
          onClick={() => removeToFavorite({ wishList, product })}
        >
          Eliminar
        </button>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  theme: state.theme,
  cart: state.cart,
  wishList: state.wishList,
  products: state.products,
  recipes: state.recipes,
});

const mapDispatchToProps = {
  setTheme,
  addToCart,
  removeToCart,
  addToFavorite,
  removeToFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
