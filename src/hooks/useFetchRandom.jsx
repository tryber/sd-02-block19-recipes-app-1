import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { RecipesContext } from '../context/Recipes';

const useFetchRandom = () => {
  const { API, requestOk } = useContext(RecipesContext);
  const [data, setData] = useState();

  useEffect(() => {
    const value = [];
    const fetchRandom = async () => {
      const url = `https://www.${API}.com/api/json/v1/1/random.php`;
      const response = await axios.get(url);
      const { meals, cocktails } = response.data;
      const actual = (meals[0] || cocktails[0]);
      value.push(actual);

      if (value.length === 12) {
        setData(value);
        requestOk(value);
      }
    };
    for (let i = 0; i < 12; i += 1) {
      fetchRandom();
    }
  }, []);
  return [data];
};

export default useFetchRandom;
