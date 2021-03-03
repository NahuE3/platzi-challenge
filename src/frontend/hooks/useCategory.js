import axios from "axios";
import { useEffect, useState } from "react";
import { useStateValue } from "../context";

const useCategory = ({ category }) => {
  const { recipes } = useStateValue();
  const [categoryList, setCategoryList] = useState(recipes.results);

  const getRecipes = async () => {
    await axios({
      url: '/api/recipes/',
      method: 'post',
      data: { category },
    }).then(({ data }) => {
      const { results } = data.data;
      setCategoryList(results);
    }).catch((error) => {
      setCategoryList(null);
    });
  };

  useEffect(() => {
    if (!category || category === 0) {
      setCategoryList(recipes.results);
      return;
    }
    if (category) {
      getRecipes();
    }
  }, [category]);

  return { categoryList };
}

export default useCategory;