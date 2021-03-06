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
//import Image from '../../../assets/images/ui/follow-order.svg';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const Order = () => {
  //Estado que guarda el valor y validacion del input
  const [code, setCode] = useState({ success: null, value: '' });

  //Expresiones regulares usadas para validar los caracteres ingresados en el input
  const expressions = {
    code: /^\d{10,10}$/, // 10 numeros.
  };

  return (
    <Layout
      title="Seguimiento"
      subtitle="Verifica el estado de tu pedido"
      center={true}
    >
      <StyledCont head>
        <h2>Seguimiento</h2>
      </StyledCont>

      <StyledSignUpContainer>
        <StyledImgSection>
           <StyledImg src="https://dl.dropboxusercontent.com/s/jwvd3t5h27fuqrw/6447%201.png?dl=0" alt="" />
        </StyledImgSection>

        <InputDefault
          type="number"
          name="code"
          placeholder="0123456789"
          label="Ingresar el codigo de seguimiento"
          state={code}
          manageState={setCode}
          regExpression={expressions.code}
          errorMessage={'La longitud debe ser de 10 digitos.'}
        />
        <Link to={`/order:${code.value}`}>
          <ButtonDefault
            primary
            width="100%"
            height="48px"
            margin="20px 0 16px"
          >
            Ver pedido
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
const StyledImgSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 200px;
  margin-bottom: 16px;
  overflow: hidden;
  border-radius: var(--normal-radius) var(--normal-radius) 0 0;

  ${media.tab} {
    height: 180px;
  }
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
export default Order;
