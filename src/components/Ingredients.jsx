import React, { useContext, Fragment } from 'react';
import propTypes from 'prop-types';
import { RecipesContext } from '../context/Recipes';
import './Ingredients.css';


const Ingredients = ({ useCheckbox = false }) => {
  const { fetchResult, checkboxes, setCheckboxes } = useContext(RecipesContext);

  const ingredients = fetchResult && Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strIngredient'));
  const measures = fetchResult && Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strMeasure')).map((el) => el[1]);

  const ingredientsList = ingredients && ingredients.reduce((acc, cur, index) => {
    const ingredient = `- ${cur[1]} - ${measures[index]}`;
    return [...acc, ingredient];
  }, []);

  if (useCheckbox === true) {
    return (
      <section className="ingredients-section">
        <h2 className="details-titles">Ingredients</h2>
        <div className="gray checklist">
          {ingredientsList.map((ingredient) => (
            <Fragment>
              <input
                type="checkbox"
                className="checkbox-boxes"
                key={ingredient}
                onChange={(event) => {
                  setCheckboxes({
                    ...checkboxes, [ingredient]: event.target.checked,
                  });
                }}
              />
              <label className={checkboxes[ingredient] ? 'checkedbox' : ''}>{ingredient}</label>
            </Fragment>
          ))}
        </div>
      </section>
    );
  }
  return (
    <section className="ingredients-section">
      <h2 className="details-titles">Ingredients</h2>
      <div className="gray">
        {ingredientsList.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
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
