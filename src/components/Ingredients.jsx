/* eslint-disable react/jsx-fragments */
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { RecipesContext } from '../context/Recipes';
import './Ingredients.css';

const updateLocStor = (ingredient, check, id) => {
  const recipeId = id.idMeal || id.idDrink;
  let locStor = JSON.parse(localStorage.getItem(recipeId));
  locStor = { ...locStor, [ingredient]: check };
  localStorage.setItem(recipeId, JSON.stringify(locStor));
};

const initialCheck = (id, ingredient) => {
  const recipeId = id.idMeal || id.idDrink;
  const locStor = JSON.parse(localStorage.getItem(recipeId)) || {};
  const position = Object.keys(locStor).indexOf(ingredient);
  const bool = Object.values(locStor)[position];
  if (bool) {
    return true;
  }
  return false;
};

const Ingredients = ({ useCheckbox = false }) => {
  const { fetchResult, checkboxes, setCheckboxes } = useContext(RecipesContext);

  const ingredients = fetchResult && Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strIngredient'));
  const measures = fetchResult && Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strMeasure')).map((el) => el[1]);

  let ingredientsList = ingredients && ingredients.reduce((acc, cur, index) => {
    const ingredient = `- ${cur[1]} - ${measures[index]}`;
    return [...acc, ingredient];
  }, []);
  ingredientsList = [...new Set(ingredientsList)];

  if (useCheckbox === true) {
    return (
      <section className="ingredients-section">
        <h2 className="details-titles">Ingredients</h2>
        <div className="gray checklist">
          {ingredientsList.map((ingredient) => (
            <div key={ingredient}>
              <input
                type="checkbox"
                id={ingredient}
                className="checkbox-boxes"
                key={ingredient}
                value={ingredient}
                checked={initialCheck(fetchResult[0], ingredient)}
                onChange={(event) => {
                  setCheckboxes({
                    ...checkboxes, [ingredient]: event.target.checked,
                  });
                  updateLocStor(ingredient, event.target.checked, fetchResult[0]);
                }}
              />
              <label
                htmlFor={ingredient}
                className={checkboxes[ingredient] ? 'checkedbox-striked' : 'checkedbox'}
              >
                {ingredient}
              </label>
            </div>
          ))}
        </div>
      </section>
    );
  }
  return (
    <section className="ingredients-section">
      <h2 className="details-titles">Ingredients</h2>
      <div className="gray">
        {ingredientsList.map((ingredient, index) => (
          <li
            key={`${ingredient} - ${Math.random()}`}
            data-testid={`${index}-ingredient`}
          >
            {ingredient}
          </li>
        ))}
      </div>
    </section>
  );
};

Ingredients.defaultProps = {
  useCheckbox: false,
};
Ingredients.propTypes = {
  useCheckbox: propTypes.bool,
};
export default Ingredients;
