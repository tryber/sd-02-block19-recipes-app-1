import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import ReceitaButton from '../components/ReceitaButton';

const EmProcesso = () => {
  const { setButtonText } = useContext(RecipesContext);
  useEffect(() => {
    setButtonText('Finalizar Receita');
  }, []);

  return (
    <div>
      <Link to="/receitas-feitas">
        <ReceitaButton />
      </Link>
    </div>
  );
};

export default EmProcesso;
