//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import styled from 'styled-components';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const Content = ({ center, children }) => {
  return <StyledContainer center={center}>{children}</StyledContainer>;
};

// =================== ESTILOS CSS ===================
const StyledContainer = styled.div`
  max-width: 100vw;
  padding: 56px 16px 76px;

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: ${props => props.center ? 'center' : ''};
    padding: 56px 16px 76px;
  }
  ${media.tab} {
    padding: 56px 10% 50px;
  }
`;

export default Content;
