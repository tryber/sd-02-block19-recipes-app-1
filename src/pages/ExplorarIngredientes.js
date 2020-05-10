import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { RecipesContext } from '../context/Recipes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useFetchIngredients from '../hooks/useFetchIngredients';
import ExplorarUtils from '../services/ExplorarUtils';
import './ExplorarIngredientes.css';

const ExplorarIngredientes = ({ match }) => {
  const history = useHistory();
  const title = match.path.split('/')[match.path.split('/').length - 1];
  const {
    setHeaderTitle, isFetching, API, setFetchResult, setExplorar,
  } = useContext(RecipesContext);
  useEffect(() => { setHeaderTitle(`Explorar - ${title}`); }, []);
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
              onClick={(() => ExplorarUtils(
                strIngredient || strIngredient1, API, setFetchResult, setExplorar, history,
              ))}
            >
              <img
                src={`https://www.${API}.com/images/ingredients/${strIngredient || strIngredient1}-Small.png`}
                alt={strIngredient || strIngredient1}
                data-testid={`${strIngredient || strIngredient1}-card-img`}
              />
              <p className="ExplorarIngredientesText">Ingredient</p>
              <p
                className="ExplorarIngredientesTitle"
                data-testid={`${strIngredient || strIngredient1}-card-name`}
              >
                {strIngredient || strIngredient1}
              </p>
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
