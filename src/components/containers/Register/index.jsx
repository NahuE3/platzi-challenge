import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = ({ onSubmit, error }) => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <form className='Form' onSubmit={handleSubmit(onSubmit)}>
      <p>Campos requeridos *</p>
      <div>
        <label htmlFor='UserName'>
          <p>
            <span>Nombres *</span>
          </p>
          <input
            type='text'
            name='name'
            id='UserName'
            placeholder='Digita tu nombre'
            ref={register({
              required: 'Campo requerido',
            })}
          />
          {errors?.name && <span>{errors?.name?.message}</span>}
        </label>
        <label htmlFor='UserLastName'>
          <p>
            <span>Apellidos *</span>
          </p>
          <input
            type='text'
            name='lastname'
            id='UserLastname'
            placeholder='Digita tus apellidos'
            ref={register({
              required: 'Campo requerido',
            })}
          />
          {errors?.name && <span>{errors?.name?.message}</span>}
        </label>
        <label htmlFor='UserNickname'>
          <p>
            <span>Nombre de usuario *</span>
          </p>
          <input
            type='text'
            name='nickname'
            id='UserNickname'
            placeholder='Digita un nombre de usuario'
            ref={register({
              required: 'Campo requerido',
            })}
          />
          {errors?.nickname && <span>{errors?.nickname?.message}</span>}
        </label>
        <label htmlFor='EmailAddres'>
          <p>
            <span>Correo *</span>
          </p>
          <input
            type='text'
            name='email'
            id='EmailAddres'
            placeholder='Digita un correo electronico'
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
            <span>Contraseña *</span>
          </p>
          <input
            id='Password'
            type='password'
            name='password'
            placeholder='Digita una contraseña'
            ref={register({
              required: 'Campo requerido',
              minLength: {
                value: 8,
                message: 'La contraseña debe de tener un minimo de 8 caracteres',
              },
            })}
          />
          {errors?.password && <span>{errors?.password?.message}</span>}
        </label>
      </div>

      <div>
        <label htmlFor='UserAddress'>
          <p>
            <span>Dirección</span>
          </p>
          <input
            type='text'
            name='address'
            id='UserAddress'
            placeholder='Digita tu dirección'
            ref={register()}
          />
          {errors?.address && <span>{errors?.address?.message}</span>}
        </label>
        <label htmlFor='UserZIP'>
          <p>
            <span>Código Postal</span>
          </p>
          <input
            type='text'
            name='zip'
            id='UserZIP'
            placeholder='Digita tu codigo postal'
            ref={register()}
          />
          {errors?.zip && <span>{errors?.zip?.message}</span>}
        </label>
        <label htmlFor='UserDNI'>
          <p>
            <span>DNI</span>
          </p>
          <input
            type='text'
            name='dni'
            id='UserDNI'
            placeholder='Digita tu dni'
            ref={register()}
          />
          {errors?.dni && <span>{errors?.dni?.message}</span>}
        </label>
      </div>

      <button
        type='submit'
        disabled={(errors.name || errors.lastname || errors.nickname || errors.password || errors.email) && true}
      >
        Registrate
      </button>
      {error && (
        <p className='Form-error'>Error!! please check your email & password</p>
      )}
      <Link to="/login" className="Form__footer--link">
        ¿Tienes cuenta?
      </Link>
    </form>
  );
}

export default Register;