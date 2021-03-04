import React, { useState } from 'react';
import useForm from './../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { Login, Register } from '../../components/containers';
import { loginUser, registerUser } from '../../context/actions';

const UserForm = () => {
  const { pathname } = useLocation();
  const [error, setError] = useState();
  const { loginUser, registerUser } = useForm();

  return (
    <section>
      {pathname === '/login' && (
        <Login onSubmit={loginUser} error={error} />
      )}
      {pathname === '/register' && (
        <Register onSubmit={registerUser} error={error} />
      )}
    </section>
  );
};

export default UserForm;
