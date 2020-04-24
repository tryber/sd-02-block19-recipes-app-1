import React from 'react';

class ReceitaButton extends React.Component {
  render() {
    return (
      <div>
        <Link>
          <button
            className="button-receita"
            data-testid="start-recipe-btn"
          >
            
          </button>
        </Link>
      </div>
    );
  }
}

export default ReceitaButton;
