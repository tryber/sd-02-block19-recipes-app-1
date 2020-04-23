import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { RecipesContext } from '../context/Recipes';
import useFetchAllCategories from '../hooks/useFetchAllCategories';

const CategoriesList = ({ random, match }) => {
  const { API, btnCategory } = useContext(RecipesContext);
  const allCategories = `https://www.${API}.com/api/json/v1/1/list.php?c=list`;
  const [category, loading, error] = useFetchAllCategories(allCategories, match);
  return (
    <div className="MainCategoryButtons">
      {loading ? <h2>Buscando...</h2> : error}
      {category && category.map((elem) => (
        <button
          className="MainCategoryButton"
          key={elem}
          type="button"
          data-testid={`${elem}-category-filter`}
          onClick={() => btnCategory(elem, random)}
          value={elem}
        >
          {elem}
        </button>
      ))}
    </div>
  );
};

CategoriesList.propTypes = {
  random: propTypes.instanceOf(Object),
  match: propTypes.instanceOf(Object).isRequired,
};

CategoriesList.defaultProps = {
  random: [],
};

export default CategoriesList;
