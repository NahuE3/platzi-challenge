import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Login, Register } from '../../components/containers';
import { loginUser, registerUser } from '../../redux/actions';

const UserForm = (props) => {
  const { pathname } = useLocation();
  const [error, setError] = useState();
  const onSubmit = (data) => {
    const user = { ...data };
    if (pathname === '/login') {
      props.loginUser({ ...user });
      return;
    }

    if (pathname === '/register') {
      props.registerUser({ ...user });
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

const mapDispatchToProps = {
  loginUser,
  registerUser,
};

export default connect(null, mapDispatchToProps)(UserForm);
