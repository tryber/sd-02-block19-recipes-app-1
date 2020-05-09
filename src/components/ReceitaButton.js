import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/Recipes';
import './ReceitaButton.css';

const ReceitaButton = ({ isDisabled = false, onClick, id }) => {
  const { buttonText } = useContext(RecipesContext);
  const [recipeIsDone, setRecipeIsDone] = useState(false);

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('done-recipes'));
    const isDone = doneRecipes && doneRecipes.some(({ idDrink }) => idDrink === id);
    if (isDone) setRecipeIsDone(true);
  }, []);

  return (
    <div>
      <button
        type="button"
        className={recipeIsDone ? 'hidden-button-receita' : 'button-receita'}
        data-testid="start-recipe-btn"
        disabled={isDisabled}
        onClick={() => {
          if (onClick !== null) {
            onClick();
          }
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

ReceitaButton.defaultProps = {
  isDisabled: false,
  onClick: null,
  id: 0,
};

ReceitaButton.propTypes = {
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.number,
};

export default ReceitaButton;
