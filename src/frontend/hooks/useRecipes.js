import axios from 'axios';
import { useEffect, useState } from 'react';
import { useStateValue } from '../context';

const useRecipes = ({ category, search, container }) => {
  const { recipes } = useStateValue();
  const [page, setPage] = useState(0);
  const [recipeList, setRecipeList] = useState(recipes.results || []);
  const [loading, setLoading] = useState(false);
  const [final, setFinal] = useState(false);
  const [error, setError] = useState(false);

  if ((typeof (window) === 'undefined')) return { recipeList, loading, final, error };

  if (container) {
    if ((typeof (window) !== 'undefined')) {
      window.onscroll = () => {
        const max = document.body.scrollHeight;
        const scroll = window.pageYOffset + window.innerHeight;
        if(max === scroll && !final) {
          setLoading(true);
          getRecipes({ category, search, page: page + 1 });
          setPage(page + 1);
        }
      };
    };
  };

  const getRecipes = async ({ category, search, page }) => {
    await axios({
      url: '/api/recipes/',
      method: 'post',
      data: { category, page, search },
    }).then(({ data }) => {
      const { results } = data.data;
      if (!results || results?.length === 0) {
        setFinal(true);
      }
      if (page <= 0) {
        setRecipeList(results);
      } else {
        recipeList.push(...results);
        setRecipeList([ ...recipeList ]);
      }
      setLoading(false);
    }).catch((error) => {
      setRecipeList([]);
      setLoading(false);
      setError(true);
    });
  };

  useEffect(() => {
    if ((!category || category === 0) && (!search || search === 0)) {
      setPage(0);
      setError(false);
      setFinal(false);
      setRecipeList(recipes?.results || []);
      return;
    }
    if (category && search) {
      setPage(0);
      setFinal(false);
      setLoading(true);
      getRecipes({ category, search, page: 0 });
    }
    if (category) {
      setPage(0);
      setFinal(false);
      setLoading(true);
      getRecipes({ category, page: 0 });
    }
    if (search) {
      setPage(0);
      setFinal(false);
      setLoading(true);
      getRecipes({ search, page: 0 });
    }
  }, [category, search]);

  return { recipeList, loading, final, error };
}

export default useRecipes;