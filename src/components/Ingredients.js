import React from 'react';
import propTypes from 'prop-types';

const Ingredients = ({ ingredientsList }) => {
  return (
    <section className="ingredients-section">
      <h2>Ingredients</h2>
      <div className="gray">
        {ingredientsList.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
      </div>
    </section>
  );
};

Ingredients.propTypes = {
  ingredientsList: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Ingredients;
