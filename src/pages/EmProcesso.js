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
    <div>
      <RecipeImage />
      <DetailsHeader />
      <ShareButton />
      <FavoriteButton />
      <Ingredients useCheckbox />
      <Instructions />
      <Link to="/receitas-feitas">
        <ReceitaButton />
      </Link>
    </div>
  );
};

export default EmProcesso;
