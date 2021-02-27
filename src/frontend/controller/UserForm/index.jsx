import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Login, Register } from '../../components/containers';
import { loginUser, registerUser } from '../../context/actions';

const UserForm = () => {
  const { pathname } = useLocation();
  const [error, setError] = useState();
  const onSubmit = (data) => {
    const user = { ...data };
    if (pathname === '/login') {
      loginUser({ ...user });
      return;
    }

    if (pathname === '/register') {
      registerUser({ ...user });
      return;
    }

    setError(true);
  };

  return (
    <section>
      {pathname === '/login' && (
        <Login onSubmit={onSubmit} error={error} />
      )}
      {pathname === '/register' && (
        <Register onSubmit={onSubmit} error={error} />
      )}
    </section>
  );
};

export default UserForm;
