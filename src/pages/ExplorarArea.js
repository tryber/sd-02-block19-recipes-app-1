import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShowRecipes from '../components/ShowRecipes';
import { RecipesContext } from '../context/Recipes';

const ExplorarArea = ({ match }) => {
  const {
    setHeaderTitle, isFetching, setIsSearchOpen, setIsFetching,
  } = useContext(RecipesContext);

  useEffect(() => {
    setHeaderTitle('Explorar - Origem');
    setIsSearchOpen(false);
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    const fetchArea = async () => {
      const response = await axios.get(url);
      console.log(response);
    };
    fetchArea();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <select>Text</select>
      </div>
      <div className="MainContainerPage">
        {isFetching ? <h2>Buscando...</h2> : <ShowRecipes />}
      </div>
      <Footer />
    </div>
  );
};

ExplorarArea.propTypes = {
  match: propTypes.instanceOf(Object).isRequired,
};

export default ExplorarArea;
