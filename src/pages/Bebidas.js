import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RecipesContext } from '../context/Recipes';
import ShowRecipes from '../components/ShowRecipes';
import CategoriesList from '../components/CategoriesList';
import useFetchRandom from '../hooks/useFetchRandom';
import './MainPage.css';

const Bebidas = ({ match }) => {
  const title = match.path.split('/')[match.path.split('/').length - 1];
  const { isFetching, setExplorar, setHeaderTitle } = useContext(RecipesContext);
  const [data] = useFetchRandom(match);

  useEffect(() => {
    setHeaderTitle(title);
    return () => {
      setExplorar(false);
    };
  });

  return (
    <div>
      <Header />
      <CategoriesList random={data} match={match} />
      <div className="MainContainerPage">
        {isFetching ? <h2>Buscando...</h2> : <ShowRecipes />}
      </div>
      <Footer />
    </div>
  );
};

Bebidas.propTypes = {
  match: propTypes.instanceOf(Object).isRequired,
};

export default Bebidas;
