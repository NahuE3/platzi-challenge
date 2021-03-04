//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
//Import de iconos.
import {
  HiOutlineViewGrid,
  HiOutlineBookOpen,
  HiOutlineHeart,
  HiOutlineCalendar,
  HiOutlineDotsHorizontal,
} from 'react-icons/hi';
//Import de componentes.
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const Tabbar = () => {
  return (
    <StyledWrapper>
      <NavLink to="/home">
        <StyledButton>
          <HiOutlineViewGrid size="2.4rem" />
          <span>Inicio</span>
        </StyledButton>
      </NavLink>
      <NavLink to="/recipes">
        <StyledButton>
          <HiOutlineBookOpen size="2.4rem" />
          <span>Recetas</span>
        </StyledButton>
      </NavLink>
      <NavLink to="/week">
        <StyledButton>
          <HiOutlineCalendar size="2.4rem" />
          <span>Menu</span>
        </StyledButton>
      </NavLink>
      <NavLink to="/wishlist">
        <StyledButton>
          <HiOutlineHeart size="2.4rem" />
          <span>Favoritos</span>
        </StyledButton>
      </NavLink>
      <NavLink to="/config">
        <StyledButton>
          <HiOutlineDotsHorizontal size="2.4rem" />
          <span>Mas</span>
        </StyledButton>
      </NavLink>
    </StyledWrapper>
  );
};

// =================== ESTILOS CSS ===================
const StyledWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  background-color: var(--white-color);
  width: 100vw;
  height: 64px;
  padding: 0 10px;
  z-index: 90;
  border-top: 2px solid var(--light-gray);

  ${media.tab} {
    display: none;
  }

  .active {
    color: var(--first-color);
  }
`;
const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: var(--xsmall-font-size);
  font-weight: 400;

  span {
    color: var(--black-color) !important;
    margin-top: 4px;
  }
`;

export default Tabbar;
