import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../context';
import { logoutUser } from '../../../context/actions';

const Logout = () => {
  const { dispatch } = useStateValue();
  return (
    <div style={{ display: 'grid', justifyItems: 'center', padding: '50px', gap: '25px' }}>
      <h1>Estas apunto de cerrar sesión</h1>
      <button type='button' onClick={() => logoutUser({ dispatch })}>Cerrar sesión</button>
      <Link to='/'>Cancelar</Link>
    </div>
  );
}

export default Logout;