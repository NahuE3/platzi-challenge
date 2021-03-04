//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//Import de layout.
import Layout from '../../layout/Layout';
//Import de componentes.
import ButtonDefault from '../../shared/buttons/ButtonDefault';
import ButtonLogin from '../../shared/buttons/ButtonLogin';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const Address = () => {
  return (
    <Layout
      title="Pago"
      subtitle="Completa los datos para concretar tu pedido"
      center={true}
    >
      <StyledCont head>
        <h2>Metodo de pago</h2>
      </StyledCont>

      <StyledSignUpContainer>
        <ButtonLogin icon="Card" width="100%" margin="20px 0 16px">
          Continuar con Tarjeta Credito o Debito
        </ButtonLogin>
        <ButtonLogin icon="Paypal" width="100%" margin="20px 0 16px">
          Continuar con Paypal
        </ButtonLogin>
        <ButtonLogin icon="Bitcoin" width="100%" margin="20px 0 16px">
          Continuar con Criptomoneda
        </ButtonLogin>
        <Link to="/checkout/address">
          <ButtonDefault
            primary
            width="100%"
            height="48px"
            margin="20px 0 16px"
          >
            Volver
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
