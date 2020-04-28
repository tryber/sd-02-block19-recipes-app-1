import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';

const Header = ({ showSearch = true, isDisable = false }) => {
  const { headerTitle, isSearchOpen, setIsSearchOpen } = useContext(RecipesContext);
  return (
    <div>
      <header className="header-main-page">
        <Link to="/perfil">
          <img
            src={profileIcon}
            alt="ícone de perfil"
            className="profile-icon"
            data-testid="profile-top-btn"
          />
        </Link>
        <h2 className="main-page-title" data-testid="page-title">{headerTitle}</h2>
        {showSearch ? (
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
        ) : null}
      </header>
      {!isDisable && <SearchInput data-testid="search-input" />}
    </div>
  );
};

  const ingredients = fetchResult && Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strIngredient'));
  const measures = fetchResult && Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strMeasure')).map((el) => el[1]);

  const ingredientsList = ingredients && ingredients.reduce((acc, cur, index) => {
    const ingredient = `- ${cur[1]} - ${measures[index]}`;
    return [...acc, ingredient];
  }, []);

  return (
    <section className="ingredients-section">
      <h2 className="details-titles">Ingredients</h2>
      <div className="gray">
        {ingredientsList.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
      </div>
    </section>
  );
};

export default Header;
