import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { BiArrowFromRight } from 'react-icons/bi';
import { GoPrimitiveDot } from 'react-icons/go';
import { useStateValue } from '../../../context';
import RecipeCart from '../../RecipeCart';
import { Container, RecipesContainer, BtnBack, ContainerLeft, ContainerRight } from './styles';
import Currency from '../../Currency';

const Cart = () => {
  const { cart } = useStateValue();
  const history = useHistory();
  // const [currency, setCurrency] = useState({ format: 'en-US', currency: 'USD'});
  const [text] = useTranslation('global');
  // console.log('====================================');
  // console.log(cart);
  // console.log('====================================');

  return (
    <Container>
      <BtnBack type='button' style={{ gridColumnEnd: 'span 2' }} onClick={() => history.goBack()}>
        <BiArrowFromRight />
        <span>{text('cart.back')}</span>
      </BtnBack>
      {cart?.size === 0 && (
        <div style={{ gridColumnEnd: 'span 2' }}>
          <h1>{text('cart.empty')}</h1>
          <Link to='/menu'>{text('cart.empty-search')}</Link>
        </div>
      )}
      {cart?.size > 0 && (
        <>
          <ContainerLeft>
            <div style={{ display: 'flex' }}>
              <GoPrimitiveDot color='#b42469' />
              <GoPrimitiveDot color='#d9d9d9' />
              <GoPrimitiveDot color='#d9d9d9' />
              <GoPrimitiveDot color='#d9d9d9' />
            </div>
            <RecipesContainer>
              {cart?.recipes?.map(({ count, recipe }) => (
                <React.Fragment key={recipe.id}>
                  <RecipeCart count={count} recipe={recipe} />
                </React.Fragment>
              ))}
            </RecipesContainer>
          </ContainerLeft>
          <ContainerRight>
            <p>{text('cart.items')}</p>
            <p>{cart.size}</p>
            <p>{text('cart.items-price')}</p>
            <Currency price={cart.total} />
            <p>{text('cart.delivery')}</p>
            <Currency price={cart.delivery} />
            <p>Total</p>
            <Currency price={cart.total + cart.delivery} />
            <button type='button'>{text('cart.coupon')}</button>
            <button type='button'>{text('cart.continue')}</button>
            <button type='button'>{text('cart.purchase')}</button>
          </ContainerRight>
        </>
      )}
    </Container>
  )
};

export default Cart;