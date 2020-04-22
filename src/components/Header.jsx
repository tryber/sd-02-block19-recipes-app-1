import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import profileIcon from '../images/profile-icon.png';
import searchIcon from '../images/search-icon.png';
import './Header.css';
import SearchInput from './SearchInput';

const Header = () => {
  const { headerTitle, isSearchOpen, setIsSearchOpen } = useContext(RecipesContext);
  return (
    <div>
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
        <button
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          type="button"
          onClick={() => (!isSearchOpen ? setIsSearchOpen(true) : setIsSearchOpen(false))}
          data-testid="search-top-btn"
        >
          <img
            src={searchIcon}
            alt="lupa de busca"
            className="search-icon"
          />
        </button>
      </header>
      <div><SearchInput /></div>
    </div>
  );
};

export default Header;
