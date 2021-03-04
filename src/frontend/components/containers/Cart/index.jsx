import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { BiArrowFromRight } from 'react-icons/bi';
import { GoPrimitiveDot } from 'react-icons/go';
// import { useStateValue } from '../../../context';
import RecipeCart from '../../RecipeCart';
import { Container, RecipesContainer, BtnBack, ContainerLeft, ContainerRight } from './styles';
import Currency from '../../Currency';
import useCart from '../../../hooks/useCart';
// import { makeSale } from '../../../context/actions';
import useSale from '../../../hooks/useSale';

const CartForm = ({ setShipping }) => {
  const { register, handleSubmit, errors } = useForm();
  // const [userData, setUserData] = useState({});
  // "first_name": "ivan",
  //   "last_name": "cordoba",
  //   "country": "arg",
  //   "street_address": "calle 123",
  //   "city": "SL",
  //   "state": "SL",
  //   "zip_code": "5700"
  const onSubmit = (data) => {
    setShipping({ ...data });
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'grid', padding: '0 25px', gap: '25px' }}
    >
      <p>Campos requeridos *</p>
      <label htmlFor='UserName'>
        <p>
          <span>Nombre *</span>
        </p>
        <input
          type='text'
          name='first_name'
          id='UserName'
          placeholder='Digita tu nombre'
          ref={register({
            required: 'Campo requerido',
          })}
        />
        {errors?.first_name && <span>{errors?.first_name?.message}</span>}
      </label>
      <label htmlFor='UserLastname'>
        <p>
          <span>Nombre *</span>
        </p>
        <input
          type='text'
          name='last_name'
          id='UserLastname'
          placeholder='Digita ts apellidos'
          ref={register({
            required: 'Campo requerido',
          })}
        />
        {errors?.last_name && <span>{errors?.last_name?.message}</span>}
      </label>
      <label htmlFor='EmailAddres'>
        <p>
          <span>Correo electronico *</span>
        </p>
        <input
          type='text'
          name='email'
          id='EmailAddres'
          placeholder='Digita un correo electronico'
          ref={register({
            required: 'Campo requerido',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Correo no valido',
            },
          })}
        />
        {errors?.email && <span>{errors?.email?.message}</span>}
      </label>
      <label htmlFor='Country'>
        <p>
          <span>Country *</span>
        </p>
        <input
          id='Country'
          type='text'
          name='country'
          placeholder='Digita tu pais'
          ref={register({
            required: 'Campo requerido',
          })}
        />
        {errors?.country && <span>{errors?.country?.message}</span>}
      </label>
      <label htmlFor='Street'>
        <p>
          <span>Street *</span>
        </p>
        <input
          id='Street'
          type='text'
          name='street_address'
          placeholder='Digita una calle'
          ref={register({
            required: 'Campo requerido',
          })}
        />
        {errors?.street_address && <span>{errors?.street_address?.message}</span>}
      </label>
      <label htmlFor='City'>
        <p>
          <span>city *</span>
        </p>
        <input
          id='City'
          type='text'
          name='city'
          placeholder='Digita una ciudad'
          ref={register({
            required: 'Campo requerido',
          })}
        />
        {errors?.city && <span>{errors?.city?.message}</span>}
      </label>
      <label htmlFor='State'>
        <p>
          <span>state *</span>
        </p>
        <input
          id='State'
          type='text'
          name='state'
          placeholder='Digita tu estado/alcaldia'
          ref={register({
            required: 'Campo requerido',
          })}
        />
        {errors?.state && <span>{errors?.state?.message}</span>}
      </label>
      <label htmlFor='ZIP'>
        <p>
          <span>Phone number *</span>
        </p>
        <input
          type='number'
          name='zip_code'
          id='ZIP'
          placeholder='Digita tu codigo postal'
          ref={register({
            required: 'Campo requerido',
          })}
        />
        {errors?.zip_code && <span>{errors?.zip_code?.message}</span>}
      </label>
      <button
        type='submit'
        disabled={(errors.username || errors.password || errors.email) && true}
      >
        Guardar
      </button>
    </form>
  );
};

const Cart = () => {
  // const { dispatch } = useStateValue();
  const history = useHistory();
  // const [currency, setCurrency] = useState({ format: 'en-US', currency: 'USD'});
  const [text] = useTranslation('global');
  const { cart } = useCart();
  const [step, setStep] = useState(0);
  const [payment, setPayment] = useState('');
  const [shipping, setShipping] = useState({});
  const { makeSale, loading } = useSale();
  // console.log('====================================');
  // console.log(cart);
  // console.log('====================================');

  const handlerFinishSale = () => {
    makeSale({ shipping, payment });
    setStep(step + 1);
  };

  const handlerShippingData = () => {
    setShipping({
      first_name: 'ivan',
      last_name: 'cordoba',
      country: 'arg',
      street_address: 'calle 123',
      city: 'SL',
      state: 'SL',
      zip_code: '5700',
      email: 'example@example.com'
    });
    setStep(step + 1);
  }

  return (
    <Container>
      <BtnBack type='button' style={{ gridColumnEnd: 'span 2' }} onClick={() => history.goBack()}>
        <BiArrowFromRight />
        <span>{text('cart.back')}</span>
      </BtnBack>
      {(cart?.recipes.length === 0 && step === 0) && (
        <div style={{ gridColumnEnd: 'span 2' }}>
          <h1>{text('cart.empty')}</h1>
          <Link to='/menu'>{text('cart.empty-search')}</Link>
        </div>
      )}
      {(cart?.recipes.length === 0 && step > 0) && (
        <div style={{ gridColumnEnd: 'span 2' }}>
          <h1>Compra finalizada</h1>
          <Link to='/menu'>Continuar comprando</Link>
        </div>
      )}
      {cart?.recipes.length > 0 && (
        <>
          {step === 0 && (
            <ContainerLeft>
              <div style={{ display: 'flex' }}>
                <GoPrimitiveDot color='#b42469' />
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
          )}
          {step === 1 && (
            <ContainerLeft>
              <div style={{ display: 'flex' }}>
                <GoPrimitiveDot color='#d9d9d9' />
                <GoPrimitiveDot color='#b42469' />
                <GoPrimitiveDot color='#d9d9d9' />
              </div>
              <CartForm setShipping={setShipping} />
            </ContainerLeft>
          )}
          {step === 2 && (
            <ContainerLeft>
              <div style={{ display: 'flex' }}>
                <GoPrimitiveDot color='#d9d9d9' />
                <GoPrimitiveDot color='#d9d9d9' />
                <GoPrimitiveDot color='#b42469' />
              </div>
              <div style={{ display: 'grid' }}>
                <h1>Selleciona el metodo de pago</h1>
                <button type='button' style={{ background: `${payment === 'C' ? 'red': ''}` }} onClick={() => setPayment('C')}>Tarjeta</button>
                <button type='button' style={{ background: `${payment === 'B' ? 'red' : ''}` }} onClick={() => setPayment('B')}>Criptomoneda</button>
                <button type='button' style={{ background: `${payment === 'P' ? 'red' : ''}` }} onClick={() => setPayment('P')}>Paypal</button>
              </div>
            </ContainerLeft>
          )}
          {loading && (
            <div style={{ gridColumnEnd: 'span 2'}}>
              <h1>Loading ...</h1>
            </div>
          )}
          {!loading && (
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
              {step === 0 && (
                <button type='button' disabled={parseFloat(cart.total) <= 0} onClick={() => setStep(step + 1)}>{text('cart.purchase')}</button>
              )}
              {step === 1 && (
                <button type='button' onClick={handlerShippingData}>Continuar</button>
              )}
              {step === 2 && (
                <button type='button' onClick={handlerFinishSale}>Finalizar compra</button>
              )}
              {step === 3 && (
                <button type='button' onClick={() => setStep(0)}>{text('cart.continue')}</button>
              )}
            </ContainerRight>
          )}
        </>
      )}
    </Container>
  )
};

export default Cart;