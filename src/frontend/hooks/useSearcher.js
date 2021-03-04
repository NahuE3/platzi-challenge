import axios from "axios";
import { useEffect, useState } from "react";
import { useStateValue } from "../context";

const useSearcher = ({ text }) => {
  const { recipes } = useStateValue();
  const [searchList, setSearchList] = useState(recipes.results || []);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getRecipes = async () => {
    await axios({
      url: '/api/recipes/',
      method: 'post',
      data: { search: text },
    }).then(({ data }) => {
      const { results } = data.data;
      if (!results || results.length === 0) {
        setError(true);
      }
      setLoading(false);
      setSearchList(results);
    }).catch((error) => {
      setError(true);
      setLoading(false);
      setSearchList([]);
    });
  };

  useEffect(() => {
    const list = recipes.results;
    if (!text || text === '') {
      setSearchList(list || []);
      return;
    }
    if (text) {
      const listFind = list.filter(({ name, country }) =>
      name?.toLowerCase().includes(text?.toLowerCase()) ||
      country?.toLowerCase().includes(text?.toLowerCase()));
      if (!listFind || listFind?.length === 0) {
        setLoading(true);
        getRecipes();
      } else {
        setSearchList(listFind || []);
      }
    }
  }, [text]);

  return { searchList, loading, error };
}

export default useSearcher;