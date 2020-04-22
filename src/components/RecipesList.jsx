import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';

const RecipesList = () => {
  const { fetchResult } = useContext(RecipesContext);
  return (fetchResult.map(({
    strMeal, strDrink, strMealThumb, strDrinkThumb, strCategory,
  }) => (
    <div key={strMeal} className="MainContainerRecipe">
      <img className="MainImg" src={strMealThumb || strDrinkThumb} alt={strMeal || strDrink} />
      <p className="MainCategory">{strCategory}</p>
      <p className="MainRecipe">{strMeal || strDrink}</p>
    </div>
  )));
};

export default RecipesList;