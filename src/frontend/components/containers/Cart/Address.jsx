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
//Import de media querys.
import { media } from '../../../const/mediaQuerys';
import useLanguage from '../../../hooks/useLanguage';

const Address = () => {
  //Estado que guarda el valor y validacion del input
  const [address, setAddress] = useState({ success: null, value: '' });
  const [barrio, setBarrio] = useState({ success: null, value: '' });
  const [comment, setComment] = useState({ success: null, value: '' });
  const { getText } = useLanguage();

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
      title="Envio"
      subtitle="Completa los datos para concretar tu pedido"
      center={true}
    >
      <StyledCont head>
        <h2>{getText('checkout_address.title')}</h2>
      </StyledCont>

      <StyledSignUpContainer>
        <InputDefault
          tipo="text"
          name="address"
          placeholder="Avenida Siempre Viva"
          label={getText('checkout_address.address')}
          state={address}
          manageState={setAddress}
          regExpression={expressions.user}
          errorMessage={getText('register.user_error')}
        />
        <InputDefault
          tipo="text"
          name="barrio"
          placeholder={getText('checkout_address.city')}
          label={getText('checkout_address.city')}
          state={barrio}
          manageState={setBarrio}
          regExpression={expressions.user}
          errorMessage={getText('register.user_error')}
        />
        <InputDefault
          type="number"
          name="comment"
          placeholder={getText('checkout_address.comment')}
          label={getText('checkout_address.comment')}
          state={comment}
          manageState={setComment}
          regExpression={expressions.postal}
          errorMessage={getText('register.password_error')}
        />
        <Link to="/checkout/payment">
          <ButtonDefault
            primary
            width="100%"
            height="48px"
            margin="20px 0 16px"
          >
            {getText('checkout_address.button')}
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
export default Address;
