import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';

const RecipeImage = () => {
  const { fetchResult } = useContext(RecipesContext);
  return (
    <div>
      {fetchResult
        && fetchResult
          .map(({
            strMeal,
            strDrink,
            strMealThumb,
            strDrinkThumb,
          }) => (
            <img
              className="top-image"
              src={strMealThumb || strDrinkThumb}
              alt={strMeal || strDrink}
              data-testid="recipe-photo"
            />
          ))}
    </div>
  );
};
export default RecipeImage;