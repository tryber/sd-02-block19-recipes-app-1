import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import axios from 'axios';
import { RecipesContext } from '../context/Recipes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useFetchIngredients from '../hooks/useFetchIngredients';
import './ExplorarIngredientes.css';

const handleRedirect = (history, API) => {
  if (API === 'themealdb') {
    history.push('/receitas/comidas');
  }
  if (API === 'thecocktaildb') {
    history.push('/receitas/bebidas');
  }
};

const handleClick = (ingredient, API, setFetchResult, setExplorar, history) => {
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

const ExplorarIngredientes = ({ match }) => {
  const history = useHistory();
  const title = match.path.split('/')[match.path.split('/').length - 1];
  const {
    setHeaderTitle, isFetching, API, setFetchResult, setExplorar,
  } = useContext(RecipesContext);
  useEffect(() => {
    setHeaderTitle(`Explorar - ${title}`);
  }, []);
  const [data] = useFetchIngredients(match);
  return (
    <div>
      <Header isDisable />
      <div className="ExplorarIngredientesContainer">
        {isFetching ? <h2>Buscando...</h2>
          : (data && data.map(({ strIngredient1, strIngredient }) => (
            <button
              key={`${strIngredient || strIngredient1} - ${Math.random()}`}
              type="button"
              className="ExplorarIngredientesList"
              onClick={(
                () => handleClick(strIngredient || strIngredient1, API, setFetchResult, setExplorar, history))}
            >
              <img
                src={`https://www.${API}.com/images/ingredients/${strIngredient || strIngredient1}-Small.png`}
                alt={strIngredient || strIngredient1}
              />
              <p className="ExplorarIngredientesText">Ingredient</p>
              <p className="ExplorarIngredientesTitle">{strIngredient || strIngredient1}</p>
            </button>
          )))}
      </div>
      <Footer />
    </div>
  );
};

ExplorarIngredientes.propTypes = {
  match: propTypes.instanceOf(Object).isRequired,
};

export default ExplorarIngredientes;
