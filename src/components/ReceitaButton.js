import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { RecipesContext } from '../context/Recipes';
import './ReceitaButton.css';

const ReceitaButton = ({ isDisabled = false, onClick }) => {
  const { buttonText } = useContext(RecipesContext);
  return (
    <div>
      <button
        type="button"
        className="button-receita"
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
};

ReceitaButton.propTypes = {
  isDisabled: propTypes.bool,
  onClick: propTypes.func,
};

export default ReceitaButton;
