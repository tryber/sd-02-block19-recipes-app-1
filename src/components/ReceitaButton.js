import React from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';

class ReceitaButton extends React.Component {
  render() {
    return (
      const { buttonText } = useContext(RecipesContext);
      <div>
        <Link>
          <button
            className="button-receita"
            data-testid="start-recipe-btn"
          >
            {buttonText}
          </button>
        </Link>
      </div>
    );
  }
}

export default ReceitaButton;
