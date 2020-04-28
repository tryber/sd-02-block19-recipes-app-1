import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import RecipeImage from '../components/RecipeImage';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';
import ReceitaButton from '../components/ReceitaButton';

const EmProcesso = () => {

  const { setButtonText, fetchResult } = useContext(RecipesContext);
  useEffect(() => {
    setButtonText('Finalizar Receita');
  }, []);

  const ingredients = fetchResult && Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strIngredient'));
  const measures = fetchResult && Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strMeasure')).map((el) => el[1]);

  const ingredientsList = ingredients && ingredients.reduce((acc, cur, index) => {
    const ingredient = `- ${cur[1]} - ${measures[index]}`;
    return [...acc, ingredient];
  }, []);

  return (
    <div>
      <RecipeImage />
      <Ingredients ingredientsList={ingredientsList} />
      <Instructions />
      <Link to="/receitas-feitas">
        <ReceitaButton />
      </Link>
    </div>
  );
};

export default EmProcesso;
