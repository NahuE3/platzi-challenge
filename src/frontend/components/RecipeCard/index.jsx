import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsCalendar } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart, AiOutlineLike } from 'react-icons/ai';
import { MdTimer } from 'react-icons/md';
import { Container, Image, Contain, ButtonLike, ButtonLink, ButtonCart } from './styles';
import { useStateValue } from '../../context';
import { addToCart, addToFavorite, removeToFavorite } from '../../context/actions';

const RecipeCard = ({ recipe }) => {
  const { theme, wishList, cart, dispatch } = useStateValue();
  const [text] = useTranslation('global');
  return (
    <Container className={theme}>
      <Image>
        <img src='https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='' width='276' height='222' />
      </Image>
      <Contain>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p><strong>{recipe.name}</strong></p>
          {!wishList?.recipes.find((item) => item.id === recipe.id) && (
            <ButtonLike type='button' onClick={() => addToFavorite({ wishList, recipe, dispatch })}>
              <AiOutlineHeart size={20} />
            </ButtonLike>
          )}
          {wishList?.recipes.find((item) => item.id === recipe.id) && (
            <ButtonLike type='button' className='active' onClick={() => removeToFavorite({ wishList, recipe, dispatch })}>
              <AiFillHeart size={20} />
            </ButtonLike>
          )}
        </div>
        <span>{`${recipe.price} ${text('recipe-card.per-plate')}`}</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, beatae dolorem! Error ad dolore esse?</p>
        <ButtonLink type='button'>
          <BsCalendar />
          <span>{text('recipe-card.add-menu')}</span>
        </ButtonLink>
        <p type='button'>
          <MdTimer />
          <span>{`${recipe.time} ${text("recipe-card.preparation-time")}`}</span>
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex' }}>
            <AiOutlineLike />
            <span>{recipe.likes}</span>
          </div>
          <ButtonCart type='button' onClick={() => addToCart({ cart, recipe, dispatch })}>{text("recipe-card.add-cart")}</ButtonCart>
        </div>
      </Contain>
    </Container>
  );
}

export default RecipeCard;