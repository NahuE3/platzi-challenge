import axios from 'axios';
import { useEffect, useState } from 'react';
import { useStateValue } from '../context';

const useCategory = ({ category, container }) => {
  const { recipes } = useStateValue();
  const [page, setPage] = useState(0);
  const [categoryList, setCategoryList] = useState(recipes.results || []);
  const [loading, setLoading] = useState(false);
  const [final, setFinal] = useState(false);
  const [error, setError] = useState(false);

  if (container) {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      window.onscroll = () => {
        const max = document.body.scrollHeight;
        const scroll = window.pageYOffset + window.innerHeight;
        if(max === scroll && !final) {
          setLoading(true);
          getRecipes({ category, page: page + 1 });
          setPage(page + 1);
        }
      };
    };
  };

  const getRecipes = async ({ category, page }) => {
    await axios({
      url: '/api/recipes/',
      method: 'post',
      data: { category, page },
    }).then(({ data }) => {
      const { results } = data.data;
      if (!results || results?.length === 0) {
        setFinal(true);
      }
      if (page <= 0) {
        setCategoryList(results);
      } else {
        categoryList.push(...results);
        setCategoryList([ ...categoryList ]);
      }
      setLoading(false);
    }).catch((error) => {
      setCategoryList([]);
      setLoading(false);
      setError(true);
    });
  };

  useEffect(() => {
    if (!category || category === 0) {
      setPage(0);
      setError(false);
      setFinal(false);
      setCategoryList(recipes?.results || []);
      return;
    }
    if (category) {
      setPage(0);
      setFinal(false);
      setLoading(true);
      getRecipes({ category, page: 0 });
    }
  }, [category]);

  return { categoryList, loading, final, error };
}

export default useCategory;