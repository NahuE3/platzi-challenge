import axios from 'axios';
import { useEffect, useState } from 'react';
import { useStateValue } from '../context';
import { addToFavorite as add, removeToFavorite as remove } from '../context/actions';

const useFavorites = () => {
  const { user, wishList, dispatch } = useStateValue();
  const items = wishList?.map((item) => item.recipe) || [];
  const [favorites, setFavorites] = useState([]);

  const getRecipes = async (text) => {
    const [result] = await axios({
      url: '/api/recipes/',
      method: 'post',
      data: { search: text },
    }).then(({ data }) => {
      const { results } = data.data;
      return results;
    }).catch((error) => {
      return [];
    });
    return result;
  };

  useEffect(() => {
    if (wishList.length === 0) {
      setFavorites([]);
    }
    if (wishList.length !== 0) {
      Promise.all(
        items?.map((item) => getRecipes(item))
      ).then((result) => {
        setFavorites(result);
      }).catch((error) => {
        setFavorites([]);
      });
    }
  }, [wishList]);

  const isFavorite = ({ recipe }) => {
    const favorite = wishList?.find((item) => item.recipe === recipe.name);

    if (favorite) return true;

    return false;
  };

  const addToFavorite = ({ recipe }) => {
    add({ user, wishList, recipe, dispatch });
  };

  const removeToFavorite = ({ recipe }) => {
    remove({ user, wishList, recipe, dispatch });
  };

  return { favorites, addToFavorite, removeToFavorite, isFavorite };
}

export default useFavorites;