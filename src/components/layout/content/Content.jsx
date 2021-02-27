//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import styled from 'styled-components';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const Content = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

// =================== ESTILOS CSS ===================
const StyledContainer = styled.div`
  width: 100vw;
  padding: 76px 20px 0;

  ${media.tab} {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 76px 30px 0;
  }
`;

export default Content;
