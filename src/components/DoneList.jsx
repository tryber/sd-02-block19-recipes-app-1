import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';
import ShareButton from './ShareButton';

const DoneList = () => {
  const { fetchResult, setRecipeId } = useContext(RecipesContext);
  return (fetchResult.map(({
    idMeal, strMeal, strMealThumb, strArea, strCategory, strTags,
    idDrink, strDrink, strDrinkThumb, strAlcoholic,
    doneDate,
  }) => {
    const cleanDate = new Date(doneDate).toLocaleDateString();
    let tags = '';
    if (strTags) {
      tags = strTags.split(',');
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
            onClick={() => {
              console.log(typeof idMeal, idMeal);
              console.log(typeof idDrink, idDrink);
            }}
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
                <ShareButton url={`/receitas/bebidas/${idMeal}`} />
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
