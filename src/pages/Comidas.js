import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RecipesContext } from '../context/Recipes';
import ShowRecipes from '../components/ShowRecipes';
import CategoriesList from '../components/CategoriesList';
import useFetchRandom from '../hooks/useFetchRandom';
import './MainPage.css';

const Comidas = ({ match }) => {
  const { isFetching, setExplorar } = useContext(RecipesContext);
  const [data] = useFetchRandom(match);

  useEffect(() => (() => {
    setExplorar(false);
  }));

  return (
    <div>
      <Header />
      <CategoriesList random={data} match={match} data-testid="categories-component" />
      <div className="MainContainerPage">
        {isFetching ? <h2>Buscando...</h2> : <ShowRecipes />}
      </div>
      <Footer />
    </div>
  );
};

Comidas.propTypes = {
  match: propTypes.instanceOf(Object).isRequired,
};

export default Comidas;
