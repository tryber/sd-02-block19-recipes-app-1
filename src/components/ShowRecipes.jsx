import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipesList from './RecipesList';
import { RecipesContext } from '../context/Recipes';

export const oneRecipe = ({ idMeal, idDrink }) => {
  const idRecipe = idMeal || idDrink;
  const type = idMeal ? 'comidas' : 'bebidas';
  console.log(`/receitas/${type}/${idRecipe}`)
  return <Redirect to={`/receitas/${type}/${idRecipe}`} />;
};

const ShowRecipes = () => {
  const { fetchResult } = useContext(RecipesContext);
  if (fetchResult === null) return <h2>Nada encontrado.</h2>;
  if (fetchResult.length > 1) return <RecipesList />;
  return oneRecipe(fetchResult[0]);
};

oneRecipe.propTypes = {
  idMeal: PropTypes.number,
  idDrink: PropTypes.number,
};

oneRecipe.defaultProps = {
  idMeal: undefined,
  idDrink: undefined,
};

export default ShowRecipes;
