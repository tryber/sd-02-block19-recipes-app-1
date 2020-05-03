import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Cocktail from '../images/cocktail.svg';
import Explorer from '../images/explorer.svg';
import ForkImg from '../images/fork.svg';
import './Footer.css';
import { RecipesContext } from '../context/Recipes';

const handleRedirect = (history, setFetchResult, url) => {
  setFetchResult(null);
  history.push(url);
};

const Footer = () => {
  const history = useHistory();
  const { setFetchResult } = useContext(RecipesContext);
  return (
    <div className="footer-container" data-testid="footer-container">
      <button
        className="footer-transparent-button"
        type="button"
        data-testid="drinks-bottom-btn"
        onClick={() => handleRedirect(history, setFetchResult, '/receitas/bebidas/')}
      >
        <img className="footer-image" src={Cocktail} alt="Bebidas" />
      </button>
      <button
        className="footer-transparent-button"
        type="button"
        data-testid="explore-bottom-btn"
        onClick={() => handleRedirect(history, setFetchResult, '/explorar/')}
      >
        <img className="footer-image" src={Explorer} alt="Exploração" />
      </button>
      <button
        className="footer-transparent-button"
        type="button"
        data-testid="food-bottom-btn"
        onClick={() => handleRedirect(history, setFetchResult, '/receitas/comidas/')}
      >
        <img className="footer-image" src={ForkImg} alt="Comidas" />
      </button>
    </div>
  );
};

export default Footer;
