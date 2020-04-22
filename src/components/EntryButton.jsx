import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';
import { Link } from 'react-router-dom'; 


const handleSubmit = (email) => {
  localStorage.setItem('meals-token', '1');
  localStorage.setItem('cocktails-token', '1');
  localStorage.setItem('user', JSON.stringify({ email: email }));
  return true;
};

const EntryButton = () => {
  const { password, email } = useContext(RecipesContext);
  const mailRegex = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(-[a-z0-9]+)*(\.[a-z0-9]+(-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
  return (
    <div className="btn-div">
      <Link to="/receitas/">
      <button
        type="button"
        className="btn-entrar"
        data-testid="login-submit-btn"
        disabled={!(password.length > 6 && mailRegex.test(email))}
        onClick={() => handleSubmit(email)}
      >
        Entrar
      </button>
      </Link>
    </div>
  );
};

export default EntryButton;
