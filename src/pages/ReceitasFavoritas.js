import React, { useContext, useEffect } from 'react';
import { RecipesContext } from '../context/Recipes';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ReceitasFavoritas = () => {
  const { setHeaderTitle } = useContext(RecipesContext);
  useEffect(() => {
    setHeaderTitle('Receitas Favoritas');
  }, []);
  const faveRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));


  return (
    <article>
      <Header showSearch={false} />
      <Footer />
    </article>
  );
};

export default ReceitasFavoritas;
