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
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const Checkout = () => {
  //Estado que guarda el valor y validacion del input
  const [firstName, setFirstName] = useState({ success: null, value: '' });
  const [lastName, setLastName] = useState({ success: null, value: '' });
  const [phone, setPhone] = useState({ success: null, value: '' });
  const [email, setEmail] = useState({ success: null, value: '' });
  const [postal, setPostal] = useState({ success: null, value: '' });

  //Expresiones regulares usadas para validar los caracteres ingresados en el input
  const expressions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/, // 7 a 14 numeros.
    postal: /^\d{4,10}$/, // 4 a 10 numeros.
  };

  return (
    <Layout
      title="Checkout"
      subtitle="Completa los datos para concretar tu pedido"
      center={true}
    >
      <StyledCont head>
        <h2>Datos del comprador</h2>
      </StyledCont>

      <StyledSignUpContainer>
        <InputDefault
          tipo="text"
          name="firstName"
          placeholder="Nombre"
          label="Nombre"
          state={firstName}
          manageState={setFirstName}
          regExpression={expressions.name}
          errorMessage={'Solo se permiten letras, espacios y acentos.'}
        />
        <InputDefault
          tipo="text"
          name="lastName"
          placeholder="Apellido"
          label="Apellido"
          state={lastName}
          manageState={setLastName}
          regExpression={expressions.name}
          errorMessage={'Solo se permiten letras, espacios y acentos.'}
        />
        <InputDefault
          tipo="number"
          name="phone"
          placeholder="0123 456789"
          label="Telefono"
          state={phone}
          manageState={setPhone}
          regExpression={expressions.phone}
          errorMessage={'La longitud debe ser entre 7 y 14 numeros.'}
        />
        <InputDefault
          tipo="text"
          name="email"
          placeholder="ejemplo@email.com"
          label="Email"
          state={email}
          manageState={setEmail}
          regExpression={expressions.email}
          errorMessage={'El formato ingresado no pertenece a un email.'}
        />
        <InputDefault
          type="number"
          name="postal_code"
          placeholder="0123"
          label="Codigo postal"
          state={postal}
          manageState={setPostal}
          regExpression={expressions.postal}
          errorMessage={'La longitud debe ser entre 4 y 10 digitos.'}
        />
        <Link to="/checkout/address">
          <ButtonDefault
            primary
            width="100%"
            height="48px"
            margin="20px 0 16px"
          >
            Continuar
          </ButtonDefault>
        </Link>
      </StyledSignUpContainer>
    </Layout>
  );
};

// =================== ESTILOS CSS ===================
const StyledSignUpContainer = styled.div`
  ${media.mobile} {
    max-width: 400px;
    width: 100%;
  }
  ${media.tab} {
    width: 400px;
  }
`;
const StyledCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 26px;
  margin: ${(props) => (props.head ? '2rem 0 1rem' : 'none')};

  ${media.tab} {
    margin: ${(props) => (props.head ? '4rem 0 2rem' : 'none')};
  }
`;
export default Checkout;
