//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
//Import de iconos.
import {
  HiOutlineViewGrid,
  HiOutlineBookOpen,
  HiOutlineHeart,
  HiOutlineCalendar,
  HiOutlineUserCircle,
} from 'react-icons/hi';
//Import de componentes.
import ModalMore from '../../containers/Modal/ModalMore';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const Tabbar = () => {
  const [modalMore, setModalMore] = useState(false);

  const openModalMore = () => setModalMore(true);
  const closeModalMore = () => setModalMore(false);

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
          <span>Programacion</span>
        </StyledButton>
      </NavLink>
      <NavLink to="/wishlist">
        <StyledButton>
          <HiOutlineHeart size="2.4rem" />
          <span>Favoritos</span>
        </StyledButton>
      </NavLink>
      <StyledButton onClick={openModalMore}>
        <HiOutlineUserCircle size="2.4rem" />
        <span>Mas</span>
      </StyledButton>
      <ModalMore isOpen={modalMore} closeModal={closeModalMore} />
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
