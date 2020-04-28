import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import { RecipesContext } from '../context/Recipes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useFetchIngredients from '../hooks/useFetchIngredients';
import './ExplorarIngredientes.css';

const ExplorarIngredientes = ({ match }) => {
  const title = match.path.split('/')[match.path.split('/').length - 1];
  const { setHeaderTitle, isFetching, API } = useContext(RecipesContext);
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
