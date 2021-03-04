//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import styled from 'styled-components';
//Import de iconos.
import { IoSearch } from 'react-icons/io5';

const SearchBar = ({ id, placeholder, state, manageState, width }) => {
  /**
   * handleChange() guarda el valor en el estado
   * basado en el query ingresado desde el input
   *
   * @param {Event} e evento que recibe desde el onChange
   */
  const handleChange = (e) => {
    manageState({ ...state, value: e.target.value });
  };

  return (
    <StyledWrapper setWidth={width}>
      <InputContainer>
        <StyledIcon size="2rem" />
        <Input
          id={id}
          type="text"
          placeholder={placeholder || 'Buscar...'}
          value={state.value || ''}
          onChange={handleChange}
          // onKeyUp={validation}
          // onBlur={validation}
        />
      </InputContainer>
    </StyledWrapper>
  );
};

// =================== ESTILOS CSS ===================
const StyledWrapper = styled.div`
  position: relative;
  height: 40px;
  width: ${(props) => (props.setWidth ? props.setWidth : '100%')};
  font-size: var(--normal-font-size);
  background-color: var(--white-color);
  border-radius: var(--large-radius);
  border: 2px solid var(--light-gray);
  transition: 0.3s ease all;
  cursor: text;
  z-index: 10;

  &:focus-within {
    box-shadow: var(--card-shadow);
  }
  &:hover {
    box-shadow: var(--card-shadow);
  }
`;
const InputContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 16px;
  height: 24px;
  width: 100%;
  padding: 8px;
  font-size: var(--normal-font-size);
  border-radius: var(--large-radius);
`;
const StyledIcon = styled(IoSearch)`
  color: var(--first-color);
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
`;

export default SearchBar;
