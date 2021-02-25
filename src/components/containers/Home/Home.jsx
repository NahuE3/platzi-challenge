import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTheme, addToCart, deleteToCart } from '../../../redux/actions'

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

const Home = ({ theme, cart, setTheme, addToCart, deleteToCart }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', alignItems: 'center' }}>
    <h1 style={{ gridColumnEnd: 'span 3' }}>{`Home ${theme}`}</h1>
    <button type='button' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change theme</button>
    <Link to='/cart'>{`Carrito: ${cart.size || 0}`}</Link>
    {products.map((product) => (
      <div
        key={product.id}
        style={{ background: '#f5f5f5f5', padding: '20px', width: '150px' }}
      >
        <p>{product.name}</p>
        <p>{product.price}</p>
        <button type="button" onClick={() => addToCart({ cart, product })}>Agragar al carrito</button>
      </div>
    ))}
    {cart?.items?.map(({ count, product }) => (
      <div key={product.name} style={{ background: '#041454', color: '#fff', padding: '20px', width: '150px' }}>
        <p>{product.name}</p>
        <p>{count}</p>
        <button type='button' onClick={() => deleteToCart({ cart, product })}>Eliminar</button>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  theme: state.theme,
  cart: state.cart,
});

const mapDispatchToProps = {
  setTheme,
  addToCart,
  deleteToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
