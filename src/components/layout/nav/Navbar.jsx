//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
//Import de iconos.
import { HiOutlineShoppingCart, HiOutlineGlobeAlt } from 'react-icons/hi';
//Import de componentes.
import ModalLang from '../../containers/Modal/ModalLang';
import ButtonDefault from '../../shared/buttons/ButtonDefault';
import SearchBar from '../../shared/inputs/SearchBar';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const Navbar = ({ isSearch }) => {
  const [search, setSearch] = useState({ value: '', success: null });
  const [modalLang, setModalLang] = useState(false);

  const openModalLang = () => setModalLang(true);
  const closeModalLang = () => setModalLang(false);

  useEffect(() => {
    if (isSearch) {
      document.getElementById('SearchBar').focus();
    }
  }, []);

  return (
    <StyledNavContainer>
      <NavLink to="/home">
        <StyledLogoSection>Foody+</StyledLogoSection>
      </NavLink>
      <StyledCart>
        {isSearch ? (
          <SearchBar state={search} manageState={setSearch} id="SearchBar" />
        ) : (
          <Link to="/recipes">
            <SearchBar state={search} />
          </Link>
        )}
      </StyledCart>

      <StyledButtonsSection>
        <NavLink to="/home">
          <ButtonDefault>Inicio</ButtonDefault>
        </NavLink>
        <NavLink to="/recipes">
          <ButtonDefault>Recetas</ButtonDefault>
        </NavLink>
        <NavLink to="/week">
          <ButtonDefault>Calendario</ButtonDefault>
        </NavLink>
        <NavLink to="/wishlist">
          <ButtonDefault>Favoritos</ButtonDefault>
        </NavLink>
      </StyledButtonsSection>

      <StyledCart>
        <ButtonDefault onClick={openModalLang}>
          <HiOutlineGlobeAlt size="2rem" />
        </ButtonDefault>
        <NavLink to="/cart">
          <ButtonDefault>
            <HiOutlineShoppingCart size="2rem" />
          </ButtonDefault>
        </NavLink>
      </StyledCart>

      <ModalLang isOpen={modalLang} closeModal={closeModalLang} />
    </StyledNavContainer>
  );
};

// =================== ESTILOS CSS ===================
const StyledNavContainer = styled.nav`
  position: fixed;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-gap: 16px;
  align-items: center;
  background-color: var(--white-color);
  width: 100vw;
  height: 56px;
  padding: 0 10px;
  border-bottom: 2px solid var(--light-gray);
  z-index: 90;

  ${media.tab} {
    grid-template-columns: max-content 1fr max-content max-content;
    padding: 0 10%;
  }

  .active {
    color: var(--first-color);
  }
`;
const StyledLogoSection = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: var(--black-color) !important;
`;
const StyledButtonsSection = styled.div`
  display: none;

  ${media.tab} {
    display: block;
  }
`;
const StyledCart = styled.div``;

export default Navbar;
