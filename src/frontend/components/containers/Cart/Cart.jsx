//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//Import de layout.
import Layout from '../../layout/Layout';
//Import de iconos.
import { HiOutlineReceiptTax } from 'react-icons/hi';
//Import de componentes.
import ModalCupons from '../../containers/Modal/ModalCupons';
import CartItem from './CartItem';
import ButtonDefault from '../../shared/buttons/ButtonDefault';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';
import useCart from '../../../hooks/useCart';
import useCurrency from '../../../hooks/useCurrency';

// const recipes = [
//   {
//     id: 1,
//     name: 'Pizza italiana',
//     porcions: 1,
//     price: 40,
//     picture: '',
//   },
//   {
//     id: 2,
//     name: 'Hamburguesa',
//     porcions: 1,
//     price: 40,
//     picture: '',
//   },
// ];

// const sale = {
//   subtotal: 80,
//   discount: 0,
//   delivery: 5,
//   total: 85,
// };

const Cart = () => {
  const [modalCupons, setModalCupons] = useState(false);
  const { cart } = useCart();
  const { formaterValue } = useCurrency();
  const { recipes } = cart;
  const openModalCupons = () => setModalCupons(true);
  const closeModalCupons = () => setModalCupons(false);

  return (
    <Layout
      title="Mi Carrito"
      subtitle="Aqui puedes puedes ver todo lo que llevas en tu pedido"
      center={true}
    >
      <StyledHead>
        <h1>Carrito</h1>
      </StyledHead>
      <StyledWrapper>
        <div>
          {recipes.map(({ recipe, count }) => (
            <CartItem key={recipe.id} recipe={recipe} count={count} />
          ))}
        </div>
        <StyledVerticalSep></StyledVerticalSep>
        <div>
          <ButtonDefault primary width="100%" height="50px" margin="4px 0 0" onClick={openModalCupons}>
            <StyledButton>
              <StyledButtonText>Aplicar Cupon</StyledButtonText>
              <HiOutlineReceiptTax size="20px" />
            </StyledButton>
          </ButtonDefault>
          <StyledHorizontalSep></StyledHorizontalSep>
          <StyledDetailsCont>
            <StyledDetailsSpan>Subtotal</StyledDetailsSpan>
            <span>{formaterValue({ mount: cart.total })}</span>
          </StyledDetailsCont>
          <StyledDetailsCont>
            <StyledDetailsSpan>Delivery</StyledDetailsSpan>
            <span>{formaterValue({ mount: cart.total !== 0 ? cart.delivery : 0 })}</span>
          </StyledDetailsCont>
          {cart?.discount > 0 && (
            <StyledDetailsCont>
              <StyledDetailsSpan>Descuento</StyledDetailsSpan>
              <span>{formaterValue({ mount: cart.discount })}</span>
            </StyledDetailsCont>
          )}
          <StyledDetailsCont total>
            <span>Total:</span>
            <span>{formaterValue({ mount: cart.total !== 0 ? (cart.total + cart.delivery ) : 0 })}</span>
          </StyledDetailsCont>

          <Link to="/checkout">
            <ButtonDefault primary width="100%" height="50px" margin="16px 0 0">
              Finalizar Compra
            </ButtonDefault>
          </Link>
          <Link to="/recipes">
            <ButtonDefault
              secondary
              width="100%"
              height="50px"
              margin="16px 0 0"
            >
              Seguir Comprando
            </ButtonDefault>
          </Link>
        </div>
      </StyledWrapper>
      <ModalCupons isOpen={modalCupons} closeModal={closeModalCupons}/>
    </Layout>
  );
};

// =================== ESTILOS CSS ===================
const StyledHead = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 420px;
  width: 100%;

  ${media.desktop} {
    max-width: 100%;
  }
`;
const StyledWrapper = styled.div`
  max-width: 420px;

  h1 {
    align-self: flex-start;
  }

  ${media.desktop} {
    max-width: 100%;
    display: grid;
    grid-template-columns: 1.6fr max-content 1fr;
    grid-gap: 14px;
  }
`;
const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledButtonText = styled.div`
  padding-bottom: 2px;
  margin-right: 16px;
`;
//
const StyledHorizontalSep = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--light-gray);
  margin: 20px 0 10px;
`;
const StyledVerticalSep = styled.div`
  display: none;
  width: 2px;
  height: 100%;
  background-color: var(--light-gray);
  margin: 0 6px 0 0;

  ${media.desktop} {
    display: block;
  }
`;
const StyledDetailsCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  font-size: ${(props) => (props.total ? '1.8rem' : 'var(--normal-font-size)')};
  font-weight: 600;
  color: var(--black-color);
`;
const StyledDetailsSpan = styled.span`
  color: var(--bold-gray);
`;
export default Cart;
