//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
//Import de iconos.
import {
  HiOutlineShoppingCart,
  HiOutlineGlobe,
  HiOutlineUserCircle,
} from 'react-icons/hi';
//Import de componentes.
import ModalLang from '../../containers/Modal/ModalLang';
import ModalMore from '../../containers/Modal/ModalMore';
import ButtonDefault from '../../shared/buttons/ButtonDefault';
import SearchBar from '../../shared/inputs/SearchBar';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const Navbar = ({ isSearch }) => {
  const [search, setSearch] = useState({ value: '', success: null });
  const [modalLang, setModalLang] = useState(false);
  const [modalMore, setModalMore] = useState(false);

  const openModalLang = () => setModalLang(true);
  const closeModalLang = () => setModalLang(false);

  const openModalMore = () => setModalMore(true);
  const closeModalMore = () => setModalMore(false);

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
      <div>
        {isSearch ? (
          <SearchBar state={search} manageState={setSearch} id="SearchBar" />
        ) : (
          <Link to="/recipes">
            <SearchBar state={search} />
          </Link>
        )}
      </div>

      <StyledCont>
        <StyledButtonsSection>
          <NavLink to="/home">
            <ButtonDefault>Inicio</ButtonDefault>
          </NavLink>
          <NavLink to="/recipes">
            <ButtonDefault>Recetas</ButtonDefault>
          </NavLink>
          <NavLink to="/week">
            <ButtonDefault>Programacion</ButtonDefault>
          </NavLink>
          <NavLink to="/wishlist">
            <ButtonDefault>Favoritos</ButtonDefault>
          </NavLink>
          <div>
            <ButtonDefault onClick={openModalMore} icon>
              <HiOutlineUserCircle size="2.2rem" />
            </ButtonDefault>
          </div>
        </StyledButtonsSection>

        <div>
          <ButtonDefault onClick={openModalLang} icon>
            <HiOutlineGlobe size="2.2rem" />
          </ButtonDefault>
          <NavLink to="/cart">
            <ButtonDefault icon>
              <HiOutlineShoppingCart size="2.2rem" />
            </ButtonDefault>
          </NavLink>
        </div>
      </StyledCont>

      <ModalLang isOpen={modalLang} closeModal={closeModalLang} />
      <ModalMore isOpen={modalMore} closeModal={closeModalMore} />
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
    display: flex;
    align-items: center;
  }
`;
const StyledCont = styled.div`
  grid-column: 3;
  display: flex;
  align-items: center;
`;

export default Navbar;
