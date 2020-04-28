import axios from 'axios';

const handleRedirect = (history, API) => {
  if (API === 'themealdb') {
    history.push('/receitas/comidas');
  }
  if (API === 'thecocktaildb') {
    history.push('/receitas/bebidas');
  }
};

const ExplorarUtils = (ingredient, API, setFetchResult, setExplorar, history) => {
  const url = `https://www.${API}.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const fetchIngredientsArray = async () => {
    const response = await axios.get(url)
      .catch((error) => console.log(error));
    const values = response.data.meals || response.data.drinks || null;
    setFetchResult(values);
    setExplorar(true);
    handleRedirect(history, API);
  };
  fetchIngredientsArray();
};

export default ExplorarUtils;
