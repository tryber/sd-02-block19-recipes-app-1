import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RecipesContext } from '../context/Recipes';
import RecipesList from '../components/RecipesList';

const OneRecipe = (fetchResult) => {
  const { idMeal, idDrink } = fetchResult[0];
  const idRecipe = idMeal || idDrink;
  const type = idMeal ? 'comidas' : 'bebidas';
  return <Redirect to={`/receitas/${type}/${idRecipe}`} />;
};

const showRecipes = (fetchResult) => {
  if (fetchResult === null) return <h2>Nada encontrado.</h2>;
  if (fetchResult.length > 1) return <RecipesList />;
  return OneRecipe(fetchResult);
};

const Comidas = () => {
  const { isFetching, fetchResult, setRecipeId } = useContext(RecipesContext);

  useEffect(() => {
    if (fetchResult && fetchResult.length === 1) {
      const { idMeal, idDrink } = fetchResult[0];
      setRecipeId(idMeal || idDrink);
    }
  }, []);

  return (
    <div>
      <Header />
      {isFetching ? <h2>Buscando...</h2> : showRecipes(fetchResult)}
      <Footer />
    </div>
  );
};

export default Comidas;
