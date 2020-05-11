import React, { useContext, useEffect } from 'react';
import { RecipesContext } from '../context/Recipes';
import FavoritesList from '../components/FavoritesList';
import Header from '../components/Header';
import './ReceitasFavoritas.css';

function ShowFave() {
  const { fetchResult } = useContext(RecipesContext);
  if (fetchResult === null) return <h2>Nenhuma receita favoritada.</h2>;
  if (fetchResult.length >= 1) return <FavoritesList />;
}

const handleClick = (faveRecipes, setFetchResult, value) => {
  if (value === 'mealdb') {
    const filtered = faveRecipes.filter((item) => item.isMeal === true);
    setFetchResult(filtered);
  } else if (value === 'cocktaildb') {
    const filtered = faveRecipes.filter((item) => item.isMeal === false);
    setFetchResult(filtered);
  } else {
    setFetchResult(faveRecipes);
  }
};

const searchBtn = (value, btnName, faveRecipes, setFetchResult) => (
  <button
    className="FaveSearchBtn"
    type="button"
    value={value}
    onClick={() => handleClick(faveRecipes, setFetchResult, value)}
  >
    {btnName}
  </button>
);

const ReceitasFavoritas = () => {
  const faveRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const {
    setHeaderTitle, setIsFetching, setFetchResult, isFetching,
  } = useContext(RecipesContext);

  useEffect(() => {
    setHeaderTitle('Receitas Favoritas');
    setIsFetching(true);
    setFetchResult(faveRecipes);
    setIsFetching(false);
  }, []);

  return (
    <article>
      <Header showSearch={false} />
      <div className="faveButtons">
        {searchBtn('all', 'All', faveRecipes, setFetchResult)}
        {searchBtn('mealdb', 'Food', faveRecipes, setFetchResult)}
        {searchBtn('cocktaildb', 'Drinks', faveRecipes, setFetchResult)}
      </div>
      <div className="faveContainerPage">
        {!isFetching && <ShowFave />}
      </div>
    </article>
  );
};

export default ReceitasFavoritas;
