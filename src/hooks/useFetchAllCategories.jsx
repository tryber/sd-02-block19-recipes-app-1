import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchAllCategories = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchUrl = async () => {
    try {
      const response = await axios.get(url);
      const { meals, cocktails } = response.data;
      const values = (cocktails, meals).map((elem) => Object.values(elem));
      values.length = 5;
      values.unshift(['All']);
      setData(values);
    } catch (errorMsg) {
      setError('Erro ao criar os botões, verifique sua Internet!');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading, error];
};
export default useFetchAllCategories;
