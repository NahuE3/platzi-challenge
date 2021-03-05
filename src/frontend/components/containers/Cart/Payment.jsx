//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//Import de layout.
import Layout from '../../layout/Layout';
//Import de componentes.
import ButtonDefault from '../../shared/buttons/ButtonDefault';
import ButtonLogin from '../../shared/buttons/ButtonLogin';
import PayPalButton from '../../shared/buttons/ButtonPayPal';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const Address = () => {
  const [totalAmount, setTotalAmount] = useState('');

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    setTotalAmount(cartData.delivery + cartData.total);
  }, []);

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
        <PayPalButton total={totalAmount} />
        <Link to="/checkout/address">
          <ButtonDefault
            secondary
            width="100%"
            height="48px"
            margin="20px 0 16px"
          >
            Regresar
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
