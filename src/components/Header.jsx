import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import profileIcon from '../images/profile-icon.png';
import searchIcon from '../images/search-icon.png';
import './Header.css';

const Header = () => {
  const { headerTitle } = useContext(RecipesContext);
  return (
    <header>
      <Link to="/perfil">
        <img
          src={profileIcon}
          alt="ícone de perfil"
          className="profile-icon"
          data-testid="profile-top-btn"
        />
      </Link>
      <h2 data-testid="page-title">{headerTitle}</h2>
      <img
        src={searchIcon}
        alt="lupa de busca"
        className="search-icon"
        data-testid="search-top-btn"
      />
    </header>
  );
};

export default Header;
