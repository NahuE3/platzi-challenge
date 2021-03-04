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

const Order = () => {
  //Estado que guarda el valor y validacion del input
  const [code, setCode] = useState({ success: null, value: '' });

  //Expresiones regulares usadas para validar los caracteres ingresados en el input
  const expressions = {
    code: /^\d{10,20}$/, // 10 a 20 numeros.
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
          type="number"
          name="code"
          placeholder="01234567890123456789"
          label="Codigo de seguimiento"
          state={code}
          manageState={setCode}
          regExpression={expressions.code}
          errorMessage={'La longitud debe ser entre 10 y 20 digitos.'}
        />
        <Link to={`/order:${code}`}>
          <ButtonDefault
            primary
            width="100%"
            height="48px"
            margin="20px 0 16px"
          >
            Seguir envio
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
export default Order;
