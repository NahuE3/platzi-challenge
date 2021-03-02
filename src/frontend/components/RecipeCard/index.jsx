import React from 'react';
import { BsCalendar } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart, AiOutlineLike } from 'react-icons/ai';
import { MdTimer } from 'react-icons/md';
import { Container, Image, Contain, ButtonLike, ButtonLink, ButtonCart } from './styles';
import { useStateValue } from '../../context';
import { addToCart, addToFavorite, removeToFavorite } from '../../context/actions';
import useLanguage from '../../hooks/useLanguage';

const RecipeCard = ({ recipe }) => {
  const { getText } = useLanguage();
  const { theme, user, wishList, cart, dispatch } = useStateValue();

  return (
    <Container className={theme}>
      <Image>
        <img src='https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='' width='276' height='222' />
      </Image>
      <Contain>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p><strong>{recipe.name}</strong></p>
          {!wishList?.find((item) => item.recipe[15] === recipe.id.toString()) && (
            <ButtonLike type='button' onClick={() => addToFavorite({ user, wishList, recipe, dispatch })}>
              <AiOutlineHeart size={20} />
            </ButtonLike>
          )}
          {wishList?.find((item) => item.recipe[15] === recipe.id.toString()) && (
            <ButtonLike type='button' className='active' onClick={() => removeToFavorite({ user, wishList, recipe, dispatch })}>
              <AiFillHeart size={20} />
            </ButtonLike>
          )}
        </div>
        <span>{`${recipe.price} ${getText('recipe-card.per-plate')}`}</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, beatae dolorem! Error ad dolore esse?</p>
        <ButtonLink type='button'>
          <BsCalendar />
          <span>{getText('recipe-card.add-menu')}</span>
        </ButtonLink>
        <p type='button'>
          <MdTimer />
          <span>{`${recipe.time} ${getText('recipe-card.preparation-time')}`}</span>
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex' }}>
            <AiOutlineLike />
            <span>{recipe.likes}</span>
          </div>
          <ButtonCart
            type='button'
            onClick={() => addToCart({ cart, recipe, dispatch })}
          >
            {getText('recipe-card.add-cart')}
          </ButtonCart>
        </div>
      </Contain>
    </Container>
  );
}

export default RecipeCard;