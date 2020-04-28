import { useContext, useEffect } from 'react';
import axios from 'axios';
import { RecipesContext } from '../context/Recipes';

const useFetchRecomendations = (API) => {
  const { recomendations, setRecomendations } = useContext(RecipesContext);

  useEffect(() => {
    const value = [];
    if (API) {
      const fetchRandom = async () => {
        const url = `https://www.${API}.com/api/json/v1/1/random.php`;
        const response = await axios.get(url);
        const { meals = [], drinks = [] } = response.data;
        const actual = (meals[0] || drinks[0]);
        value.push(actual);
        if (value.length === 6) {
          setRecomendations(value);
        }
      };
      for (let i = 0; i < 6; i += 1) {
        fetchRandom();
      }
    }
  }, [API]);
  return [recomendations];
};

export default useFetchRecomendations;
