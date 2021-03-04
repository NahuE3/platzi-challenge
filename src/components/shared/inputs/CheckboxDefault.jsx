//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import styled from 'styled-components';
//Import de iconos.
import { FaCheck } from 'react-icons/fa';

const CheckboxDefault = ({ title, name, checked, manageChecked }) => {
  const handleChange = () => {
    manageChecked(!checked);
  };

  return (
    <StyledWrapper>
      <StyledCheckboxCont>
        {checked && <StyledIcon size="12px" onClick={handleChange} />}
        <StyledCheckbox
          type="checkbox"
          name={name}
          id={name}
          checked={checked}
          onChange={handleChange}
        />
      </StyledCheckboxCont>
      <StyledLabel htmlFor={name}>{title}</StyledLabel>
    </StyledWrapper>
  );
};

// =================== ESTILOS CSS ===================
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
`;
const StyledCheckboxCont = styled.div`
  position: relative;
  height: 18px;
  width: 18px;
`;
const StyledCheckbox = styled.input`
  height: 100%;
  width: 100%;
  background-color: var(--mid-gray);
  border-radius: 4px;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: var(--light-gray);
  }

  &:checked {
    background-color: var(--first-color);
  }
`;
const StyledLabel = styled.label`
  margin-left: 6px;
  font-size: var(--normal-font-size);
  font-weight: 600;
  cursor: pointer;
`;
const StyledIcon = styled(FaCheck)`
  position: absolute;
  top: 50%;
  left: 50%;
  color: var(--white-color);
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export default CheckboxDefault;
