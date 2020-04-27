import React, { useContext, useEffect } from 'react';
import { RecipesContext } from '../context/Recipes';
import Header from '../components/Header';


const ReceitasFavoritas = () => {
  const { setHeaderTitle } = useContext(RecipesContext);
  useEffect(() => {
    setHeaderTitle('Receitas Feitas');
  }, []);
  return (
    <div>
      <Header showSearch={false} />
    </div>
  );
}

export default ReceitasFavoritas;