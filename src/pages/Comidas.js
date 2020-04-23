import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RecipesContext } from '../context/Recipes';
import ShowRecipes from '../components/ShowRecipes';
import CategoriesList from '../components/CategoriesList';
import useFetchRandom from '../hooks/useFetchRandom';
import './MainPage.css';

const Comidas = ({ match }) => {
  const { isFetching } = useContext(RecipesContext);
  const [data] = useFetchRandom(match);
  return (
    <div>
      <Header data-testid="header" />
      <CategoriesList random={data} match={match} data-testid="categories-component" />
      <div className="MainContainerPage">
        {isFetching ? <h2>Buscando...</h2> : <ShowRecipes />}
      </div>
      <Footer data-testid="footer" />
    </div>
  );
};

Comidas.propTypes = {
  match: propTypes.instanceOf(Object).isRequired,
};

export default Comidas;
