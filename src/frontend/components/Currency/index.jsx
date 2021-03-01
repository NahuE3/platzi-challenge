import React from 'react';
import { useStateValue } from '../../context';

const Currency = ({ price }) => {
  const { coin, currency } = useStateValue();
  const value = coin.find((c) => c.currency === currency);

  return (
    <p>
      {`${new Intl.NumberFormat(value.format, {
        style: "currency",
        currency: value.currency,
      }).format(price * value.value)} ${value.currency}`}
    </p>
  );
}

export default Currency;