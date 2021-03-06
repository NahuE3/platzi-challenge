//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import styled from 'styled-components';
//Import de layout.
import Layout from '../../layout/Layout';
//Import de componentes.
import Spinner from '../../shared/Spinner';
import RecipesCard from '../../shared/cards/RecipesCard';
import Slider from './Slider';
import { SlidesMobile, SlidesTab, SlidesDesktop } from './SliderData';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';
import { useStateValue } from '../../../context';
import useCategory from '../../../hooks/useCategory';
import useLanguage from '../../../hooks/useLanguage';

const Home = () => {
  const { categories } = useStateValue();
  const data = categories.results;
  const { categoryList } = useCategory({ category: 0 });
  const { getText } = useLanguage();
  const openRecipe = () => {
    //Funcion de abrir la receta seleccionada
  };

  return (
    <Layout
      title="Inicio"
      subtitle="Todo lo que nececitas para cocinar en un solo lugar"
    >
    {/*<Slider slides={innerWidth < 400 ? SlidesMobile : innerWidth < 1100 ? SlidesTab : SlidesDesktop} />*/}
      <StyledSubtitle>
        {getText('home.subtitle')}
      </StyledSubtitle>
      <StyledCategory>
        {data?.slice(0, 4).map((item) => (
          <StyledCatOption
            key={item?.id}
            // redirigir con onClick={}
          >
            <div>
              {item?.icon && (
                <StyledImg
                  src={item?.icon}
                  alt={`Foto de comidas pertenecientes a la categoria ${item?.name}`}
                />
              )}
            </div>
            <span>{item?.name}</span>
          </StyledCatOption>
        ))}
      </StyledCategory>
      <StyledSubtitle>{getText('home.popular')}</StyledSubtitle>
      <StyledList>
        {categoryList?.slice(0, 7)?.map((item) => (
          <li key={item.id}>
            <RecipesCard
              data={item}
              openRecipe={openRecipe}
              // favorite={favorite}
            />
          </li>
        ))}
      </StyledList>
      <StyledSubtitle>{getText('home.providers')}</StyledSubtitle>
    </Layout>
  );
};

// =================== ESTILOS CSS ===================
const StyledSubtitle = styled.h2`
  margin: 16px 0;
  font-size: var(--xlarge-font-size);

  ${media.desktop} {
    font-size: 2.2rem;
  }
`;
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
const StyledCategory = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-gap: 10px;
  height: 200px;
  width: 100%;

  ${media.tab} {
    height: 240px;
  }
  ${media.desktop} {
    grid-template: 1fr / 1fr 1fr 1fr 1fr;
    height: 140px;
  }
`;
const StyledCatOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tab} {
    flex-direction: row;
  }

  div {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    height: 60px;
    width: 60px;
    margin: 0 0 10px;
    border-radius: var(--normal-radius);
    background-color: #ffffff;
    overflow: hidden;

    ${media.tab} {
      height: 80px;
      width: 80px;
      margin: 0 10px 0 0;
    }
  }
  span {
    font-size: var(--normal-font-size);
    font-weight: 600;
  }
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export default Home;
