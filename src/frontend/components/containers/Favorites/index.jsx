import React from 'react';
import { BiArrowFromRight } from 'react-icons/bi';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../../context';
import { useTranslation } from 'react-i18next';
import { addToCart, removeToFavorite } from '../../../context/actions';
import { Container, BtnBack, RecipesContainer } from './styles';
import RecipeCard from '../../RecipeCard';

const Favorites = () => {
  const { cart, wishList } = useStateValue();
  const history = useHistory();
  const [text] = useTranslation('global');
  return (
    <Container>
      <BtnBack type='button' onClick={() => history.goBack()}>
        <BiArrowFromRight/>
        <span>{text('cart.back')}</span>
      </BtnBack>
      <h1>Favoritos</h1>
      <RecipesContainer>
        {wishList.size === 0 && (
          <div>
            <p><strong>No tienes favoritos</strong></p>
            <Link to='/menu'>Buscar recetas</Link>
          </div>
        )}
        {wishList.recipes.map((recipe) => (
          <React.Fragment key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </React.Fragment>
        ))}
      </RecipesContainer>
    </Container>
  )
};

export default Favorites;