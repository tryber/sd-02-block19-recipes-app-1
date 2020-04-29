import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { RecipesContext } from '../context/Recipes';
import './ReceitaButton.css';

const ReceitaButton = ({ isDisabled = false }) => {
  const { buttonText } = useContext(RecipesContext);
  return (
    <div>
      <button
        type="button"
        className="button-receita"
        data-testid="start-recipe-btn"
        disabled={isDisabled}
      >
        {buttonText}
      </button>
    </div>
  );
};


ReceitaButton.defaultProps = {
  isDisabled: false,
};

ReceitaButton.propTypes = {
  isDisabled: propTypes.bool,
};

export default ReceitaButton;
