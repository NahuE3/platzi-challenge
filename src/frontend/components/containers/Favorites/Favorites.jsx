//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import styled from 'styled-components';
//Import de layout.
import Layout from '../../layout/Layout';
//Import de componentes.
import RecipesCard from '../../shared/cards/RecipesCard';
import ButtonDefault from '../../shared/buttons/ButtonDefault';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';
import useFavorites from '../../../hooks/useFavorites';
import { useStateValue } from '../../../context';
import useRecipes from '../../../hooks/useRecipes';

// FIXME: Borrar estos datos cuando se conecte a la API
// const data = [
//   'Pizzas',
//   'Pastas',
//   'Carnes',
//   'Vegetariana',
//   'De Mar',
//   'Comida Rapida',
//   7,
//   8,
// ];
// const recipeData = {
//   title: 'Titulo de receta',
//   description:
//     'Descripcion corta de la receta no mayor a cierto numero de caracteres',
//   price: 4000,
//   time: 40,
// };
// const userLoged = false;

const Favorites = () => {
  const { user } = useStateValue();
  const { favorites } = useFavorites();
  const { recipeList } = useRecipes({ category: '', search: '', container: null });
  const openRecipe = () => {
    //Funcion de abrir la receta seleccionada
  };

  return (
    <Layout
      title="Favoritos"
      subtitle="Aqui estan tu lista de recetas favoritas"
    >
      <h1>Favoritos</h1>
      {Object.keys(user).length !== 0 && (
        <StyledList>
          {favorites?.map((item) => (
            <>
              {item && (
                <li key={item?.id}>
                  <RecipesCard data={item} openRecipe={openRecipe} />
                </li>
              )}
            </>
          ))}
        </StyledList>
      )}
      {Object.keys(user).length === 0 &&(
        <>
          <ButtonDefault primary width="100%" height="48px" margin="12px 0 0">
            Iniciar sesión
          </ButtonDefault>
          <StyledSeparator></StyledSeparator>

          <h3>Recetas mas populares</h3>
          <StyledList>
            {recipeList?.map((item) => (
              <li key={item.id}>
                <RecipesCard data={item} openRecipe={openRecipe} />
              </li>
            ))}
          </StyledList>
        </>
      )}
    </Layout>
  );
};

// =================== ESTILOS CSS ===================
const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-gap: 16px;
  margin-top: 16px;

  ${media.tab} {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
  }
`;
const StyledSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--light-gray);
  margin: 20px 0;
`;
//

export default Favorites;
