import React, { useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/Recipes';
import { oneRecipe } from './ShowRecipes';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Recomendations = ({ recipes }) => {
  const { setRecipeId } = useContext(RecipesContext);

  function handleClick(idMeal, idDrink) {
    if (idMeal) {
      setRecipeId(idMeal);
      return oneRecipe({ idMeal });
    }
    setRecipeId(idDrink);
    return oneRecipe({ idDrink });
  }

  return (
    <section className="recomendations-section">
      <h2 className="details-titles">Recomendations</h2>
      <Carousel responsive={responsive} infinite>
        {recipes.length && recipes.map(({
          idMeal,
          idDrink,
          strMeal,
          strDrink,
          strMealThumb,
          strDrinkThumb,
          strCategory,
          strAlcoholic,
        }) => (
          <div className="recomendations-recipe-card">
            <Link
              key={`${strMeal}-${Math.random() * 32}`}
              className="link-card"
              to={idMeal ? `/receitas/comidas/${idMeal}` : `/receitas/bebidas/${idDrink}`}
            >
              <img className="MainImg" src={strMealThumb || strDrinkThumb} alt={strMeal || strDrink} />
              <p className="MainCategory">{strCategory || strAlcoholic}</p>
              <p className="MainRecipe">{strMeal || strDrink}</p>
            </Link>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

Recomendations.propTypes = {
  recipes: PropTypes.instanceOf(Array).isRequired,
};

export default Recomendations;
