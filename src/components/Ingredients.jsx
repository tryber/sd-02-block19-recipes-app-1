/* eslint-disable react/jsx-fragments */
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { RecipesContext } from '../context/Recipes';
import './Ingredients.css';


const Ingredients = ({ useCheckbox = false }) => {
  const { fetchResult, checkboxes, setCheckboxes } = useContext(RecipesContext);

  const ingredients = fetchResult && Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strIngredient'));
  const measures = fetchResult && Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strMeasure')).map((el) => el[1]);

  let ingredientsList = ingredients && ingredients.reduce((acc, cur, index) => {
    const ingredient = `- ${cur[1]} - ${measures[index]}`;
    return [...acc, ingredient];
  }, []);
  console.log('antes', ingredientsList);
  ingredientsList = [...new Set(ingredientsList)];
  console.log('depois', ingredientsList);

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
                onChange={(event) => {
                  setCheckboxes({
                    ...checkboxes, [ingredient]: event.target.checked,
                  });
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
