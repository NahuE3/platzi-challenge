import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTheme, addToCart, removeToCart, addToFavorite, removeToFavorite } from '../../../redux/actions'

const products = [
  {
    id: '1A',
    name: 'producto 1',
    price: 500,
  },
  {
    id: '2A',
    name: 'producto 2',
    price: 200,
  },
  {
    id: '3A',
    name: 'producto 3',
    price: 400,
  },
  {
    id: '4A',
    name: 'producto 4',
    price: 300,
  },
  {
    id: '5A',
    name: 'producto 5',
    price: 100,
  },
];

const Home = ({ theme, cart, wishList, setTheme, addToCart, removeToCart, addToFavorite, removeToFavorite }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', alignItems: 'center' }}>
    <h1 style={{ gridColumnEnd: 'span 2' }}>{`Home ${theme}`}</h1>
    <button type='button' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change theme</button>
    <Link to='/cart'>{`Carrito: ${cart?.size || 0}`}</Link>
    <Link to='/cart'>{`Favoritos: ${wishList?.length || 0}`}</Link>
    {products.map((product) => (
      <div
        key={product.id}
        style={{ background: '#f5f5f5f5', padding: '20px', width: '150px' }}
      >
        <p>{product.name}</p>
        <p>{product.price}</p>
        <button type="button" onClick={() => addToCart({ cart, product })}>Agragar al carrito</button>
        {wishList.find((item) => item.id === product.id) && (
          <button type="button" onClick={() => removeToFavorite({ wishList, product })}>Eliminar de favoritos</button>
        )}
        {!wishList.find((item) => item.id === product.id) && (
          <button type="button" onClick={() => addToFavorite({ wishList, product })}>Agragar a favoritos</button>
        )}
      </div>
    ))}
    {cart?.items?.map(({ count, product }) => (
      <div key={product.name} style={{ background: '#041454', color: '#fff', padding: '20px', width: '150px' }}>
        <p>{product.name}</p>
        <p>{count}</p>
        <button type='button' onClick={() => removeToCart({ cart, product })}>Eliminar</button>
      </div>
    ))}
    {wishList?.map((product) => (
      <div key={product.name} style={{ background: '#8C0404', color: '#fff', padding: '20px', width: '150px' }}>
        <p>{product.name}</p>
        <button type="button" onClick={() => addToCart({ cart, product })}>Agragar al carrito</button>
        <button type='button' onClick={() => removeToFavorite({ wishList, product })}>Eliminar</button>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  theme: state.theme,
  cart: state.cart,
  wishList: state.wishList,
});

const mapDispatchToProps = {
  setTheme,
  addToCart,
  removeToCart,
  addToFavorite,
  removeToFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
