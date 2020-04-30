import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import RecipeImage from '../components/RecipeImage';
import DetailsHeader from '../components/DetailsHeader';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';
import ReceitaButton from '../components/ReceitaButton';
import './EmProcesso.css';

const habilitaBotao = (fetchResult, checkboxes) => {
  const ingredients = Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strIngredient'));
  const valores = Object.values(checkboxes).filter((item) => item === true);
  console.log(valores)
  // if (ingredients.length < valores.length) return true;
  if (ingredients.length === valores.length) return false;
  return true;
};

const EmProcesso = () => {
  const { setButtonText, fetchResult, checkboxes } = useContext(RecipesContext);
  useEffect(() => {
    setButtonText('Finalizar Receita');
  }, []);

  const setDoneRecipes = () => {
    const doneRecipes = localStorage.getItem('done-recipes');
    let newDoneRecipes = [];
    if (doneRecipes) {
      const parsedDoneRecipes = JSON.parse(doneRecipes);
      newDoneRecipes = [...parsedDoneRecipes];
    }
    const newDoneItem = {...fetchResult[0], doneDate: new Date()};
    localStorage.setItem('done-recipes', JSON.stringify([...newDoneRecipes, newDoneItem]));
  };

  return (
    <article>
      <RecipeImage />
      <section className="header-section">
        <DetailsHeader />
        <section className="icons-section">
          <ShareButton />
          <FavoriteButton />
        </section>
      </section>
      <Ingredients useCheckbox />
      <Instructions />
      <section>
        <Link to="/receitas-feitas">
          <ReceitaButton onClick={setDoneRecipes} isDisabled={habilitaBotao(fetchResult, checkboxes)} />
        </Link>
      </section>
    </article>
  );
};

export default EmProcesso;
