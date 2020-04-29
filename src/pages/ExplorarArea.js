import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShowAreas from '../components/ShowAreas';
import ShowRecipes from '../components/ShowRecipes';
import { RecipesContext } from '../context/Recipes';

const ExplorarArea = ({ match }) => {
  const {
    setHeaderTitle, isFetching, setIsFetching, setIsSearchOpen, area, setArea, random, setFetchResult,
  } = useContext(RecipesContext);

  useEffect(() => {
    setHeaderTitle('Explorar - Origem');
    setIsSearchOpen(false);
    setFetchResult(random);
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
    const fetchArea = async () => {
      const response = await axios.get(url);
      setArea(response.data.meals);
      setIsFetching(false);
    };
    fetchArea();
  }, []);

  return (
    <div>
      <Header />
      <div>
        {area && <ShowAreas match={match} />}
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
