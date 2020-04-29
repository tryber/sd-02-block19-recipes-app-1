import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import EmptyHeartIcon from '../images/heart.png';
import FullyHeartIcon from '../images/heart2.png';

function handleClick(recipe) {
  let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favoriteRecipes) {
    if (favoriteRecipes.some((el) => el.id === recipe.id)) {
      favoriteRecipes = favoriteRecipes.filter((item) => item.id !== recipe.id);
      return localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    }
    return localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteRecipes, recipe]));
  }
  return localStorage.setItem('favoriteRecipes', JSON.stringify([recipe]));
}

const FavoriteButton = ({ recipe }) => {
  const [favorited, setFavorited] = useState(false);
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  useEffect(() => {
    if (favoriteRecipes && favoriteRecipes.some((el) => el.id === recipe.id)) {
      return setFavorited(true);
    }
    return (() => setFavorited(false));
  }, []);

  return (
    <button
      className="icon-button"
      type="button"
      onClick={() => {
        setFavorited(!favorited);
        handleClick(recipe);
      }}
    >
      {
        !favorited
          ? (
            <img
              className="icons"
              src={EmptyHeartIcon}
              alt="heart icon"
              data-testid="favorite-btn"
            />
          )
          : (
            <img
              className="icons"
              src={FullyHeartIcon}
              alt="heart icon"
              data-testid="favorite-btn"
            />
          )
      }
    </button>
  );
};

FavoriteButton.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
};

export default FavoriteButton;
