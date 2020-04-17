import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { RecipesContext } from '../context/Recipes';

const RadioItem = ({ id, radioValue, name }) => {
  const { setSearchRadio } = useContext(RecipesContext);
  return (
    <div>
      <label htmlFor={id}>
        <input
          id={id}
          type="radio"
          data-testid={`${id}-search-radio`}
          value={radioValue}
          onChange={({ target: { value } }) => setSearchRadio(value)}
          name="search-options"
        />
        {name}
      </label>
    </div>
  );
};

RadioItem.propTypes = {
  id: propTypes.string.isRequired,
  radioValue: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};
export default RadioItem;
