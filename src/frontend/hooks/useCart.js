import { useEffect } from "react";
import { useStateValue } from "../context";
import {
  addToCart as add,
  removeToCart as remove,
  deleteToCart as del,
  setCart,
  removeIngredient as removeItem,
  addIngredient as addItem
} from '../context/actions';
import { useLocalStorage } from "./useLocaleStorage";

const useCart = (set_cart = false) => {
  const { cart, dispatch } = useStateValue();
  const [value, setStorage] = useLocalStorage('cart', { size: 0, total: 0, delivery: 5, recipes: []});

  useEffect(() => {
    if (typeof (window) === 'undefined') return;
    if ((typeof (window) !== 'undefined') && set_cart) {
      dispatch(setCart(value));
    }
  }, [])

  const addToCart = ({ recipe }) => {
    const response = add({ cart, recipe, dispatch });
    if (response) {
      setStorage({ ...response });
    }
  }

  const removeToCart = ({ recipe }) => {
    const response = remove({ cart, recipe, dispatch });
    if (response) {
      setStorage({ ...response });
    }
  }

  const deleteToCart = ({ recipe }) => {
    const response = del({ cart, recipe, dispatch });
    if (response) {
      setStorage({ ...response });
    }
  }

  const addIngredient = ({ recipe, detail, count }) => {
    const response = addItem({ cart, recipe, detail, count, dispatch });
    if (response) {
      setStorage({ ...response });
    }
  };

  const removeIngredient = ({ recipe, detail, count }) => {
    const response = removeItem({ cart, recipe, detail, count, dispatch });
    if (response) {
      setStorage({ ...response });
    }
  };

  return { cart, addToCart, deleteToCart, removeToCart, removeIngredient, addIngredient };
}

export default useCart;