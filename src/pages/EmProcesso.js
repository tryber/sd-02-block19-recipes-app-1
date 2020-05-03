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

const habilitaBotao = (fetchResult, checkboxes) => {
  const ingredients = Object.entries(fetchResult[0])
    .filter(([key, value]) => value && key.match('strIngredient'));
  const valores = Object.values(checkboxes).filter((item) => item === true);
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
          <ReceitaButton
            isDisabled={habilitaBotao(fetchResult, checkboxes)}
          />
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
