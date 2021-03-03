import { useStateValue } from '../context';
import { changeCurrency as changer } from '../context/actions';

const useCurrency = () => {
  const { coin, currency, dispatch } = useStateValue();
  const value = coin.find((c) => c.currency === currency);

  const formaterValue = ({ mount }) => {
    return `${new Intl.NumberFormat(value.format, {
      style: 'currency',
      currency: value.currency,
    }).format(mount * value.value)} ${value.currency}`
  }

  const changeCurrency = ({ currency }) => {
    changer({ currency, dispatch });
  }

  return { currency, formaterValue, changeCurrency };
}

export default useCurrency;