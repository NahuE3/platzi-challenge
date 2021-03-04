import { useStateValue } from "../context";
import { addToCart as add, removeToCart as remove, deleteToCart as del } from '../context/actions';

const useCart = () => {
  const { cart, dispatch } = useStateValue();

  const addToCart = ({ recipe }) => {
    add({ cart, recipe, dispatch });
  }

  const removeToCart = ({ recipe }) => {
    remove({ cart, recipe, dispatch });
  }

  const deleteToCart = ({ recipe }) => {
    del({ cart, recipe, dispatch });
  }

  return { cart, addToCart, deleteToCart, removeToCart };
}

export default useCart;