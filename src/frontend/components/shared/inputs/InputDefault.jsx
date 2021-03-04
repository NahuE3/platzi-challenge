//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import styled, { css } from 'styled-components';
//Import de iconos.
import { FaCheckCircle, FaRegTimesCircle } from 'react-icons/fa';

const InputDefault = ({
  //Props que recibe el componente InputDefault.
  //Propiedades normales de todo input (opcional).
  type,
  name,
  placeholder,
  label,
  //Propiedades para guardar el query.
  state,
  manageState,
  //Propiedades de validacion (opcional).
  regExpression,
  errorMessage,
  //Propiedades estilos (opcional).
  width,
}) => {
  /**
   * handleChange() guarda el valor en el estado
   * basado en el query ingresado desde el input
   *
   * @param {Event} e evento que recibe desde el onChange
   */
  const handleChange = (e) => {
    manageState({ ...state, value: e.target.value });
  };

  /**
   * validation() guarda el valor en el estado success (true o false)
   * basado en que el query ingresado pase las pruebas de la expresion regular (RegExr)
   */
  const validation = () => {
    if (regExpression) {
      if (regExpression.test(state.value)) {
        manageState({ ...state, success: true });
      } else {
        manageState({ ...state, success: false });
      }
    }
  };

  return (
    <>
      <Label htmlFor={name} label={label}>
        {label}
      </Label>
      <InputContainer>
        <Input
          type={type || 'text'}
          placeholder={placeholder || ''}
          id={name || label}
          value={state.value || ''}
          onChange={handleChange}
          onKeyUp={validation}
          onBlur={validation}
          success={state.success}
          setWidth={width}
        />
        {state.success === true ? (
          <IconSuccess
            size="2rem"
            success={state.success ? 1 : state.success === false ? 0 : null}
          />
        ) : (
          <IconError
            size="2rem"
            success={state.success ? 1 : state.success === false ? 0 : null}
          />
        )}
      </InputContainer>
      <ErrorMessage success={state.success} setWidth={width}>
        {errorMessage}
      </ErrorMessage>
    </>
  );
};

// =================== ESTILOS CSS ===================
const colors = {
  // FIXME: Variables de color (van a cambiar mas adelante)
  border: 'var(--first-color)',
  error: '#b93b3b',
};
const Label = styled.label`
  display: ${(props) => (props.label ? 'block' : 'none')};
  padding: 10px 0;
  font-weight: 600;
  cursor: pointer;

  //Si validacion es false se pinta de rojo.
  ${(props) =>
    props.success === false &&
    css`
      color: ${colors.error};
    `}
`;
const InputContainer = styled.div`
  position: relative;
  z-index: 10;
`;
const Input = styled.input`
  height: 48px;
  line-height: 40px;
  width: ${(props) => (props.setWidth ? props.setWidth : '100%')};
  padding: 0 40px 0 10px;
  background: var(--white-color);
  border-radius: var(--normal-radius);
  border: 3px solid var(--border-color);
  transition: 0.3s ease all;
  &:focus {
    border: 3px solid ${colors.border};
    outline: none;
  }

  //Si validacion es true el borde vuelve a su estado normal.
  ${(props) =>
    props.success === true &&
    css`
      border: 3px solid var(--border-color);
    `}

  //Si validacion es false el borde se pinta de rojo.
  ${(props) =>
    props.success === false &&
    css`
      border: 3px solid ${colors.error} !important;
    `}
`;
const ErrorMessage = styled.p`
  display: none;
  width: ${(props) => (props.setWidth ? props.setWidth : '100%')};
  padding: 6px 10px;
  font-size: var(--small-font-size);
  font-weight: 400;
  color: ${colors.error};

  //Si validacion es true NO se muestra el mensaje.
  ${(props) =>
    props.success === true &&
    css`
      display: none;
    `}

  //Si validacion es false se muestra el mensaje.
  ${(props) =>
    props.success === false &&
    css`
      display: block;
    `}
`;

const IconError = styled(FaRegTimesCircle)`
  position: absolute;
  right: 12px;
  top: 24px;
  z-index: 100;
  opacity: 0;
  transform: translateY(-50%);
  ${(props) =>
    props.success === 0 &&
    css`
      opacity: 1;
      color: ${colors.error};
    `}
`;
const IconSuccess = styled(FaCheckCircle)`
  position: absolute;
  right: 12px;
  top: 24px;
  z-index: 100;
  opacity: 0;
  transform: translateY(-50%);
  ${(props) =>
    props.success === 1 &&
    css`
      opacity: 1;
      color: var(--mid-gray);
    `}
`;

export default InputDefault;
