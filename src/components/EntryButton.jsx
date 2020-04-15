import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';

const EntryButton = () => {
  const { password, email } = useContext(RecipesContext);
  const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return (
    <div className="btn-div">
      <button
        type="button"
        className="btn-entrar"
        data-testid="login-submit-btn"
        disabled={!(password.length > 6 && mailRegex.test(email))}
      >
        Entrar
      </button>
    </div>
  );
};

export default EntryButton;
