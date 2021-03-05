//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState } from 'react';
import styled from 'styled-components';
//Import de iconos.
import { HiChevronDown } from 'react-icons/hi';
import { GiForkKnifeSpoon } from 'react-icons/gi';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const CollapseList = ({ icon, title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledWrapper open={open}>
      <StyledHead onClick={() => setOpen(!open)}>
        <div>
          {icon === '1' && (
            <GiForkKnifeSpoon size="2rem" color="var(--first-color)" />
          )}
          {icon === '2' && (
            <GiForkKnifeSpoon size="2rem" color="var(--first-color)" />
          )}
          {icon === '3' && (
            <GiForkKnifeSpoon size="2rem" color="var(--first-color)" />
          )}
          <span>{title}</span>
        </div>
        <StyledIcon open={open} size="2rem" />
      </StyledHead>
      {open && (
        <>
          <StyledSeparator></StyledSeparator>
          {children}
        </>
      )}
    </StyledWrapper>
  );
};

// =================== ESTILOS CSS ===================
const StyledWrapper = styled.div`
  width: 100%;
  height: max-content;
  padding: 12px;
  margin-top: 16px;
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
const StyledIcon = styled(HiChevronDown)`
  transform: ${(props) => (props.open ? 'rotate(180deg)' : 'none')};
`;
const StyledSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--light-gray);
  margin: 8px 0 10px;
`;

export default CollapseList;
