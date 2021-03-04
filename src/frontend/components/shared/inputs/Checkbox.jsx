//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import styled from 'styled-components';
//Import de iconos.
import { FaCheck } from 'react-icons/fa';

const Checkbox = ({name, checked, onclick, manageChecked, large }) => {
  const handleChange = () => {
    manageChecked(!checked);
  };

  return (
    <StyledWrapper large={large}>
      <StyledCheckboxCont>
        {checked && <StyledIcon size="12px" onClick={onclick} />}
        <StyledCheckbox
          type="checkbox"
          name={name}
          id={name}
          checked={checked}
          onClick={onclick}
          // onChange={handleChange}
        />
      </StyledCheckboxCont>
    </StyledWrapper>
  );
};

// =================== ESTILOS CSS ===================
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  transform: ${props => props.large ? 'scale(1.2)' : ''};
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
const StyledIcon = styled(FaCheck)`
  position: absolute;
  top: 50%;
  left: 50%;
  color: var(--white-color);
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export default Checkbox;
