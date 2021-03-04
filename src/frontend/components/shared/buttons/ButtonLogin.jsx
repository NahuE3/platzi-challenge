//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import styled from 'styled-components';
//Import de iconos.
import { FaFacebookSquare, FaPaypal, FaBitcoin, FaCreditCard } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const ButtonDefault = ({
  //Props que recibe el componente ButtonLogin.
  //Propiedades normales de todo button (opcional).
  children,
  type,
  disabled,
  onClick,
  //Propiedades estilos (opcional).
  height,
  width,
  margin,
  icon,
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      height={height}
      width={width}
      margin={margin}
      icon={icon}
    >
      {icon === 'Facebook' && <FaFacebookSquare size="2rem" color="#3b5998" />}
      {icon === 'Google' && <FcGoogle size="2rem" />}
      {icon === 'Paypal' && <FaPaypal size="2rem" color="#215a96" />}
      {icon === 'Bitcoin' && <FaBitcoin size="2rem" color="#f7931a" />}
      {icon === 'Card' && <FaCreditCard size="2rem" color="var(--first-color)" />}
      {children}
    </StyledButton>
  );
};

// =================== ESTILOS CSS ===================
const StyledButton = styled.button`
  display: grid;
  grid-template-columns: max-content 1fr 20px;
  align-items: center;
  justify-items: center;
  //Se puede personalizar el alto o dejar el default
  height: ${(props) => props.height || '48px'};
  //Se puede personalizar el ancho o dejar el default
  width: ${(props) => props.width || 'max-content'};
  //Se puede agregar margen
  margin: ${(props) => props.margin || ''};
  padding: 12px;
  font-weight: 600;
  color: var(--black-color);
  background: none;
  border: 3px solid var(--mid-gray);
  border-radius: var(--normal-radius);
  outline: none;
  cursor: pointer;
  transition: 0.3s ease all;

  &:hover {
    background-color: var(--mid-gray);
  }
`;

export default ButtonDefault;
