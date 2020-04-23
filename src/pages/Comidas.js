import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RecipesContext } from '../context/Recipes';
import RecipesList from '../components/RecipesList';
import CategoriesList from '../components/CategoriesList';
import useFetchRandom from '../hooks/useFetchRandom';
import './MainPage.css';

const oneRecipe = (fetchResult) => {
  const { idMeal, idDrink } = fetchResult[0];
  const idRecipe = idMeal || idDrink;
  return <Redirect to={`./receita/${idRecipe}`} />;
};

const showRecipes = (fetchResult = null) => {
  if (fetchResult === null) return <h2>Nada encontrado.</h2>;
  if (fetchResult.length > 1) return <RecipesList />;
  return oneRecipe(fetchResult);
};

const Comidas = ({ match }) => {
  const { isFetching, fetchResult } = useContext(RecipesContext);
  const [data] = useFetchRandom(match);
  return (
    <div>
      <Header />
      <CategoriesList random={data} match={match} />
      <div className="MainContainerPage">
        {isFetching ? <h2>Buscando...</h2> : showRecipes(fetchResult)}
      </div>
      <Footer />
    </div>
  );
};

Comidas.propTypes = {
  match: propTypes.instanceOf(Object).isRequired,
};

export default Comidas;
