//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import styled from 'styled-components';

const ButtonDefault = ({
  //Props que recibe el componente ButtonDefault.
  //Propiedades normales de todo button (opcional).
  children,
  type,
  disabled,
  onClick,
  //Propiedades estilos (opcional).
  height,
  width,
  margin,
  primary,
}) => {

  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      height={height}
      width={width}
      margin={margin}
      primary={primary}
    >
      {children}
    </StyledButton>
  );
};

// =================== ESTILOS CSS ===================
const StyledButton = styled.button`
  //Se puede personalizar el alto o dejar el default
  height: ${(props) => props.height || '40px'};
  //Se puede personalizar el ancho o dejar el default
  width: ${(props) => props.width || 'max-content'};
  //Se puede agregar margen
  margin: ${(props) => props.margin || ''};
  padding: 12px;
  font-weight: 600;

  //El color de la fuente cambia segun las props
  color: ${(props) =>
    props.primary ? 'var(--white-color)' : 'var(--black-color)'};
  //El color del fondo cambia segun las props
  background-color: ${(props) =>
    props.primary ? 'var(--first-color)' : 'var(--light-gray)'};

  border-radius: var(--normal-radius);
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease all;
  
  &:hover {
    //El color del fondo en hover cambia segun las props
    background-color: ${(props) =>
      props.primary ? 'var(--first-color)' : 'var(--mid-gray)'};
    //El color de la sombra cambia segun las props
    box-shadow: ${(props) => (props.primary ? 'var(--button-shadow)' : 'none')};
  }
`;

export default ButtonDefault;
