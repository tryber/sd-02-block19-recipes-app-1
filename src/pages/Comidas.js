import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RecipesContext } from '../context/Recipes';
import useFetchAllCategories from '../hooks/useFetchAllCategories';
import './Comidas.css';

const Comidas = (props) => {
  const { isFetching, fetchResult } = useContext(RecipesContext);
  const allCategories = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const [data, loading] = useFetchAllCategories(allCategories);
  console.log(props);
  return (
    <div>
      <Header />
      <div className="MainCategoryButtons">
        {data && data.map((elem) => (
          <button
            className="MainCategoryButton"
            key={elem}
            type="button"
            value={elem}
          >
            {elem}
          </button>
        ))}
      </div>
      <div className="MainContainerPage">
        {isFetching && <h1>Tá buscando</h1>}
        {fetchResult && fetchResult.map(({ strMeal, strMealThumb, strCategory }) => (
          <div key={strMeal} className="MainContainerRecipe">
            <img className="MainImg" src={strMealThumb} alt={strMeal} />
            <p className="MainCategory">{strCategory}</p>
            <p className="MainRecipe">{strMeal}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Comidas;
