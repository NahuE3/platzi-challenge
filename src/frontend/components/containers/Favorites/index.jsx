import React from 'react';
import { BiArrowFromRight } from 'react-icons/bi';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../../context';
import { Container, BtnBack, RecipesContainer } from './styles';
import RecipeCard from '../../RecipeCard';
import useLanguage from '../../../hooks/useLanguage';

const Favorites = () => {
  const { wishList, recipes } = useStateValue();
  const history = useHistory();
  const { getText } = useLanguage();
  return (
    <Container>
      <BtnBack type='button' onClick={() => history.goBack()}>
        <BiArrowFromRight/>
        <span>{getText('cart.back')}</span>
      </BtnBack>
      <h1>Favoritos</h1>
      <RecipesContainer>
        {wishList.length === 0 && (
          <div>
            <p><strong>No tienes favoritos</strong></p>
            <Link to='/menu'>Buscar recetas</Link>
          </div>
        )}
        {recipes.results.map((recipe) => (
          <React.Fragment key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </React.Fragment>
        ))}
      </RecipesContainer>
    </Container>
  )
};

export default Favorites;