//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
//Import de iconos.
import { HiX } from 'react-icons/hi';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <StyledModal>
      <StyledModalContainer>
        <StyledCloseButton onClick={closeModal}>
          <HiX size="2rem"/>
        </StyledCloseButton>
        {children}
      </StyledModalContainer>
    </StyledModal>,
    document.getElementById('modal')
  );
};

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
const StyledModalContainer = styled.div`
  position: relative;
  top: -2rem;
  padding: 1.6rem;
  min-width: 400px;
  border-radius: var(--normal-radius);
  background-color: var(--white-color);
  box-shadow: var(--card-shadow);
  z-index: 100;
`;
const StyledCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.7rem 1rem 0.3rem;
  border: 0;
  background: none;
  border-radius: 6px;
  outline: none;

  &:hover {
    background-color: var(--light-gray);
  }
`;

export default Modal;
