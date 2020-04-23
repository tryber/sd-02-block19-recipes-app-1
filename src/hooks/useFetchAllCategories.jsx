import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { RecipesContext } from '../context/Recipes';

const useFetchAllCategories = (url, { path }) => {
  const { headerTitle } = useContext(RecipesContext);
  const [category, setCategory] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const title = path.split('/')[path.split('/').length - 1];

    if (title === headerTitle) {
      const fetchUrl = async () => {
        try {
          const response = await axios.get(url);
          const { meals, drinks } = response.data;
          const values = (drinks || meals).map((elem) => elem.strCategory);
          values.length = 5;
          values.unshift('All');
          setCategory(values);
        } catch (errorMsg) {
          setError('Erro ao criar os botões, verifique sua Internet!');
        }
        setLoading(false);
      };
      fetchUrl();
    }
  }, [url, headerTitle, path]);
  return [category, loading, error];
};
export default useFetchAllCategories;
