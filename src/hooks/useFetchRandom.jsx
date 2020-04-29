import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { RecipesContext } from '../context/Recipes';

const useFetchRandom = ({ path }) => {
  const {
    API, requestOk, headerTitle, setIsFetching, setAPI, explorar, setRandomic,
  } = useContext(RecipesContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const title = path.split('/')[path.split('/').length - 1];
    if (title === 'comidas' && API !== 'themealdb') setAPI('themealdb');
    if (title === 'explorar' && API !== 'themealdb') setAPI('themealdb');
    if (title === 'bebidas' && API !== 'thecocktaildb') setAPI('thecocktaildb');
    const value = [];
    if ((title === headerTitle || title === 'area') && !explorar) {
      setIsFetching(true);
      const fetchRandom = async () => {
        const url = `https://www.${API}.com/api/json/v1/1/random.php`;
        const response = await axios.get(url);
        const { meals = [], drinks = [] } = response.data;
        const actual = (meals[0] || drinks[0]);
        value.push(actual);
        if (value.length === 12) {
          setData(value);
          setRandomic(value);
          requestOk(value);
          console.log('trocando', API);
        }
      };
      for (let i = 0; i < 12; i += 1) {
        fetchRandom();
      }
    }
  }, [API, path, headerTitle]);
  return [data];
};

export default useFetchRandom;
