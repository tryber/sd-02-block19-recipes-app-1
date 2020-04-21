import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';
import useFetchAllCategories from '../hooks/useFetchAllCategories';

const CategoriesList = () => {
  const { API, btnCategory } = useContext(RecipesContext);
  const allCategories = `https://www.${API}.com/api/json/v1/1/list.php?c=list`;
  const [data, loading, error] = useFetchAllCategories(allCategories);
  return (
    <div className="MainCategoryButtons">
      {loading ? <h2>Buscando...</h2> : error}
      {data && data.map((elem) => (
        <button
          className="MainCategoryButton"
          key={elem}
          type="button"
          data-testid={`${elem}-category-filter`}
          onClick={() => btnCategory(elem)}
          value={elem}
        >
          {elem}
        </button>
      ))}
    </div>
  );
};

export default CategoriesList;
