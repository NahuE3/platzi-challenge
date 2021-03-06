//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import styled from 'styled-components';
//Import de iconos.
import {
  HiOutlineClock,
  HiOutlinePhotograph,
  HiOutlineTrash,
  HiOutlineShoppingCart,
} from 'react-icons/hi';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';
import { Link } from 'react-router-dom';
import usePreparationTime from '../../../hooks/usePreparationTime';

const Recipe = ({ data, openRecipe }) => {
  const { id, picture, description, price, total_time, name } = data;
  const { formatTime } = usePreparationTime();

  return (
    <StyledCard>
      <StyledImgSection onClick={openRecipe} to={`/recipes/recipe/${name}`}>
        {picture ? (
          <StyledImg src={picture} alt={`Imagenn del plato ${name}`} />
        ) : (
          <StyledImgHolder>
            <HiOutlinePhotograph size="4rem" color="white" />
          </StyledImgHolder>
        )}
      </StyledImgSection>

      <StyledInfoSection>
        <StyledInfo onClick={openRecipe}>
          <StyledTitle>{name}</StyledTitle>
          <StyledPrice>$ {price} COL por plato</StyledPrice>
          <StyledFooter>
            <StyledAddToCart
            //funcion de mover
            //onClick={}
            >
              Mover
            </StyledAddToCart>
            <StyledAddToCart
            //funcion de eliminar
            //onClick={}
            >
              <HiOutlineTrash size="1.8rem" />
            </StyledAddToCart>
          </StyledFooter>
        </StyledInfo>

        <StyledButtonSection>
          <StyledTime>
            <HiOutlineClock size="1.6rem" />
            <StyledTimeText>{formatTime({ time: total_time })}</StyledTimeText>
          </StyledTime>
        </StyledButtonSection>
      </StyledInfoSection>
    </StyledCard>
  );
};

// =================== ESTILOS CSS ===================
const StyledCard = styled.div`
  width: 100%;
  min-width: 140px;
  min-height: 240px;
  border-radius: var(--normal-radius);
  box-shadow: var(--card-shadow);
`;
const StyledImgSection = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140px;
  overflow: hidden;
  border-radius: var(--normal-radius) var(--normal-radius) 0 0;
  ${media.tab} {
    height: 180px;
  }
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
const StyledImgHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--mid-gray);
`;
const StyledInfoSection = styled.div`
  position: relative;
`;
const StyledInfo = styled.div`
  width: 100%;
  padding: 20px 10px 10px;
`;
const StyledButtonSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 4px 1fr 4px;
  grid-gap: 10px;
  width: 100%;
  height: 26px;
  transform: translateY(-50%);
`;
const StyledTime = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 4px;
  font-size: var(--small-font-size);
  color: var(--first-color);
  border-radius: 16px;
  border: 2px solid var(--first-color);
  background-color: var(--white-color);
  overflow: hidden;
  box-shadow: var(--card-shadow);
`;
const StyledTimeText = styled.p`
  margin-left: 6px;
`;
const StyledTitle = styled.h3`
  margin-bottom: 4px;
  font-size: var(--large-font-size);
`;
const StyledPrice = styled.p`
  font-size: var(--small-font-size);
`;
const StyledAddToCart = styled.button`
  height: 40px;
  width: 100%;
  padding: 10px;
  color: var(--white-color);
  border-radius: var(--normal-radius);
  border: none;
  background-color: var(--first-color);
  outline: none;
`;
const StyledFooter = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 1fr 40px;
  align-items: center;
  height: 40px;
  width: 100%;
  margin-top: 10px;
`;

export default Recipe;
