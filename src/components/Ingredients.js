import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';

const Ingredients = () => {
  const { fetchResult } = useContext(RecipesContext);

  const ingredients = fetchResult && Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strIngredient'));
  const measures = fetchResult && Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strMeasure')).map((el) => el[1]);

  const ingredientsList = ingredients && ingredients.reduce((acc, cur, index) => {
    const ingredient = `- ${cur[1]} - ${measures[index]}`;
    return [...acc, ingredient];
  }, []);

  return (
    <section className="ingredients-section">
      <h2>Ingredients</h2>
      <div className="gray">
        {ingredientsList.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
      </div>
    </section>
  );
};

export default Ingredients;
