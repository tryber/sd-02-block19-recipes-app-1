import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import ShareButton from './ShareButton';

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
    className="DoneButtonImg"
    type="button"
    onClick={() => handleClick(id, type, fetchResult, setFetchResult, history)}
  >
    <img
      className="DoneImg"
      src={strMealThumb || strDrinkThumb}
      alt={strMeal || strDrink}
    />
  </button>
);

const mealsJSX = (idMeal, strArea, strCategory, strMeal, cleanDate, tags) => (
  <div className="DoneText">
    <div className="DoneFlexySides">
      <span className="DoneCategory">{`${strArea} - ${strCategory}`}</span>
      <ShareButton url={`/receitas/comidas/${idMeal}`} />
    </div>
    <p className="DoneRecipe">{strMeal}</p>
    <p className="DoneDate">{`Feita em: ${cleanDate}`}</p>
    <p className="DoneButtons">
      {tags.map((tag) => <span key={tag} className="DoneSearchBtn">{tag}</span>)}
    </p>
  </div>
);

const drinksJSX = (idDrink, strAlcoholic, strDrink, cleanDate) => (
  <div className="DoneText">
    <div className="DoneFlexySides">
      <span className="DoneCategory">{`${strAlcoholic} Drink`}</span>
      <ShareButton url={`/receitas/bebidas/${idDrink}`} />
    </div>
    <p className="DoneRecipe">{strDrink}</p>
    <p className="DoneDate">{`Feita em: ${cleanDate}`}</p>
  </div>
);

const DoneList = () => {
  const { fetchResult, setFetchResult } = useContext(RecipesContext);
  const history = useHistory();
  return (fetchResult.map(({
    idMeal, strMeal, strMealThumb, strArea, strCategory, strTags,
    idDrink, strDrink, strDrinkThumb, strAlcoholic, doneDate,
  }) => {
    const cleanDate = new Date(doneDate).toLocaleDateString();
    let tags = [];
    const id = idMeal || idDrink;
    let type = 'comidas';
    if (strTags) tags = strTags.split(',');
    if (tags.length > 2) tags.length = 2;
    if (idDrink) type = 'bebidas';
    return (
      <div key={`${strMeal}-${Math.random() * 32}`} className="DoneContainerRecipe">
        {headerJSX(id, type, fetchResult, setFetchResult,
          strMealThumb, strDrinkThumb, strMeal, strDrink, history)}
        {idMeal
          ? mealsJSX(idMeal, strArea, strCategory, strMeal, cleanDate, tags)
          : drinksJSX(idDrink, strAlcoholic, strDrink, cleanDate)}
      </div>
    );
  }));
};

export default DoneList;
