import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import './ReceitaButton.css';

const ReceitaButton = () => {
  const { buttonText } = useContext(RecipesContext);
  return (
    <div>
      <Link to="/receitas/emprocesso">
        <button
          className="button-receita"
          data-testid="start-recipe-btn"
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default ReceitaButton;
