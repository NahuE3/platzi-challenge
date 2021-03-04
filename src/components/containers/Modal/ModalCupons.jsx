//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
//Import de iconos.
import { HiX, HiOutlineReceiptTax } from 'react-icons/hi';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const ModalCupons = ({ isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <StyledModal>
      <StyledModalContainer>
        <StyledHead>
          <h3>Mis Cupones</h3>
          <StyledCloseButton onClick={closeModal}>
            <HiX size="2rem" />
          </StyledCloseButton>
        </StyledHead>
        <StyledContent>
          <StyledSeparator></StyledSeparator>
          <StyledOptions>
            {[10, 200, 3000].map((item) => (
              <ButtonOption key={item}>
                {`Cupon descuento x $${item}`}
                <HiOutlineReceiptTax size="2.2rem" />
              </ButtonOption>
            ))}
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
  margin: 8px 0 10px;
`;
const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
`;
const ButtonOption = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  width: 100%;
  padding: 10px;
  margin: 14px 0 0;
  font-size: var(--large-font-size);
  font-weight: 600;
  text-align: left;
  border: 2px solid var(--mid-gray);
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

export default ModalCupons;
