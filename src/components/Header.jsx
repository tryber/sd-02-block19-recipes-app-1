import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import profileIcon from '../images/profile-icon.png';
import searchIcon from '../images/search-icon.png';
import './Header.css';
import SearchInput from './SearchInput';

const Header = ({ showSearch = true, isDisable = false }) => {
  const { headerTitle, isSearchOpen, setIsSearchOpen } = useContext(RecipesContext);
  return (
    <div>
      <header className="header-main-page" data-testid="header">
        <Link to="/perfil">
          <img
            src={profileIcon}
            alt="ícone de perfil"
            className="profile-icon"
            data-testid="profile-top-btn"
          />
        </Link>
        <h2 className="main-page-title" data-testid="page-title">{headerTitle}</h2>
        <button
          style={{
            background: 'none', border: 'none', cursor: 'pointer', width: '76px',
          }}
          type="button"
          onClick={() => (!isSearchOpen ? setIsSearchOpen(true) : setIsSearchOpen(false))}
          data-testid="search-top-btn"
        >
          {showSearch ? (
            <img
              src={searchIcon}
              alt="lupa de busca"
              className="search-icon"
            />
          ) : null}
        </button>
      </header>
      {!isDisable && <SearchInput data-testid="search-input" />}
    </div>
  );
};

Header.propTypes = {
  showSearch: propTypes.bool,
  isDisable: propTypes.bool,
};

Header.defaultProps = {
  showSearch: true,
  isDisable: false,
};

export default Header;
