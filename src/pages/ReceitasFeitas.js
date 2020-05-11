import React, { useContext, useEffect } from 'react';
import { RecipesContext } from '../context/Recipes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DoneList from '../components/DoneList';
import './ReceitasFeitas.css';

function ShowDone() {
  const { fetchResult } = useContext(RecipesContext);
  if (fetchResult === null) return <h2>Nenhuma receita feita.</h2>;
  if (fetchResult.length >= 1) return <DoneList />;
}

const handleClick = (doneRecipes, setFetchResult, value) => {
  if (value === 'mealdb') {
    const filtered = doneRecipes.filter((item) => item.idMeal);
    setFetchResult(filtered);
  } else if (value === 'cocktaildb') {
    const filtered = doneRecipes.filter((item) => item.idDrink);
    setFetchResult(filtered);
  } else {
    setFetchResult(doneRecipes);
  }
};

const searchBtn = (value, btnName, doneRecipes, setFetchResult) => (
  <button
    className="DoneSearchBtn"
    type="button"
    value={value}
    onClick={() => handleClick(doneRecipes, setFetchResult, value)}
  >
    {btnName}
  </button>
);

const ReceitasFeitas = () => {
  const {
    setHeaderTitle, setIsFetching, setFetchResult, isFetching,
  } = useContext(RecipesContext);
  const doneRecipes = JSON.parse(localStorage.getItem('done-recipes'));
  useEffect(() => {
    setHeaderTitle('Receitas Feitas');
    setIsFetching(true);
    setFetchResult(doneRecipes);
    setIsFetching(false);
  }, []);
  if (isFetching) return <h2>Buscando...</h2>;
  return (
    <div>
      <Header showSearch={false} isDisable />
      <div className="DoneButtons">
        {searchBtn('all', 'All', doneRecipes, setFetchResult)}
        {searchBtn('mealdb', 'Food', doneRecipes, setFetchResult)}
        {searchBtn('cocktaildb', 'Drinks', doneRecipes, setFetchResult)}
      </div>
      <div className="DoneContainerPage">
        {!isFetching && <ShowDone />}
      </div>
      <Footer />
    </div>
  );
};

export default ReceitasFeitas;
