import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import RecipesList from './RecipesList';
import { RecipesContext } from '../context/Recipes';


const OneRecipe = (fetchResult) => {
  const { idMeal, idDrink } = fetchResult[0];
  const idRecipe = idMeal || idDrink;
  const type = idMeal ? 'comidas' : 'bebidas';
  return <Redirect to={`./receitas/${type}/${idRecipe}`} />;
};

const ShowRecipes = () => {
  const { fetchResult } = useContext(RecipesContext);
  if (fetchResult === null) return <h2>Nada encontrado.</h2>;
  if (fetchResult.length > 1) return <RecipesList />;
  return OneRecipe(fetchResult);
};

export default ShowRecipes;
