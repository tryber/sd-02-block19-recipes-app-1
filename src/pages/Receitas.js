import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RecipesContext } from '../context/Recipes';
import RecipesList from '../components/RecipesList';

const OneRecipe = (fetchResult) => {
  const { setRecipeId } = useContext(RecipesContext);
  const { idMeal, idDrink } = fetchResult[0];
  const idRecipe = idMeal || idDrink;
  setRecipeId(idRecipe);
  return <Redirect to={`./receita/${idRecipe}`} />;
};

const showRecipes = (fetchResult) => {
  if (fetchResult === null) return <h2>Nada encontrado.</h2>;
  if (fetchResult.length > 1) return <RecipesList />;
  return OneRecipe(fetchResult);
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
