//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//Import de layout.
import Layout from '../../layout/Layout';
//Import de componentes.
import InputDefault from '../../shared/inputs/InputDefault';
import ButtonDefault from '../../shared/buttons/ButtonDefault';
import ButtonLogin from '../../shared/buttons/ButtonLogin';
import SocialMediaLogin from './SocialMediaLogin';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';
import useForm from '../../../hooks/useForm';
import useLanguage from '../../../hooks/useLanguage';

const Login = () => {
  //Estado que guarda el valor y validacion del input
  const [email, setEmail] = useState({ success: null, value: '' });
  const [password, setPassword] = useState({ success: null, value: '' });
  const { loginUser } = useForm();
  const { getText } = useLanguage();

  //Expresiones regulares usadas para validar los caracteres ingresados en el input
  const expressions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  return (
    <Layout
      title="Iniciar Sesion"
      subtitle="Inicia sesion para aprovechar al maximo todo el potencial de Foody+"
      center={true}
      nav="no"
    >
      <StyledCont head>
        <h2>{getText('login.title')}</h2>
      </StyledCont>

      <StyledLoginContainer>
        <InputDefault
          tipo="text"
          name="email"
          placeholder={getText('register.email_example')}
          label={getText('login.email')}
          state={email}
          manageState={setEmail}
          regExpression={expressions.email}
          errorMessage={getText('register.email_error')}
        />

        <InputDefault
          type="password"
          name="password"
          placeholder={getText('login.password')}
          label={getText('login.password')}
          state={password}
          manageState={setPassword}
          regExpression={expressions.password}
          errorMessage={getText('login.password_error')}
        />
        <StyledForgot>
          <Link to="/forgot">{getText('login.forgot')}</Link>
        </StyledForgot>

        <ButtonDefault
          primary
          width="100%"
          height="48px"
          margin="12px 0 16px"
          disabled={!email.success || !password.success}
          onClick={() =>
            loginUser({ email: email.value, password: password.value })
          }
        >
          {getText('login.button')}
        </ButtonDefault>
      </StyledLoginContainer>

      <StyledSeparator>
        <div></div>
        {/* <span>{innerWidth < 700 ? 'O' : 'O continuar con'}</span> */}
        <div></div>
      </StyledSeparator>

      <SocialMediaLogin />

      <StyledSignUp>
        <span>{getText('login.dont_user')}</span>
        <Link to="/signup">{getText('login.register')}</Link>
      </StyledSignUp>
    </Layout>
  );
};

// =================== ESTILOS CSS ===================
const StyledLoginContainer = styled.div`
  ${media.mobile} {
    max-width: 400px;
    width: 100%;
  }
  ${media.tab} {
    width: 400px;
  }
`;
const StyledButtonsContainer = styled.div`
  display: grid;
  margin-bottom: 2rem;

  ${media.mobile} {
    max-width: 400px;
    width: 100%;
  }

  ${media.tab} {
    margin-bottom: 8rem;
    width: 400px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
  }
`;
const StyledForgot = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 26px;
`;
const StyledCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 26px;
  margin: ${(props) => (props.head ? '1rem 0 1rem' : '')};

  ${media.tab} {
    margin: ${(props) => (props.head ? '4rem 0 2rem' : '')};
  }
`;
const StyledSignUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 200px;
  width: 100%;
  height: 26px;

  a {
    color: var(--first-color);
  }
`;
const StyledSeparator = styled.div`
  display: grid;
  grid-template-columns: 1fr 3rem 1fr;
  align-items: center;
  justify-items: center;
  max-width: 400px;
  width: 100%;
  height: 26px;

  span {
    font-size: var(--small-font-size);
  }
  div {
    width: 100%;
    height: 2px;
    background-color: var(--light-gray);
  }

  ${media.tab} {
    grid-template-columns: 1fr 12rem 1fr;
  }
`;

export default Login;
