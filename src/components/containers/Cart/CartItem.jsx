//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState } from 'react';
import styled from 'styled-components';
//Import de iconos.
import { HiChevronDown } from 'react-icons/hi';
import { HiOutlinePlus } from 'react-icons/hi';
import { HiOutlineMinusSm } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi';
//Import de componentes.
import Checkbox from '../../shared/inputs/Checkbox';
//Import de media queries.
import { media } from '../../../const/mediaQuerys';

const products = [
  {
    id: 1,
    name: 'Salsa de Tomate Helmans 500cc',
    price: 10,
    checked: true,
  },
  {
    id: 2,
    name: 'Queso Barra Marca X 1.0kg',
    price: 10,
    checked: true,
  },
  {
    id: 3,
    name: 'PrePizza Marca X 1u',
    price: 20,
    checked: true,
  },
];

const CartItem = ({ recipe }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <StyledWrapper collapse={collapse}>
      <StyledRecipeSection>
        <StyledImgSection>
          {recipe.picture ? (
            <StyledImg
              src={recipe.picture}
              alt={`Imagen del plato ${recipe.name}`}
            />
          ) : (
            <StyledImgHolder></StyledImgHolder>
          )}
        </StyledImgSection>

        <StyledTitle>{recipe.name}</StyledTitle>
        <StyledOpenButton onClick={() => setCollapse(!collapse)}>
          <StyledArrow
            size="24px"
            // FIXME: Warning en consola
            collapse={collapse ? 1 : 0}
          />
        </StyledOpenButton>

        <StyledCounter>
          <StyledCounterButton
          // Llamado a la funcion eliminar
          // onClick={() => removeFromCart(product)}
          >
            {recipe.porcions === 1 ? (
              <HiOutlineTrash size="18px" />
            ) : (
              <HiOutlineMinusSm size="20px" />
            )}
          </StyledCounterButton>

          <StyledCounterLabel>{recipe.porcions}</StyledCounterLabel>
          <StyledCounterButton
          // Llamado a la funcion sumar al amount
          // onClick={() => addToCart(product)}
          >
            <HiOutlinePlus size="20px" />
          </StyledCounterButton>
        </StyledCounter>

        <StyledPrice>$ {recipe.price.toFixed(2)}</StyledPrice>
      </StyledRecipeSection>

      <StyledIngSection>
        <StyledHeader>
          <span>Ingredientes</span>
          <span>Precios</span>
          <span>Agregado</span>
        </StyledHeader>

        <div>
          {products.map((product) => (
            <StyledIngrediente key={product.id}>
              <label htmlFor={product.name}>{product.name}</label>
              <label htmlFor={product.name}>$ {product.price.toFixed(2)}</label>
              <Checkbox large name={product.name} checked={product.checked} />
            </StyledIngrediente>
          ))}
        </div>
      </StyledIngSection>
    </StyledWrapper>
  );
};

// =================== ESTILOS CSS ===================
const StyledWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  height: ${(props) => (props.collapse ? 'max-content' : '112px')};
  padding: 12px;
  margin: 16px 0;
  border-radius: var(--normal-radius);
  box-shadow: var(--card-shadow);
  overflow: hidden;

  ${media.mobile} {
    height: ${(props) => (props.collapse ? 'max-content' : '132px')};
    padding: 16px;
  }
  ${media.desktop} {
    height: ${(props) => (props.collapse ? 'max-content' : '182px')};
    max-width: 560px;
    width: 100%;
    margin: 16px 6px;
  }
`;
const StyledRecipeSection = styled.div`
  display: grid;
  grid-template: 1fr 1fr / minmax(60px, 80px) 1fr 0.3fr 0.3fr;
  grid-gap: 12px;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 86px;

  ${media.mobile} {
    grid-template: 1fr 1fr / minmax(100px, 1fr) 1fr 0.3fr 0.3fr;
    grid-gap: 16px;
    height: 100px;
  }
  ${media.desktop} {
    height: 150px;
  }
`;
// Imagen
const StyledImgSection = styled.div`
  grid-row: 1 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: var(--normal-radius);

  ${media.mobile} {
    width: 100%;
    height: 100px;
  }
  ${media.desktop} {
    height: 150px;
  }
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
const StyledImgHolder = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--light-gray);
`;
// Generales
const StyledTitle = styled.h3`
  grid-column: 2 / 4;
  width: 100%;
  font-weight: 600;
  text-align: left;

  ${media.tab} {
    grid-column: 2;
    text-align: center;
  }
`;
const StyledArrow = styled(HiChevronDown)`
  width: 100%;
  align-self: right;
  text-align: right;
  transform: ${(props) => (props.collapse ? 'rotate(180deg)' : '')};
`;
const StyledOpenButton = styled.button`
  grid-column: 4;
  min-width: 36px;
  height: 36px;
  padding: 6px 8px 10px;
  text-align: center;
  border: none;
  border-radius: 5px;
  background: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: var(--light-gray);
  }
`;
const StyledPrice = styled.label`
  grid-column: 3 / 5;
  width: 100%;
  font-size: var(--large-font-size);
  font-weight: 600;
  text-align: right;
`;
// Counter
const StyledCounter = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 110px;
  min-width: 100px;
  width: 100%;
  height: 38px;
  border: 2px solid var(--light-gray);
  border-radius: 6px;
  overflow: hidden;
`;
const StyledCounterButton = styled.button`
  min-width: 36px;
  height: 100%;
  padding: 8px;
  text-align: center;
  color: var(--first-color);
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;
const StyledCounterLabel = styled.label`
  padding: 8px 0;
  width: 100%;
  height: 100%;
  font-size: var(--large-font-size);
  font-weight: 600;
  text-align: center;
`;

// Ingredientes
const StyledIngSection = styled.div`
  width: 100%;
  height: max-content;
  margin-top: 16px;
`;
const StyledHeader = styled.li`
  display: grid;
  grid-template-columns: 3fr 1fr 60px;
  grid-gap: 16px;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: var(--normal-font-size);
  font-weight: 600;
`;
const StyledIngrediente = styled.li`
  display: grid;
  grid-template-columns: 3fr 1fr 60px;
  grid-gap: 16px;
  align-items: center;
  width: 100%;
  height: 36px;
  font-size: var(--small-font-size);
`;

export default CartItem;
