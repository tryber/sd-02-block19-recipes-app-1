import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';

const handleClick = (id, type, fetchResult, setFetchResult, history) => {
  const goToRecipe = fetchResult.find((item) => item.idMeal === id || item.idDrink === id);
  setFetchResult([goToRecipe]);
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

const mealsJSX = (idMeal, strArea, strCategory, strMeal, tags) => (
  <div className="faveText">
    <div className="faveFlexySides">
      <span className="faveCategory">{`${strArea} - ${strCategory}`}</span>
    </div>
    <p className="faveRecipe">{strMeal}</p>
    <p className="faveButtons">
      {tags.map((tag) => <span key={tag} className="faveSearchBtn">{tag}</span>)}
    </p>
    <div className="buttons-bottom">
      <FavoriteButton url={`/receitas/comidas/${idMeal}`} />
      <ShareButton />
    </div>
  </div>
);

const drinksJSX = (idDrink, strAlcoholic, strDrink) => (
  <div className="faveText">
    <div className="faveFlexySides">
      <span className="faveCategory">{`${strAlcoholic} Drink`}</span>
    </div>
    <p className="faveRecipe">{strDrink}</p>
    <div className="buttons-bottom">
      <FavoriteButton url={`/receitas/bebidas/${idDrink}`} />
      <ShareButton />
    </div>
  </div>
);


const FavoritesList = () => {
  const { fetchResult, setFetchResult } = useContext(RecipesContext);
  const history = useHistory();
  return (fetchResult.map(({
    id, isMeal, category, image, area, name, strTags,
  }) => {
    let tags = [];
    let type = 'comidas';
    if (strTags) tags = strTags.split(',');
    if (tags.length > 2) tags.length = 2;
    if (id) type = 'bebidas';
    return (
      <div key={`${name}-${Math.random() * 32}`} className="faveContainerRecipe">
        {headerJSX(id, type, fetchResult, setFetchResult,
          image, image, name, name, history)}
        {isMeal
          ? mealsJSX(id, area, category, name, tags)
          : drinksJSX(id, category, name)}
      </div>
    );
  }));
};

export default FavoritesList;
