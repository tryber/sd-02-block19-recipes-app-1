import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RecipesContext } from '../context/Recipes';
import RecipesList from '../components/RecipesList';
import CategoriesList from '../components/CategoriesList';
import useFetchRandom from '../hooks/useFetchRandom';
import './Comidas.css';

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

// // set headerTitle
// const titleHeader = ({ path }) => {
//   const title = path.split('/')[path.split('/').length - 1];
//   setHeaderTitle(title);
//   title === 'comidas' ? setAPI('themealdb') : setAPI('thecocktaildb');
// };


const Bebidas = ({ match }) => {
  const { isFetching, fetchResult, setHeaderTitle, setAPI, setFetchResult } = useContext(RecipesContext);
  useEffect(() => {
    console.log(match.path);
    const title = match.path.split('/')[match.path.split('/').length - 1];
    setHeaderTitle(title);
    setFetchResult(null);
    title === 'comidas' ? setAPI('themealdb') : setAPI('thecocktaildb');
  }, []);
  const [data] = useFetchRandom();
  return (
    <div>
      <Header title={match} />
      <CategoriesList random={data} />
      <div className="MainContainerPage">
        {isFetching ? <h2>Buscando...</h2> : showRecipes(fetchResult)}
      </div>
      <Footer />
    </div>
  );
};

Bebidas.propTypes = {
  match: propTypes.instanceOf(Object).isRequired,
};

export default Bebidas;
