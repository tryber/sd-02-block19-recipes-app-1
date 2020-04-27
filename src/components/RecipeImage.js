import React from 'react';
import propTypes from 'prop-types';

const RecipeImage = ({ source, imgAlt }) => (
  <img
    className="top-image"
    src={source}
    alt={imgAlt}
    data-testid="recipe-photo"
  />
);

RecipeImage.propTypes ={
  source: propTypes.object.isRequired,
  imgAlt: propTypes.object.isRequired,
}

export default RecipeImage;
