import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';
import './SearchInput.css';

const SearchInput = () => {
  const {
    isSearchOpen, search, setSearch, searchRadio, setSearchRadio,
  } = useContext(RecipesContext);
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
            <label>
              <input
                type="radio"
                data-testid="ingredient-search-radio"
                value="i"
                onChange={({ target: { value } }) => setSearchRadio(value)}
                checked={searchRadio === 'i'}
              />
              Ingrediente
            </label>
            <label>
              <input
                type="radio"
                data-testid="name-search-radio"
                value="s"
                onChange={({ target: { value } }) => setSearchRadio(value)}
                checked={searchRadio === 's'}
              />
              Nome
            </label>
            <label>
              <input
                type="radio"
                data-testid="first-letter-search-radio"
                value="f"
                onChange={({ target: { value } }) => setSearchRadio(value)}
                checked={searchRadio === 'f'}
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
