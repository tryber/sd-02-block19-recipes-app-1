import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';

const RecipesList = () => {

  const { fetchResult, setRecipeId } = useContext(RecipesContext);
  return (fetchResult.map(({
    idMeal, idDrink, strMeal = '', strDrink = '', strMealThumb = '', strDrinkThumb = '', strCategory,
  }) => (
    <button
      key={`${strMeal}-${Math.random() * 32}`}
      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      type="button"
      className="MainContainerRecipe"
      onClick={() => setRecipeId(idMeal || idDrink)}
    >
      <img className="MainImg" src={strMealThumb || strDrinkThumb} alt={strMeal || strDrink} />
      <p className="MainCategory">{strCategory}</p>
      <p className="MainRecipe">{strMeal || strDrink}</p>
    </button>
  )));
};

export default RecipesList;
