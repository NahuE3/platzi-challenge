import React, { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import Modal from '../../containers/Modal/Modal';

const ButtonPayPal = (props) => {
  const [modal, setModal] = useState(false);

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
    setModal(true);

    return actions.order.capture();
  };

  return (
    <>
      <PayPalButton
        createOrder={(data, actions) => createOrder(`${props.total}`, actions)}
        onApprove={onApprove}
      />

      <Modal isOpen={modal} closeModal={() => setModal(false)} />
    </>
  );
};

export default ButtonPayPal;
