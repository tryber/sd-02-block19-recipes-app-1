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

const EmProcesso = () => {
  const { setButtonText } = useContext(RecipesContext);
  useEffect(() => {
    setButtonText('Finalizar Receita');
  }, []);

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
          <ReceitaButton />
        </Link>
      </section>
    </article>
  );
};

export default EmProcesso;
