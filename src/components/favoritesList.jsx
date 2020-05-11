import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import FavoriteButton from '../images/heart2.png';

const handleClick = (id, type, fetchResult, setFetchResult, history) => {
  const findId = fetchResult.find((item) => item.idMeal === id || item.idDrink === id);
  setFetchResult([findId]);
  history.push(`/receitas/${type}/${id}`);
};

const headerJSX = (
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

const mealsJSX = (idMeal, strArea, strCategory, strMeal, cleanDate, tags) => (
  <div className="faveText">
    <div className="faveFlexySides">
      <span className="faveCategory">{`${strArea} - ${strCategory}`}</span>
      <FavoriteButton url={`/receitas/comidas/${idMeal}`} />
    </div>
    <p className="faveRecipe">{strMeal}</p>
    <p className="faveDate">{`Feita em: ${cleanDate}`}</p>
    <p className="FavoriteButtons">
      {tags.map((tag) => <span key={tag} className="faveSearchBtn">{tag}</span>)}
    </p>
  </div>
);

const drinksJSX = (idDrink, strAlcoholic, strDrink, cleanDate) => (
  <div className="faveText">
    <div className="faveFlexySides">
      <span className="faveCategory">{`${strAlcoholic} Drink`}</span>
      <FavoriteButton url={`/receitas/bebidas/${idDrink}`} />
    </div>
    <p className="faveRecipe">{strDrink}</p>
    <p className="faveDate">{`Feita em: ${cleanDate}`}</p>
  </div>
);


const FavoritesList = () => {
  const { fetchResult, setFetchResult } = useContext(RecipesContext);
  const history = useHistory();
  return (fetchResult.map(({
    idMeal, strMeal, strMealThumb, strArea, strCategory, strTags,
    idDrink, strDrink, strDrinkThumb, strAlcoholic, faveDate,
  }) => {
    const cleanDate = new Date(faveDate).toLocaleDateString();
    let tags = [];
    const id = idMeal || idDrink;
    let type = 'comidas';
    if (strTags) tags = strTags.split(',');
    if (tags.length > 2) tags.length = 2;
    if (idDrink) type = 'bebidas';
    return (
      <div key={`${strMeal}-${Math.random() * 32}`} className="favoriteContainerRecipe">
        {headerJSX(id, type, fetchResult, setFetchResult,
          strMealThumb, strDrinkThumb, strMeal, strDrink, history)}
        {idMeal
          ? mealsJSX(idMeal, strArea, strCategory, strMeal, cleanDate, tags)
          : drinksJSX(idDrink, strAlcoholic, strDrink, cleanDate)}
      </div>
    );
  }));
};


export default FavoritesList;
