//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState } from 'react';
import styled from 'styled-components';
//Import de iconos.
import { HiOutlineUserCircle, HiReply } from 'react-icons/hi';
import { BiMailSend } from 'react-icons/bi';
//Import de componentes.
import ModalLogin from '../../containers/Modal/ModalLogin';
import ButtonDefault from '../../shared/buttons/ButtonDefault';

const userLogged = false;

const AddComment = () => {
  const [modalLogin, setModalLogin] = useState(false);

  const openModalLogin = () => setModalLogin(true);
  const closeModalLogin = () => setModalLogin(false);

  return (
    <StyledWrapper>
      <StyledHead onClick={() => setOpen(!open)}>
        <div>
          <HiOutlineUserCircle size="3rem" color="var(--first-color)" />
          <span>Yo</span>
        </div>
      </StyledHead>
      <StyledSeparator></StyledSeparator>
      <StyledComment>
        <StyledIcon size="2rem" color="var(--mid-gray)" />
        <StyledTextArea
          name="comment"
          cols="30"
          rows="4"
          maxlenght="130"
          placeholder="¿Que tal te parecio esta receta?"
          required
        ></StyledTextArea>
      </StyledComment>
      <StyledSubmit>
        <ButtonDefault
          primary
          onClick={!userLogged && openModalLogin}
        >
          <StyledButton>
            <span>Enviar</span>
            <BiMailSend size="2rem" />
          </StyledButton>
        </ButtonDefault>
      </StyledSubmit>
      <ModalLogin isOpen={modalLogin} closeModal={closeModalLogin} />
    </StyledWrapper>
  );
};

// =================== ESTILOS CSS ===================
const StyledWrapper = styled.div`
  width: 100%;
  height: max-content;
  padding: 12px;
  border-radius: var(--normal-radius);
  box-shadow: var(--card-shadow);
  transition: 0.3s ease all;
`;
const StyledHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;

  span {
    margin-left: 6px;
    font-size: var(--large-font-size);
    font-weight: 600;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const StyledSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--light-gray);
  margin: 8px 0 10px;
`;
const StyledComment = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 20px;
  padding: 0 20px 4px 13px;
`;
const StyledIcon = styled(HiReply)`
  transform: rotate(180deg);
`;
const StyledTextArea = styled.textarea`
  padding: 10px 14px;
  margin-bottom: 10px;
  background-color: var(--light-gray);
  border-radius: var(--normal-radius);
  border: none;
  outline: none;
  resize: none;
`;
const StyledSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding-right: 20px;
`;
const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80px;
  margin-top: -2px;
`;

export default AddComment;

