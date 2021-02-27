//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState } from 'react';
import styled from 'styled-components';
//Import de componentes.
import ButtonDefault from '../../shared/buttons/ButtonDefault';
import InputDefault from '../../shared/inputs/InputDefault';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const Navbar = () => {
  const [search, setSearch] = useState({ value: '', success: null });
  return (
    <StyledNavContainer>
      <StyledLogoSection>Foody+</StyledLogoSection>
      <div>
        {/* <InputDefault
          placeholder="Buscar..."
          state={search}
          manageState={setSearch}
        /> */}
      </div>
      <>
        <StyledButtonsSection>
          <ButtonDefault>Recetas</ButtonDefault>
          <ButtonDefault>Seguir Pedido</ButtonDefault>
          <ButtonDefault>Contacto</ButtonDefault>
          <ButtonDefault>Cart</ButtonDefault>
        </StyledButtonsSection>
        <StyledMenuSection>
          <ButtonDefault>Menu</ButtonDefault>
        </StyledMenuSection>
      </>
    </StyledNavContainer>
  );
};

// =================== ESTILOS CSS ===================
const StyledNavContainer = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 80px 1fr max-content;
  grid-gap: 16px;
  align-items: center;
  background-color: var(--light-gray);
  width: 100vw;
  height: 56px;
`;
const StyledLogoSection = styled.div`
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
`;
const StyledButtonsSection = styled.div`
  margin-right: 20px;
  display: none;

  ${media.tab} {
    display: block;
  }
`;
const StyledMenuSection = styled.div`
  margin-right: 20px;
  display: block;

  ${media.tab} {
    display: none;
  }
`;

export default Navbar;
