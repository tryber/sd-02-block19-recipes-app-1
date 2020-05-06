import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { RecipesContext } from '../context/Recipes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Explorar.css';

const explorarBtn = (btnValue, recipeType, newPath) => {
  if (recipeType === 'bebidas' && newPath === 'area') {
    return null;
  }
  return (
    <Link className="ExplorarLink" to={`/explorar/${recipeType}/${newPath}`}>
      <button className="ExplorarBtn" type="button">
        {btnValue}
      </button>
    </Link>
  );
};

const handleRedirect = (history, API, id) => {
  if (API === 'themealdb') {
    history.push(`/receitas/comidas/${id}`);
  }
  if (API === 'thecocktaildb') {
    history.push(`/receitas/bebidas/${id}`);
  }
};

const fetchToRandomDetails = async (setFetchResult, history, API) => {
  const response = await axios.get(`https://www.${API}.com/api/json/v1/1/random.php`);
  const value = response.data.meals || response.data.drinks;
  const id = value[0].idMeal || value[0].idDrink;
  setFetchResult(value[0]);
  handleRedirect(history, API, id);
};

const randomBtn = (btnValue, setFetchResult, history, API) => (
  <div className="ExplorarLink">
    <button
      className="ExplorarBtn"
      type="button"
      onClick={() => fetchToRandomDetails(setFetchResult, history, API)}
    >
      {btnValue}
    </button>
  </div>
);

const ExplorarTipos = ({ match }) => {
  console.log(match);
  const history = useHistory();
  const title = match.path.split('/')[match.path.split('/').length - 1];
  const {
    API, setHeaderTitle, setAPI, setIsFetching, setFetchResult,
  } = useContext(RecipesContext);
  useEffect(() => {
    setHeaderTitle(`Explorar - ${title}`);
    if (title === 'comidas' && title !== API) setAPI('themealdb');
    if (title === 'bebidas' && title !== API) setAPI('thecocktaildb');
    setIsFetching(true);
    setFetchResult(null);
  }, []);

  return (
    <div>
      <Header isDisable />
      <div className="ExplorarContainer">
        {explorarBtn('Por ingredientes', title, 'ingredientes')}
        {explorarBtn('Por local de origem', title, 'area')}
        {randomBtn('Me surpreenda!', setFetchResult, history, API)}
      </div>
      <Footer />
    </div>
  );
};

ExplorarTipos.propTypes = {
  match: propTypes.instanceOf(Object).isRequired,
};

export default ExplorarTipos;
