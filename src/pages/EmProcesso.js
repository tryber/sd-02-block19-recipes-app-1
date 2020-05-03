import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { RecipesContext } from '../context/Recipes';
import RecipeImage from '../components/RecipeImage';
import DetailsHeader from '../components/DetailsHeader';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';
import ReceitaButton from '../components/ReceitaButton';
import './EmProcesso.css';

const habilitbotao = (fetchResult, checkboxes) => {
  const ingredients = Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strIngredient'));
  console.log(ingredients);
  const valores = Object.values(checkboxes).filter((item) => item === true);
  console.log(valores);
  if (ingredients.length === valores.length) return false;
  return true;
};

const EmProcesso = ({ match: { url } }) => {
  const {
    setButtonText, fetchResult, checkboxes, setCheckboxes,
  } = useContext(RecipesContext);
  useEffect(() => {
    setButtonText('Finalizar Receita');
    setCheckboxes({});
  }, []);

  const setDoneRcps = () => {
    const doneRecipes = localStorage.getItem('done-recipes');
    const newDoneRecipes = doneRecipes ? JSON.parse(doneRecipes) : [];
    const newDoneItem = { ...fetchResult[0], doneDate: new Date() };
    localStorage.setItem('done-recipes', JSON.stringify([...newDoneRecipes, newDoneItem]));
  };

  return (
    <article>
      <RecipeImage />
      <section className="header-section">
        <DetailsHeader />
        <section className="icons-section">
          <ShareButton url={url} />
          <FavoriteButton />
        </section>
      </section>
      <Ingredients useCheckbox />
      <Instructions />
      <section>
        <Link to="/receitas-feitas">
          <ReceitaButton onClick={setDoneRcps} isDisabled={habilitbotao(fetchResult, checkboxes)} />
        </Link>
      </section>
    </article>
  );
};

EmProcesso.propTypes = {
  match: propTypes.shape({
    url: propTypes.string.isRequired,
  }).isRequired,
};

export default EmProcesso;
