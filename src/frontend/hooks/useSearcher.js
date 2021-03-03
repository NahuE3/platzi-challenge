import axios from "axios";
import { useEffect, useState } from "react";
import { useStateValue } from "../context";

const useSearcher = ({ text }) => {
  const { recipes } = useStateValue();
  const [searchList, setSearchList] = useState(recipes.results);

  const getRecipes = async () => {
    await axios({
      url: '/api/recipes/',
      method: 'post',
      data: { search: text },
    }).then(({ data }) => {
      const { results } = data.data;
      setSearchList(results);
    }).catch((error) => {
      setSearchList(null);
    });
  };

  useEffect(() => {
    const list = recipes.results;
    if (!text || text === '') {
      setSearchList(list);
      return;
    }
    if (text) {
      const listFind = list.filter(({ name, country }) =>
      name?.toLowerCase().includes(text?.toLowerCase()) ||
      country?.toLowerCase().includes(text?.toLowerCase()));
      if (!listFind || listFind?.length === 0) {
        getRecipes();
      } else {
        setSearchList(listFind);
      }
    }
  }, [text]);

  return { searchList };
}

export default useSearcher;