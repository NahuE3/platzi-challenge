//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//Import de iconos.
import {
  HiX,
  HiOutlineLogin,
  HiOutlineGift,
  HiOutlineChevronLeft,
} from 'react-icons/hi';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const ModalLogin = ({ isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <StyledModal>
      <StyledModalContainer>
        <StyledHead>
          <h3>Necesitas iniciar sesión</h3>
          <StyledCloseButton onClick={closeModal}>
            <HiX size="2rem" />
          </StyledCloseButton>
        </StyledHead>

        <StyledContent>
          <StyledSeparator top></StyledSeparator>

          <StyledOptions>
            <Link to="/login">
              <ButtonOption primary margin="0">
                Iniciar sesión
                <HiOutlineLogin size="2.2rem" />
              </ButtonOption>
            </Link>
            <Link to="/signup">
              <ButtonOption>
                Registrarse
                <HiOutlineGift size="2.2rem" />
              </ButtonOption>
            </Link>
            <ButtonOption onClick={closeModal}>
              Volver
              <HiOutlineChevronLeft size="2.2rem" />
            </ButtonOption>
          </StyledOptions>
        </StyledContent>
      </StyledModalContainer>
    </StyledModal>,
    document.getElementById('modal')
  );
};

// =================== ESTILOS CSS ===================
const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  transition: 0.3s ease all;

  ${media.tab} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const StyledModalContainer = styled.div`
  position: relative;
  bottom: 0;
  top: 50%;

  display: grid;
  grid-template-rows: 40px 1fr;

  width: 100vw;
  height: 50vh;
  border-radius: var(--large-radius) var(--large-radius) 0 0;
  background-color: var(--white-color);
  box-shadow: var(--card-shadow);
  z-index: 100;
  transition: 0.3s ease all;

  ${media.tab} {
    top: 0;
    width: 500px;
    height: max-content;
    border-radius: var(--large-radius);
  }
`;
const StyledCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 40px;
  width: 40px;
  padding: 8px;
  border: none;
  background: none;
  border-radius: var(--large-radius);
  outline: none;

  &:hover {
    background-color: var(--light-gray);
  }
`;
const StyledHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;
const StyledContent = styled.div`
  padding: 0 16px;
`;
const StyledSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--light-gray);
  margin: ${(props) => (props.top ? '0 0 14px' : '14px 0')};
`;
const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
const ButtonOption = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  width: 100%;
  padding: 10px;
  margin: ${(props) => (props.margin ? props.margin : '14px 0 0')};
  font-size: var(--large-font-size);
  font-weight: 600;
  text-align: left;
  color: ${(props) =>
    props.primary ? 'var(--white-color)' : 'var(--black-color)'};
  border: ${(props) =>
    props.primary
      ? '3px solid var(--first-color)'
      : '3px solid var(--mid-gray)'};
  border-radius: var(--normal-radius);
  outline: none;
  background: ${(props) => (props.primary ? 'var(--first-color)' : 'none')};

  ${(props) => (props.primary ? '' : '')}

  &:hover {
    background-color: ${(props) =>
      props.primary ? 'var(--first-soft-color)' : 'var(--light-gray)'};
  }

  span {
    font-size: var(--small-font-size);
    color: var(--bold-gray);
  }
`;

export default ModalLogin;
