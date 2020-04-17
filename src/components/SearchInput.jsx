import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';
import './SearchInput.css';
import RadioItem from './RadioItem';

const SearchInput = () => {
  const { isSearchOpen, search, setSearch } = useContext(RecipesContext);
  return (
    isSearchOpen
    && (
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
          <RadioItem id="ingredient" radioValue="filter.php?i" name="Ingrediente" />
          <RadioItem id="name" radioValue="search.php?s" name="Nome" />
          <RadioItem id="first-letter" radioValue="search.php?f" name="Primeira letra" />
        </div>
      </section>
    )
  );
};

export default SearchInput;
