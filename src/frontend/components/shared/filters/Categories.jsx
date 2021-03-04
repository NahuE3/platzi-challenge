//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import styled from 'styled-components';
//Import de iconos.
import { IoFastFoodOutline } from 'react-icons/io5';

const Categories = ({ title, icon }) => {
  return (
    <StyledCategory>
      <StyledIcon>
        <IoFastFoodOutline size="2.6rem" />
      </StyledIcon>
      <span>{title}</span>
    </StyledCategory>
  );
};

// =================== ESTILOS CSS ===================
const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  margin-right: 16px;
  background-color: var(--white-color);

  span {
    margin-top: 10px;
    font-size: var(--small-font-size);
    text-align: center;
  }
`;
const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 2px solid var(--light-gray);
  background-color: var(--light-gray);
`;

export default Categories;
