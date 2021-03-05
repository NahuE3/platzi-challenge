//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState } from 'react';
import styled from 'styled-components';
//Import de iconos.
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import {
  HiOutlineClock,
  HiOutlinePhotograph,
  HiOutlineShoppingCart,
} from 'react-icons/hi';
//Import de componentes.
import ModalCart from '../../containers/Modal/ModalCart';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';
import useRecipePrice from '../../../hooks/useRecipePrice';
import useCurrency from '../../../hooks/useCurrency';
import usePreparationTime from '../../../hooks/usePreparationTime';
import useFavorites from '../../../hooks/useFavorites';

const RecipesCard = ({ data, openRecipe }) => {
  const { picture, name, description, total_time } = data;
  const { formaterValue } = useCurrency();
  const { formatTime } = usePreparationTime();
  const { total } = useRecipePrice({ recipe: data });
  const { isFavorite, addToFavorite, removeToFavorite } = useFavorites();

  const [modalCart, setModalCart] = useState(false);

  const openModalCart = () => setModalCart(true);
  const closeModalCart = () => setModalCart(false);

  return (
    <StyledCard>
      <StyledImgSection onClick={openRecipe}>
        {picture ? (
          <StyledImg src={picture} alt={`Imagen del plato ${name}`} />
        ) : (
          <StyledImgHolder>
            <HiOutlinePhotograph size="4rem" color="white" />
          </StyledImgHolder>
        )}
      </StyledImgSection>

      <StyledInfoSection>
        <StyledInfo onClick={openRecipe}>
          <StyledTitle>{name}</StyledTitle>
          <StyledPrice>{formaterValue({ mount: total })}</StyledPrice>
          <StyledDescription>{description}</StyledDescription>

          <StyledFooter>
            {/* FIXME: Colocar preview de los usuarios que comentaron */}
            <div>Comentarios</div>
            <StyledAddToCart onClick={openModalCart}>
              <HiOutlineShoppingCart size="1.8rem" />
            </StyledAddToCart>
          </StyledFooter>
        </StyledInfo>

        <StyledButtonSection>
          <StyledFavorite>
            {isFavorite({ recipe: data }) ? (
              <MdFavorite size="1.6rem" color="white" onClick={() => removeToFavorite({ recipe: data })} />
            ) : (
              <MdFavoriteBorder size="1.6rem" color="white" onClick={() => addToFavorite({ recipe: data })} />
            )}
          </StyledFavorite>

          <StyledTime>
            <HiOutlineClock size="1.6rem" />
            <StyledTimeText>
              {/* {time} {innerWidth < 700 ? 'minutos' : 'm. de preparacion'} */}
              {formatTime({ time: total_time })}
            </StyledTimeText>
          </StyledTime>
        </StyledButtonSection>
      </StyledInfoSection>

      <ModalCart
        isOpen={modalCart}
        closeModal={closeModalCart}
        recipe={data}
      />
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
const StyledImgSection = styled.div`
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
  grid-template-columns: 1px 26px 1fr 1px;
  grid-gap: 10px;
  width: 100%;
  height: 26px;
  transform: translateY(-50%);
`;
const StyledFavorite = styled.div`
  grid-column: 2;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
  border-radius: 50%;
  background-color: var(--first-color);
  box-shadow: var(--card-shadow);
`;
const StyledTime = styled.div`
  grid-column: 3;
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
const StyledDescription = styled.p`
  display: none;
  font-size: var(--small-font-size);
  color: var(--bold-gray);

  ${media.tab} {
    display: block;
  }
`;
const StyledAddToCart = styled.button`
  height: 40px;
  width: 40px;
  padding: 10px;
  color: var(--white-color);
  border-radius: var(--normal-radius);
  border: none;
  background-color: var(--first-color);
  outline: none;
`;
const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  margin-top: 10px;
`;

export default RecipesCard;
