import React from 'react';

const RecipeImage = ({ source, imgAlt }) => (
  <img
    className="top-image"
    src={source}
    alt={imgAlt}
    data-testid="recipe-photo"
  />
);

export default RecipeImage;
