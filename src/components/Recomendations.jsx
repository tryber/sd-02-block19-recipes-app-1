import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/Recipes';

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

const Recomendations = ({ recipes }) => {
  const { setRecipeId } = useContext(RecipesContext);
  // console.log(recipes)

  // const repeatedIngredientsInAPI = (mealsIngredients && drinksIngredients)
  //   && mealsIngredients.filter((el) => drinksIngredients.indexOf(el) !== -1);

  // const recipeIngredients = fetchResult && Object.entries(fetchResult[0])
  //   .map(([key, value]) => key.match('strIngredient') && value).filter(Boolean);

  // const ingredientsInCommon = repeatedIngredientsInAPI && repeatedIngredientsInAPI
  //   .filter((el) => recipeIngredients.indexOf(el) !== -1);

  // useEffect(() => {
  //   if (API === 'themealdb') {
  //     getCocktailsByIngredient(ingredientsInCommon[0])
  //       .then((result) => setRecomendations(result));
  //   } if (API === 'thecocktaildb') {
  //     getMealsByMainIngredient(ingredientsInCommon[0])
  //       .then((result) => setRecomendations(result));
  //   }
  // }, [ingredientsInCommon]);

  // console.log(recipeIngredients, repeatedIngredientsInAPI, ingredientsInCommon)

  return (
    <section className="recomendations-section">
      <h2 className="details-titles">Recomendations</h2>
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
        <button
          key={`${strMeal}-${Math.random() * 32}`}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          type="button"
          className="MainContainerRecipe"
          onClick={() => (idMeal
            ? setRecipeId(idMeal) && <Redirect to={`/receitas/comidas/${idMeal}`} />
            : setRecipeId(idDrink) && <Redirect to={`/receitas/bebidas/${idDrink}`} />)}
        >
          <img className="MainImg" src={strMealThumb || strDrinkThumb} alt={strMeal || strDrink} />
          <p className="MainCategory">{strCategory || strAlcoholic}</p>
          <p className="MainRecipe">{strMeal || strDrink}</p>
        </button>
      ))}
    </section>
  );
};

Recomendations.propTypes = {
  recipes: PropTypes.instanceOf(Array).isRequired,
};

export default Recomendations;
