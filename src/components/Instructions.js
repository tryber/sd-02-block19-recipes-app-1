import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { RecipesContext } from '../context/Recipes';

const Instructions = () => {
  const { fetchResult } = useContext(RecipesContext);
  return (
    <div>
      {fetchResult
        && fetchResult
          .map(({ strInstructions }) => (
              <section className="instructions-section">
                <h2>Instructions</h2>
                <p className="gray">{strInstructions}</p>
              </section>
            ))}
    </div>
  );
}

Instructions.propTypes = {
  instructions: propTypes.string.isRequired,
};

export default Instructions;
