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
import useFetchEmProcesso from '../hooks/useFetchEmProcesso';
import './EmProcesso.css';

const habilitbotao = (fetchResult, checkboxes = {}) => {
  const ingredients = Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strIngredient'));
  const finalIngredients = [...new Set([...ingredients].map((item) => item.pop()))];
  const valores = Object.values(checkboxes).filter((item) => item === true) || [];
  if (finalIngredients.length === valores.length) return false;
  return true;
};

const updateSetCheckboxes = (setCheckboxes, id) => {
  const locStor = JSON.parse(localStorage.getItem(id)) || {};
  setCheckboxes(locStor);
};


const EmProcesso = ({ match: { url } }) => {
  const {
    setButtonText, fetchResult, checkboxes, setCheckboxes,
  } = useContext(RecipesContext);
  const idRecipe = url.split('/')[url.split('/').length - 1];
  useFetchEmProcesso(url, idRecipe);
  useEffect(() => {
    setButtonText('Finalizar Receita');
    setCheckboxes({});
    updateSetCheckboxes(setCheckboxes, idRecipe);
  }, []);

  const setDoneRcps = () => {
    const doneRecipes = localStorage.getItem('done-recipes');
    const newDoneRecipes = doneRecipes ? JSON.parse(doneRecipes) : [];
    const newDoneItem = { ...fetchResult[0], doneDate: new Date().toISOString() };
    localStorage.setItem('done-recipes', JSON.stringify([...newDoneRecipes, newDoneItem]));
  };

  return (
    !fetchResult ? <div>Carregando...</div> : (
      <article>
        <RecipeImage />
        <section className="header-section">
          <DetailsHeader />
          <section className="icons-section">
            <ShareButton url={url} />
            {fetchResult && (
            <FavoriteButton
              recipe={{
                id: fetchResult[0].idMeal || fetchResult[0].idDrink,
                category: fetchResult[0].strCategory || fetchResult[0].strAlcoholic,
                image: fetchResult[0].strMealThumb || fetchResult[0].strDrinkThumb,
              }}
            />
            )}
          </section>
        </section>
        <Ingredients useCheckbox />
        <Instructions />
        <section>
          <Link to="/receitas-feitas">
            <ReceitaButton
              onClick={setDoneRcps}
              isDisabled={habilitbotao(fetchResult, checkboxes)}
            />
          </Link>
        </section>
      </article>
    ));
};

EmProcesso.propTypes = {
  match: propTypes.shape({
    url: propTypes.string.isRequired,
  }).isRequired,
};

export default EmProcesso;
