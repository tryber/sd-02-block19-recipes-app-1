import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';

const RecipesList = () => {
  const { fetchResult, setRecipeId } = useContext(RecipesContext);
  return (fetchResult.map(({
    idMeal, idDrink, strMeal = '', strDrink = '', strMealThumb = '', strDrinkThumb = '', strCategory,
  }, index) => (
    <button
      key={`${strMeal}-${Math.random() * 32}`}
      type="button"
      className="MainContainerRecipe"
      onClick={() => setRecipeId(idMeal || idDrink)}
    >
      <img
        className="MainImg"
        src={strMealThumb || strDrinkThumb}
        alt={strMeal || strDrink}
        data-tesid={`${index}-card-img`}
      />
      <p className="MainCategory" data-testid={`${index}-card-category`}>{strCategory}</p>
      <p className="MainRecipe" data-testid={`${index}-card-name`}>{strMeal || strDrink}</p>
    </button>
  )));
};

export default RecipesList;
