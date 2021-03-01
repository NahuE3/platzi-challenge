import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaTimes, FaPlus, FaMinus } from  'react-icons/fa';
import Currency from '../Currency';
import { useStateValue } from '../../context';
import useCurrency from '../../hooks/useCurrency';
import { Container, Body, Image, Info, BtnOutline, BtnLink } from './styles';
import { addToCart, removeToCart, deleteToCart } from '../../context/actions';


const RecipeCart = ({ count, recipe }) => {
  const { theme, cart, dispatch } = useStateValue();
  const { formaterValue } = useCurrency();
  // const [currency, setCurrency] = useState({ format: 'en-US', currency: 'USD'});
  const [text] = useTranslation('global');
  return (
    <Container className={theme}>
      <Image>
        <img src='https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='' width='80' height='80' />
      </Image>
      <Body>
        <p><strong>{recipe.name}</strong></p>
        <p><strong>{text('recipe-cart.portions')}</strong></p>
        <BtnOutline
          type='button'
          title={text('recipe-cart.remove')}
          className={theme}
          disabled={count <= 0}
          onClick={() => removeToCart({ cart, recipe, dispatch })}
        >
          <FaMinus />
        </BtnOutline>
        <p>{count}</p>
        <BtnOutline
          type='button'
          className={theme}
          disabled={count >= 99}
          title={text('recipe-cart.add')}
          onClick={() => addToCart({ cart, recipe, dispatch })}
        >
          <FaPlus />
        </BtnOutline>
      </Body>
      <Info>
        <BtnLink
          type='button'
          title={text('recipe-cart.show')}
          className={theme}
        >
          <FaChevronDown />
        </BtnLink>
        <BtnLink
          type='button'
          className={theme}
          title={text('recipe-cart.delete')}
          onClick={() => deleteToCart({ cart, recipe, dispatch })}
        >
          <FaTimes />
        </BtnLink>
        {/* <Currency price={0} currency={currency} /> */}
        <p>{formaterValue({ mount: 0 })}</p>
      </Info>
    </Container>
  );
};

export default RecipeCart;