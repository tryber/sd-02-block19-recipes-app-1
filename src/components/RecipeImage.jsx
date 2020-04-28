import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';

const RecipeImage = () => {
  const { fetchResult } = useContext(RecipesContext);
  return (
    fetchResult
    && fetchResult
      .map(({
        strMeal, strDrink, strMealThumb, strDrinkThumb,
      }) => (
        <section className="top-image-section">
          <img
            className="top-image"
            src={strMealThumb || strDrinkThumb}
            alt={strMeal || strDrink}
            data-testid="recipe-photo"
          />
        </section>
      ))
  );
};

export default RecipeImage;
