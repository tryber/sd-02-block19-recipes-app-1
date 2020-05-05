import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import ShareButton from './ShareButton';

const handleRedirect = (history, API) => {
  if (API === 'themealdb') {
    history.push('/receitas/comidas');
  }
  if (API === 'thecocktaildb') {
    history.push('/receitas/bebidas');
  }
};

const handleClick = (id, type, fetchResult, setFetchResult, history) => {
  const findId = fetchResult.find((item) => item.idMeal === id || item.idDrink === id);
  setFetchResult([findId]);
  history.push(`/receitas/${type}/${id}`);
};

const DoneList = () => {
  const { fetchResult, setFetchResult } = useContext(RecipesContext);
  const history = useHistory();
  return (fetchResult.map(({
    idMeal, strMeal, strMealThumb, strArea, strCategory, strTags,
    idDrink, strDrink, strDrinkThumb, strAlcoholic,
    doneDate,
  }) => {
    const cleanDate = new Date(doneDate).toLocaleDateString();
    let tags = '';
    if (strTags) tags = strTags.split(',');
    let id = '';
    let type = '';

    if (idMeal) {
      id = idMeal;
      type = 'comidas';
    }

    if (idDrink) {
      id = idDrink;
      type = 'bebidas';
    }

    return (
      <div
        key={`${strMeal}-${Math.random() * 32}`}
        className="DoneContainerRecipe"
      >
        <div className="DoneFlexy">
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
          {idMeal ? (
            <div className="DoneText">
              <div className="DoneFlexySides">
                <span className="DoneCategory">{`${strArea} - ${strCategory}`}</span>
                <ShareButton url={`/receitas/comidas/${idMeal}`} />
              </div>
              <p className="DoneRecipe">{strMeal || strDrink}</p>
              <p className="DoneDate">{`Feita em: ${cleanDate}`}</p>
              <p>
                {`${tags[0]} / ${tags[1]}`}
              </p>
            </div>
          )
            : (
              <div className="DoneText">
                <div className="DoneFlexySides">
                  <span className="DoneCategory">{`${strAlcoholic} Drink`}</span>
                  <ShareButton url={`/receitas/bebidas/${idDrink}`} />
                </div>
                <p className="DoneRecipe">{strMeal || strDrink}</p>
                <p className="DoneDate">{`Feita em: ${cleanDate}`}</p>
              </div>
            )}
        </div>
      </div>
    );
  }));
};

export default DoneList;
