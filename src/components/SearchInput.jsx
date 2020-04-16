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
                value="ingredient"
                onChange={({ target: { value } }) => setSearchRadio(value)}
                checked={searchRadio === 'ingredient'}
              />
              Ingrediente
            </label>
            <label>
              <input
                type="radio"
                data-testid="name-search-radio"
                value="name"
                onChange={({ target: { value } }) => setSearchRadio(value)}
                checked={searchRadio === 'name'}
              />
              Nome
            </label>
            <label>
              <input
                type="radio"
                data-testid="first-letter-search-radio"
                value="first-letter"
                onChange={({ target: { value } }) => setSearchRadio(value)}
                checked={searchRadio === 'first-letter'}
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
