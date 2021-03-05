//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
//Import de layout.
import Layout from '../../layout/Layout';
//Import de componentes.
import RecipesCard from '../../shared/cards/RecipesCard';
import Categories from '../../shared/filters/Categories';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';
import useCategory from '../../../hooks/useCategory';
import useSearcher from '../../../hooks/useSearcher';
import { useStateValue } from '../../../context';
import useRecipes from '../../../hooks/useRecipes';
import useLanguage from '../../../hooks/useLanguage';

// FIXME: Borrar estos datos cuando se conecte a la API
// const data = ['Pizzas', 'Pastas', 'Carnes', 'Vegetariana', 'De Mar', 'Comida Rapida', 7, 8];
const recipeData = {
  id: 1,
  title: 'Titulo de receta',
  description:
    'Descripcion corta de la receta no mayor a cierto numero de caracteres',
  price: 4000,
  time: 40,
};

const Recipes = () => {
  const [category, setCategory] = useState(0);
  const { categories, search } = useStateValue();
  const ref = useRef(null);
  const { getText } = useLanguage();
  const { recipeList, loading } = useRecipes({ category, search, container: ref });

  const data = categories?.results || [];

  const openRecipe = () => {
    //Funcion de abrir la receta seleccionada
  };
  const addFavorite = () => {
    //Funcion de agregar a favoritos
  };

  return (
    <Layout
      title="Recetas"
      subtitle="Aqui puedes encontrar las mejores y mas deliciosas recetas"
      search={true}
    >
      <h1>{getText('recipes.subtitle')}</h1>

      <StyledCategoryList>
        {data?.map((item) => (
          <li key={item.id} onClick={() => setCategory(item.id)}>
            <Categories title={item.name}/>
          </li>
        ))}
      </StyledCategoryList>

      <StyledList ref={ref}>
        {recipeList?.map((item) => (
          <li key={item.id}>
            <RecipesCard
              data={item}
              openRecipe={openRecipe}
              // addFavorite={addFavorite}
              // favorite={favorite}
            />
          </li>
        ))}
      </StyledList>
    </Layout>
  );
};

// =================== ESTILOS CSS ===================
const StyledCategoryList = styled.div`
  display: flex;
  margin: 20px 0;
  overflow-x: scroll;
`;
const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-gap: 16px;

  ${media.tab} {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
  }
`;

export default Recipes;
