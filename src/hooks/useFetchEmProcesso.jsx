import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { RecipesContext } from '../context/Recipes';

const updateAPI = (title) => {
  if (title === 'comidas') return 'themealdb';
  if (title === 'bebidas') return 'thecocktaildb';
};

const useFetchEmProcesso = (path, id) => {
  const { setFetchResult, setIsFetching } = useContext(RecipesContext);
  const [data, setData] = useState(null);
  const title = path.split('/')[path.split('/').length - 2];
  useEffect(() => {
    setIsFetching(true);
    const getIngredients = async () => {
      const url = `https://www.${updateAPI(title)}.com/api/json/v1/1/lookup.php?i=${id}`;
      const response = await axios.get(url);
      console.log(response);
      const value = response.data.meals || response.data.drinks;
      if (value.length > 400) value.length = 322;
      setData(value);
      setFetchResult(value);
    };
    setIsFetching(false);
    getIngredients();
  }, []);
  return [data];
};

export default useFetchEmProcesso;
