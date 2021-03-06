//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState } from 'react';
import styled from 'styled-components';
//Import de componentes.
import Recipe from './Recipe';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';
import useLanguage from '../../../hooks/useLanguage';
import useRecipes from '../../../hooks/useRecipes';
import useCategory from '../../../hooks/useCategory';

// FIXME: Borrar estos datos cuando se conecte a la API
const recipeData = {
  title: 'Titulo de receta',
  description:
    'Descripcion corta de la receta no mayor a cierto numero de caracteres',
  price: 4000,
  time: 40,
};
const data = [1, 2, 3, 4];

const Days = () => {
  const { getText } = useLanguage();
  const { recipeList } = useRecipes({ search: '', category: '' });
  const days = [
    getText('modal_cart.sunday'),
    getText('modal_cart.monday'),
    getText('modal_cart.tuesday'),
    getText('modal_cart.wednesday'),
    getText('modal_cart.thursday'),
    getText('modal_cart.friday'),
    getText('modal_cart.saturday'),
  ];
  return (
    <>
      {days.map((day, index) => (
        <StyledDay key={day}>
          <h2>{day}</h2>
          <StyledList>
            {recipeList?.slice(index, index + 4).map((item) => (
              <li key={item.id}>
                <Recipe
                  data={item}
                  //openRecipe={openRecipe}
                />
              </li>
            ))}
          </StyledList>
        </StyledDay>
      ))}
    </>
  );
};

// =================== ESTILOS CSS ===================
const StyledList = styled.div`
  display: flex;
  margin: 10px 0;
  overflow-x: scroll;

  li {
    margin: 0 16px 10px 2px;
    min-width: 180px;
    height: 100%;
  }

  ${media.tab} {
    li {
      min-width: 200px;
      margin: 0 20px 10px 2px;
    }
  }

  ${media.desktop} {
    overflow-x: visible;
  }
`;
const StyledDay = styled.div`
  margin: 16px 0 0;
  padding: 10px 0 0;
  border-top: 2px solid var(--light-gray);

  h2 {
    margin-bottom: 12px;
  }
`;

export default Days;
