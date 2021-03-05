import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';

import Modal from '../../containers/Modal/Modal';
import ButtonDefault from './ButtonDefault';
import useSale from '../../../hooks/useSale';

const ButtonPayPal = (props) => {
  const [modal, setModal] = useState(false);
  const [shipping, setShipping] = useState({});
  const { makeSale } = useSale();

  useEffect(() => {
    setShipping(JSON.parse(localStorage.getItem('addressData')));
  }, []);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: data,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    makeSale(shipping, 'P');
    setModal(true);

    return actions.order.capture();
  };

  return (
    <>
      <PayPalButton
        createOrder={(data, actions) => createOrder(`${props.total}`, actions)}
        onApprove={onApprove}
      />

      <Modal isOpen={modal} closeModal={() => setModal(false)}>
        <h2>Foody +</h2>

        <p>¡Su pedido fue recibido!</p>

        <div className="check-icon">
          <img src="https://imgur.com/jMZG9zf.png" alt="check-icon" />
        </div>

        <Link to="/home">
          <ButtonDefault
            primary
            width="100%"
            height="48px"
            margin="20px 0 16px"
          >
            Continuar
          </ButtonDefault>
        </Link>
      </Modal>
    </>
  );
};

export default ButtonPayPal;
