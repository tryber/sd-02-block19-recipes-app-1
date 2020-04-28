import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';

const Instructions = () => {
  const { fetchResult } = useContext(RecipesContext);

  return (
    fetchResult
    && fetchResult
      .map(({ strInstructions }) => (
        <section className="instructions-section">
          <h2 className="details-titles">Instructions</h2>
          <p className="gray">{strInstructions}</p>
        </section>
      ))
  );
};

export default Instructions;
