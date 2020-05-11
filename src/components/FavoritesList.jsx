import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { RecipesContext } from '../context/Recipes';
import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';

const updateAPI = (title) => {
  if (title === 'bebidas') return 'thecocktaildb';
  return 'themealdb';
};

const getDetailsPage = async (id, type, setFetchResult) => {
  const url = `https://www.${updateAPI(type)}.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await axios.get(url);
  const value = response.data.meals || response.data.drinks;
  setFetchResult(value);
};


const handleClick = (id, type, fetchResult, setFetchResult, history) => {
  getDetailsPage(id, type, setFetchResult);
  history.push(`/receitas/${type}/${id}`);
};

const thumbJSX = (
  id, type, fetchResult, setFetchResult, strMealThumb, strDrinkThumb,
  strMeal, strDrink, history,
) => (
  <button
    className="faveButtonImg"
    type="button"
    onClick={() => handleClick(id, type, fetchResult, setFetchResult, history)}
  >
    <img
      className="faveImg"
      src={strMealThumb || strDrinkThumb}
      alt={strMeal || strDrink}
    />
  </button>
);

const mealsJSX = (idMeal, strArea, strCategory, strMeal, strMealThumb) => (
  <div className="faveText">
    <div className="faveFlexySides">
      <span className="faveCategory">{`${strArea} - ${strCategory}`}</span>
    </div>
    <p className="faveRecipe">{strMeal}</p>
    <div className="buttons-bottom">
      <FavoriteButton
        recipe={{
          id: idMeal,
          category: strCategory,
          image: strMealThumb,
          area: strArea,
          name: strMeal,
          isMeal: !!idMeal,
        }}
      />
      <ShareButton url={`/receitas/comidas/${idMeal}`} />
    </div>
  </div>
);

const drinksJSX = (idDrink, strAlcoholic, strDrink, strDrinkThumb, strArea) => (
  <div className="faveText">
    <div className="faveFlexySides">
      <span className="faveCategory">{`${strAlcoholic} Drink`}</span>
    </div>
    <p className="faveRecipe">{strDrink}</p>
    <div className="buttons-bottom">
      <FavoriteButton
        recipe={{
          id: idDrink,
          category: strAlcoholic,
          image: strDrinkThumb,
          area: strArea,
          name: strDrink,
          isMeal: !idDrink,
        }}
      />
      <ShareButton url={`/receitas/bebidas/${idDrink}`} />
    </div>
  </div>
);


const FavoritesList = () => {
  const { fetchResult, setFetchResult } = useContext(RecipesContext);
  const history = useHistory();
  return (fetchResult.map(({
    id, isMeal, category, image, area, name,
  }) => {
    let type = 'comidas';
    if (!isMeal) type = 'bebidas';
    return (
      <div key={`${name}-${Math.random() * 32}`} className="faveContainerRecipe">
        {thumbJSX(id, type, fetchResult, setFetchResult,
          image, image, name, name, history)}
        {isMeal
          ? mealsJSX(id, area, category, name, image)
          : drinksJSX(id, category, name, image)}
      </div>
    );
  }));
};

export default FavoritesList;
