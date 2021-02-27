import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = ({ onSubmit, error }) => {
  const { handleSubmit, register, errors } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='EmailAddres'>
        <p>
          <span>Email</span>
        </p>
        <input
          type='text'
          name='email'
          id='EmailAddres'
          placeholder='Digita tu correo electronico'
          ref={register({
            required: 'Campo requerido',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Correo no valido',
            },
          })}
        />
        {errors?.email && <span>{errors?.email?.message}</span>}
      </label>
      <label htmlFor='Password'>
        <p>
          <span>Password</span>
        </p>
        <input
          id='Password'
          type='password'
          name='password'
          placeholder='Digita tu contraseña'
          ref={register({
            required: 'Campo requerido',
          })}
        />
        {errors?.password && (
          <span>
            {errors?.password?.message}
          </span>
        )}
      </label>
      <button
        type='submit'
        disabled={(errors.password || errors.email) && true}
      >
        Continuar
      </button>
      {error && (
        <p>Error!! Por favor revisa tu correo y contraseña</p>
      )}
      <Link to='/register'>
        ¿No tienes cuenta?
      </Link>
    </form>
  );
};

export default Login;
