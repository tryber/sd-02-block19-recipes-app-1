import React from 'react';
import HeartIcon from '../images/heart.png';

const FavoriteButton = () => (
  <button
    className="icon-button"
    type="button"
  >
    <img
      className="icons"
      src={HeartIcon}
      alt="heart icon"
      data-testid="favorite-btn"
    />
  </button>
);

export default FavoriteButton;
