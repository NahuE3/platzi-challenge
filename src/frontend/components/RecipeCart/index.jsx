import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaTimes, FaPlus, FaMinus, FaChevronUp } from  'react-icons/fa';
import Currency from '../Currency';
import { useStateValue } from '../../context';
import useCurrency from '../../hooks/useCurrency';
import { Container, Body, Image, Info, BtnOutline, BtnLink } from './styles';
// import { addToCart, removeToCart, deleteToCart } from '../../context/actions';
import useLanguage from '../../hooks/useLanguage';
import useRecipePrice from '../../hooks/useRecipePrice';
import useCart from '../../hooks/useCart';
import { addIngredient, removeIngredient } from '../../context/actions';


const RecipeCart = ({ count, recipe }) => {
  const { theme, cart, dispatch } = useStateValue();
  const { formaterValue } = useCurrency();
  const { getText } = useLanguage();
  const { total } = useRecipePrice({ recipe, count });
  const [active, setActive] = useState(false);
  const { addToCart, removeToCart, deleteToCart } = useCart();

  return (
    <Container className={theme}>
      <Image>
        <img src='https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='' width='80' height='80' />
      </Image>
      <Body>
        <p><strong>{recipe.name}</strong></p>
        <p><strong>{getText('recipe-cart.portions')}</strong></p>
        <BtnOutline
          type='button'
          title={getText('recipe-cart.remove')}
          className={theme}
          disabled={count <= 0}
          onClick={() => removeToCart({ recipe })}
        >
          <FaMinus />
        </BtnOutline>
        <p>{count}</p>
        <BtnOutline
          type='button'
          className={theme}
          disabled={count >= 99 || total <= 0}
          title={getText('recipe-cart.add')}
          onClick={() => addToCart({ recipe })}
        >
          <FaPlus />
        </BtnOutline>
      </Body>
      <Info>
        <BtnLink
          type='button'
          title={getText('recipe-cart.show')}
          onClick={() => setActive(!active)}
          className={theme}
        >
          {!active && (
            <FaChevronDown />
          )}
          {active && (
            <FaChevronUp />
          )}
        </BtnLink>
        <BtnLink
          type='button'
          className={theme}
          title={getText('recipe-cart.delete')}
          onClick={() => deleteToCart({ recipe })}
        >
          <FaTimes />
        </BtnLink>
        {/* <Currency price={0} currency={currency} /> */}
        <p>{formaterValue({ mount: total })}</p>
      </Info>
      {(active && recipe.detail.length > 0) && (
        <div
          style={{
            display: 'grid',
            gridColumnEnd: 'span 3',
            justifySelf: 'stretch',
            gap: '10px',
            padding: '10px',
            gridTemplateColumns: 'repeat(3, 1fr)',
            justifyItems: 'center',
          }}
        >
          <p><strong>Ingrediente</strong></p>
          <p><strong>Precio</strong></p>
          <p><strong>Agregar</strong></p>
          {recipe.detail.map((detail) => (
            <>
              <p style={{ justifySelf: 'flex-start' }}><strong>{detail.name}</strong></p>
              <p>{formaterValue({ mount: detail.price })}</p>
              {detail.is_active && (
                <input
                  type='checkbox'
                  checked={detail.is_active} onClick={() => removeIngredient({ cart, recipe, detail, count, dispatch })}
                />
              )}
              {!detail.is_active && (
                <input
                  type='checkbox'
                  checked={detail.is_active} onClick={() => addIngredient({ cart, recipe, detail, count, dispatch })}
                />
              )}
            </>
          ))}
        </div>
      )}
    </Container>
  );
};

export default RecipeCart;