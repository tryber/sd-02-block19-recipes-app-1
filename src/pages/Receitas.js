import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RecipesContext } from '../context/Recipes';
import RecipesList from './RecipesList';

const oneRecipe = (fetchResult) => {
  const { idMeal, idDrink } = fetchResult[0];
  const idRecipe = idMeal || idDrink;
  return <Redirect to={`./receita/${idRecipe}`} />;
};

const showRecipes = (fetchResult) => {
  if (fetchResult === null) return <h2>Nada encontrado.</h2>;
  if (fetchResult.length > 1) return <RecipesList />;
  return oneRecipe(fetchResult);
};

const Receitas = () => {
  const { isFetching, fetchResult } = useContext(RecipesContext);

  return (
    <div>
      <Header />
      {isFetching ? <h2>Buscando...</h2> : showRecipes(fetchResult)}
      <Footer />
    </div>
  );
};

export default Receitas;
