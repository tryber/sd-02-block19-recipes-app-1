import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';

const Detalhes = () => {
  const { fetchResult } = useContext(RecipesContext);
  return (
    <div>
      {fetchResult.map(({ strMeal, strDrink }) => <p>{strMeal || strDrink}</p>)}
    </div>
  );
};

export default Detalhes;

// parei na parte de criar a rota para página de detalhes.
// Ainda necessário corrigir o bug de quando carrega uma só receita
