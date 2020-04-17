import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RecipesContext } from '../context/Recipes';

const Receitas = () => {
  const { isFetching, fetchResult, API } = useContext(RecipesContext);

  const oneResult = () => {
    if (fetchResult.length === 1) {
      if (API === 'themealdb') {
        const { idMeal } = fetchResult[0];
        return <Redirect to={`./receita/${idMeal}`} />;
      }
      // if (API === 'thecocktaildb') {
      //   const { idDrink } = fetchResult[0];
      //   return <Redirect to={`./receita/${idDrink}`} />;
      // }
    }
    return fetchResult.length ? <h2>Receitas...</h2> : <h2>Nada encontrado</h2>;
  };

  return (
    <div>
      <Header />
      {isFetching ? <h2>Buscando...</h2> : oneResult()}
      <Footer />
    </div>
  );
};

export default Receitas;
