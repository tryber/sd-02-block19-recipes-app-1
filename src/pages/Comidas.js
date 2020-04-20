import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RecipesContext } from '../context/Recipes';
import useFetchAllCategories from '../hooks/useFetchAllCategories';
import './Comidas.css';
import RecipesList from '../components/RecipesList';

const oneRecipe = (fetchResult) => {
  const { idMeal, idDrink } = fetchResult[0];
  const idRecipe = idMeal || idDrink;
  return <Redirect to={`./receita/${idRecipe}`} />;
};

const showRecipes = (fetchResult) => {
  if (fetchResult === null) return <h2>Nada encontrado.</h2>;
  if (fetchResult.length > 1) return <RecipesList />;
  return oneRecipe(fetchResult);
};

const Comidas = ({ match }) => {
  const { isFetching, fetchResult, API, titleHeader } = useContext(RecipesContext);
  const allCategories = `https://www.${API}.com/api/json/v1/1/list.php?c=list`;
  const [data, loading, error] = useFetchAllCategories(allCategories);
  titleHeader(match);
  return (
    <div>
      <Header title={match} />
      <div className="MainCategoryButtons">
        {loading ? <h2>Buscando...</h2> : <h2>{error}</h2>}
        {data && data.map((elem) => (
          <button
            className="MainCategoryButton"
            key={elem}
            type="button"
            data-testid={`${elem}-category-filter`}
            value={elem}
          >
            {elem}
          </button>
        ))}
      </div>
      <div className="MainContainerPage">
        {isFetching ? <h2>Buscando...</h2> : showRecipes(fetchResult)}
      </div>
      <Footer />
    </div>
  );
};

export default Comidas;
