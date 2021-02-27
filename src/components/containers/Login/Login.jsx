//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState } from 'react';
import styled from 'styled-components';
//Import de layout.
import { Navbar, Content } from '../../layout';
//Import de componentes.
import InputDefault from '../../shared/inputs/InputDefault';
import ButtonDefault from '../../shared/buttons/ButtonDefault';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const Login = () => {
  //Estado que guarda el valor y validacion del input
  const [user, setUser] = useState({ success: null, value: '' });
  const [password, setPassword] = useState({ success: null, value: '' });

  //Expresiones regulares usadas para validar los caracteres ingresados en el input
  const expressions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  return (
    <>
      <Navbar />
      <Content>
        <h2>Iniciar Sesion</h2>
        <StyledLoginContainer>
          <InputDefault
            tipo="text"
            name="user"
            placeholder="@usuario"
            label="Nombre de usuario"
            state={user}
            manageState={setUser}
            regExpression={expressions.user}
            errorMessage={
              'Solo se permiten letras, numeros, guion y guion bajo.'
            }
          />

          <InputDefault
            type="password"
            name="password"
            placeholder="Contraseña"
            label="Contraseña"
            state={password}
            manageState={setPassword}
            regExpression={expressions.password}
            errorMessage={'La longitud debe ser de 4 a 12 digitos.'}
          />

          <ButtonDefault primary width="100%" margin="16px 0">
            Iniciar Sesion
          </ButtonDefault>
        </StyledLoginContainer>

        <h4>Iniciar Sesion con</h4>
        <StyledButtonsContainer>
          <ButtonDefault width="100%" margin="16px 0 0">
            Facebook
          </ButtonDefault>
          <ButtonDefault width="100%" margin="16px 0 0">
            Google
          </ButtonDefault>
        </StyledButtonsContainer>
      </Content>
    </>
  );
};

// =================== ESTILOS CSS ===================
const StyledLoginContainer = styled.div`
  ${media.tab} {
    width: 400px;
  }
`;
const StyledButtonsContainer = styled.div`
  display: grid;

  ${media.tab} {
    width: 400px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
  }
`;

export default Login;
