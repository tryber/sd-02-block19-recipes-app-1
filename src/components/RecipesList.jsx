import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';

const RecipesList = () => {
  const { fetchResult } = useContext(RecipesContext);
  return (fetchResult.map(({ strMeal, strMealThumb, strCategory }) => (
    <div key={strMeal} className="MainContainerRecipe">
      <img className="MainImg" src={strMealThumb} alt={strMeal} />
      <p className="MainCategory">{strCategory}</p>
      <p className="MainRecipe">{strMeal}</p>
    </div>
  )));
};

export default RecipesList;
