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
  secondary,
  icon,
  title,
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
      secondary={secondary}
      icon={icon}
      title={title}
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
  padding: ${(props) =>
    props.icon ? '9px' : '12px'};
  font-weight: 600;

  color: ${(props) =>
    props.primary ? 'var(--white-color)' : 'var(--black-color)'};
  background-color: ${(props) =>
    props.primary ? 'var(--first-color)' : 'var(--white-color)'};

  border-radius: var(--normal-radius);
  border: ${(props) =>
    props.secondary ? '3px solid var(--mid-gray)' : 'none'};
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
