import React, { useContext, useEffect } from 'react';
import { RecipesContext } from '../context/Recipes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DoneList from '../components/DoneList';
// import ShowDone from '../components/ShowDone';
import './ReceitasFeitas.css';

function ShowDone() {
  const { fetchResult } = useContext(RecipesContext);
  if (fetchResult === null) return <h2>Nenhuma receita favoritada.</h2>;
  if (fetchResult.length >= 1) return <DoneList />;
}

const ReceitasFeitas = () => {
  const {
    setHeaderTitle, setIsFetching, setFetchResult, isFetching,
  } = useContext(RecipesContext);
  const doneRecipes = JSON.parse(localStorage.getItem('done-recipes'));
  useEffect(() => {
    setHeaderTitle('Receitas Feitas');
    setIsFetching(true);
    setFetchResult(doneRecipes);
    setIsFetching(false);
  }, []);
  if (isFetching) return <h2>Buscando...</h2>;
  return (
    <div>
      <Header showSearch={false} isDisable />
      <div className="DoneContainerPage">
        {!isFetching && <ShowDone />}
      </div>
      <Footer />
    </div>
  );
};

export default ReceitasFeitas;
