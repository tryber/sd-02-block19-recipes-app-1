import React, { useContext } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import { RecipesContext } from '../context/Recipes';
import useFetchRandom from '../hooks/useFetchRandom';

const fetchAreaRecipes = (value, setFetchResult, random, setIsFetching) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`;
  setIsFetching(true);
  const fetchRecipes = async () => {
    const response = await axios.get(url);
    setFetchResult(response.data.meals);
  };
  if (value !== 'Todas') {
    fetchRecipes();
  }
  if (value === 'Todas') {
    setFetchResult(random);
  }
  setIsFetching(false);
};

const ShowAreas = ({ match }) => {
  const {
    area, setFetchResult, random, setIsFetching,
  } = useContext(RecipesContext);
  useFetchRandom(match);
  return (
    <select
      defaultValue="Todas"
      onChange={(e) => fetchAreaRecipes(
        e.target.value, setFetchResult, random, setIsFetching,
      )}
    >
      <option value="Todas">Todas</option>
      {area.map(({ strArea }) => (
        <option
          key={strArea}
          value={strArea}
        >
          {strArea}
        </option>
      ))}
    </select>
  );
};

ShowAreas.propTypes = {
  match: propTypes.instanceOf(Object).isRequired,
};

export default ShowAreas;
