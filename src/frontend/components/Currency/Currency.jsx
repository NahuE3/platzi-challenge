import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Currency = ({ price, currency }) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    axios.get("https://api.exchangeratesapi.io/latest?base=USD").then(({ data }) => {
      if (currency.currency === 'MXN') {
        setValue(data.rates.MXN);
      } else if (currency.currency === 'COP') {
        setValue(3,647.01);
      } else {
        setValue(data.rates.USD);
      }
    });
  }, [currency]);

  return (
    <p>
      {`${new Intl.NumberFormat(currency.format, {
        style: "currency",
        currency: currency.currency,
      }).format(price * value)} ${currency.currency}`}
    </p>
  );
}

export default Currency;