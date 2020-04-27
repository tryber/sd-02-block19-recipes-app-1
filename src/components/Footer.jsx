import React from 'react';
import { Link } from 'react-router-dom';
import Cocktail from '../images/cocktail.svg';
import Explorer from '../images/explorer.svg';
import ForkImg from '../images/fork.svg';
import './Footer.css';

const Footer = () => (
  <div className="footer-container" data-testid="footer-container">
    <Link to="/receitas/bebidas/">
      <button
        className="footer-transparent-button"
        type="button"
        data-testid="drinks-bottom-btn"
      >
        <img className="footer-image" src={Cocktail} alt="Bebidas" />
      </button>
    </Link>
    <Link to="/receitas/explorar/">
      <button
        className="footer-transparent-button"
        type="button"
        data-testid="explore-bottom-btn"
      >
        <img className="footer-image" src={Explorer} alt="Exploração" />
      </button>
    </Link>
    <Link to="/receitas/comidas/">
      <button
        className="footer-transparent-button"
        type="button"
        data-testid="food-bottom-btn"
      >
        <img className="footer-image" src={ForkImg} alt="Comidas" />
      </button>
    </Link>
  </div>
);

export default Footer;
