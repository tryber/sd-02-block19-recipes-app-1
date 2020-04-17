import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';
import './SearchInput.css';

const SearchInput = () => {
  const { isSearchOpen, search, setSearch, setSearchRadio } = useContext(RecipesContext);
  return (
    isSearchOpen
      ? (
        <section>
          <div className="search-input-container">
            <input
              className="search-input"
              data-testid="search-input"
              placeholder="Buscar Receita"
              onChange={({ target: { value } }) => setSearch(value)}
              value={search}
            />
          </div>
          <div className="radio-buttons">
            <label htmlFor="ingredient">
              <input
                id="ingredient"
                type="radio"
                data-testid="ingredient-search-radio"
                value="filter.php?i"
                onChange={({ target: { value } }) => setSearchRadio(value)}
                name="search-options"
              />
              Ingrediente
            </label>
            <label htmlFor="name">
              <input
                id="name"
                type="radio"
                data-testid="name-search-radio"
                value="search.php?s"
                onChange={({ target: { value } }) => setSearchRadio(value)}
                name="search-options"
              />
              Nome
            </label>
            <label htmlFor="first-letter">
              <input
                id="first-letter"
                type="radio"
                data-testid="first-letter-search-radio"
                value="search.php?f"
                onChange={({ target: { value } }) => setSearchRadio(value)}
                name="search-options"
              />
              Primeira letra
            </label>
          </div>
        </section>
      )
      : false
  );
};

export default SearchInput;
