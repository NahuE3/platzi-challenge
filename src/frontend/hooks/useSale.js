import { useState } from 'react';
import { useStateValue } from '../context';
import { makeSale as sale } from '../context/actions';

const useSale = () => {
  const { cart, user, dispatch } = useStateValue();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const makeSale = async ({ shipping, payment }) => {
    setLoading(true);
    try {
      const result = await sale({ cart, user, shipping, payment, dispatch });
      if (!result) {
        setError(false);
      }
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return { makeSale, loading, error };
};

export default useSale;
