import React from 'react';
import HeartIcon from '../images/heart.png';

const FavoriteButton = (recipe) => {

  function handleCLick(favoriteRecipe) {
    
  }

  return (
    <button
      className="icon-button"
      type="button"
      onClick={() => handleCLick(recipe)}
    >
      <img
        className="icons"
        src={HeartIcon}
        alt="heart icon"
        data-testid="favorite-btn"
      />
    </button>
  );
};

export default FavoriteButton;
