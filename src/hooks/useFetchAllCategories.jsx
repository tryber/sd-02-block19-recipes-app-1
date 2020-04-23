import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchAllCategories = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await axios.get(url);
        const { meals, drinks } = response.data;
        console.log(response.data);
        const values = (drinks || meals).map((elem) => elem.strCategory);
        values.length = 5;
        values.unshift('All');
        setData(values);
      } catch (errorMsg) {
        setError('Erro ao criar os botões, verifique sua Internet!');
      }
      setLoading(false);
    };

    fetchUrl();
  }, [url]);
  return [data, loading, error];
};
export default useFetchAllCategories;
