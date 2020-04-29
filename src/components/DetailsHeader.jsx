import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';
import '../pages/Detalhes.css';

const DetailsHeader = () => {
  const { fetchResult } = useContext(RecipesContext);
  return (
    fetchResult
    && fetchResult
      .map(({
        strMeal, strDrink, strCategory, strAlcoholic,
      }) => (
        <section className="title-section" data-testid="recipe-title" key={strMeal || strDrink}>
          <h1 className="recipe-title">{strMeal || strDrink}</h1>
          <h3 className="recipe-subtitle">{strCategory || strAlcoholic}</h3>
        </section>
      ))
  );
};

export default DetailsHeader;
