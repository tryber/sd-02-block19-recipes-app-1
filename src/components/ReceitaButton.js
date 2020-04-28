import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';
import './ReceitaButton.css';

const ReceitaButton = () => {
  const { buttonText } = useContext(RecipesContext);
  return (
    <div>
      <button
        type="button"
        className="button-receita"
        data-testid="start-recipe-btn"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ReceitaButton;