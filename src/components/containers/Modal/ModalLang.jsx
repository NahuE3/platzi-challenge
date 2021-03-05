//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
//Import de iconos.
import { HiX } from 'react-icons/hi';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const ModalLang = ({ isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <StyledModal>

      <StyledModalContainer>
        <StyledHead>
          <h3>Preferencias</h3>
          <StyledCloseButton onClick={closeModal}>
            <HiX size="2rem" />
          </StyledCloseButton>
        </StyledHead>

        <StyledContent>

          <StyledSeparator top></StyledSeparator>
          <h3>Idioma y region</h3>
          <StyledOptions options="1fr / 1fr 1fr">
            <ButtonOption>
              Español
              <span>Latinoamerica</span>
            </ButtonOption>

            <ButtonOption>
              English
              <span>United States</span>
            </ButtonOption>

          </StyledOptions>

          <StyledSeparator></StyledSeparator>

          <h3>Moneda</h3>
          <StyledOptions options="1fr 1fr / 1fr 1fr">
            <ButtonOption>
              Dolar estadounidense
              <span>USD-$</span>
            </ButtonOption>

            <ButtonOption>
              Pesos colombianos
              <span>COP-$</span>
            </ButtonOption>

            <ButtonOption>
              Pesos argentinos
              <span>ARS-$</span>
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
  top: 40%;

  display: grid;
  grid-template-rows: 40px 1fr;

  width: 100vw;
  height: 60vh;
  border-radius: var(--large-radius) var(--large-radius) 0 0;
  background-color: var(--white-color);
  box-shadow: var(--card-shadow);
  z-index: 100;

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
  display: grid;
  grid-gap: 10px;
  grid-template: ${(props) => props.options && props.options};
  margin: 16px 0;
`;
const ButtonOption = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 56px;
  width: 100%;
  padding: 8px;
  text-align: left;
  border: 3px solid var(--mid-gray);
  border-radius: var(--normal-radius);
  outline: none;
  background: none;

  &:hover {
    background-color: var(--light-gray);
  }

  span {
    font-size: var(--small-font-size);
    color: var(--bold-gray);
  }
`;

export default ModalLang;
