//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import styled from 'styled-components';
//Import de layout.
import Layout from '../../layout/Layout';
//Import de componentes.
import ButtonDefault from '../../shared/buttons/ButtonDefault';

const userLoged = false;

const Week = () => {
  return (
    <Layout
      title="Programacion"
      subtitle="Crea un plan de comidas a tu gusto para toda la semana!"
    >
      <h1>Programacion Semanal</h1>
      {userLoged ? (
        <div></div>
      ) : (
        <>
          <ButtonDefault primary width="100%" height="48px" margin="12px 0 0">
            Iniciar sesión
          </ButtonDefault>
          <StyledSeparator></StyledSeparator>

          <h3>¿Que es la Programacion semanal?</h3>
          <StyledParrafo>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quas
            aliquam adipisci nisi qui suscipit voluptates ab dolorum
            perspiciatis est quidem repellat, facere, nemo sed nam numquam
            repellendus voluptatum quisquam? Soluta maiores quo consequatur.            
          </StyledParrafo>
          <p>¡Inicia sesión y aprovecha al maximo todo el potencial de Foody!</p>
        </>
      )}
    </Layout>
  );
};

// =================== ESTILOS CSS ===================
const StyledParrafo = styled.p`
  margin: 10px 0;
`;
const StyledSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--light-gray);
  margin: 20px 0;
`;

export default Week;
