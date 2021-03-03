import axios from "axios";
import { useEffect, useState } from "react";
import { useStateValue } from "../context";

const useFavorites = () => {
  const { wishList } = useStateValue();
  const items = wishList.map((item) => item.recipe);
  const [favorites, setFavorites] = useState();

  const getRecipes = async (text) => {
    const [result] = await axios({
      url: '/api/recipes/',
      method: 'post',
      data: { search: text },
    }).then(({ data }) => {
      const { results } = data.data;
      return results;
    }).catch((error) => {});
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

  return { favorites };
}

export default useFavorites;