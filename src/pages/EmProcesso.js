import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import RecipeImage from '../components/RecipeImage';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';
import ReceitaButton from '../components/ReceitaButton';

const EmProcesso = () => {

  const { setButtonText } = useContext(RecipesContext);
  useEffect(() => {
    setButtonText('Finalizar Receita');
  }, []);

  return (
    <div>
      <RecipeImage />
      <Ingredients />
      <Instructions />
      <Link to="/receitas-feitas">
        <ReceitaButton />
      </Link>
    </div>
  );
};

export default EmProcesso;
