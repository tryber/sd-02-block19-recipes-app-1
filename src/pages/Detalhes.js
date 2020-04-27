import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import HeartIcon from '../images/heart.png';
import ShareIcon from '../images/share.png';
import ReceitaButton from '../components/ReceitaButton';
import RecipeImage from '../components/RecipeImage'
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';
import './Detalhes.css';

const Detalhes = ({ match: { params: { type, id } } }) => {
  const { fetchResult, setRecipeId, setAPI, isFetching } = useContext(RecipesContext);

  useEffect(() => {
    if (type === 'comidas') {
      setAPI('themealdb');
    } if (type === 'bebidas') {
      setAPI('thecocktaildb');
    }
    setRecipeId(id);
  }, []);


  const ingredients = fetchResult && Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strIngredient'));
  const measures = fetchResult && Object.entries(fetchResult[0]).filter(([key, value]) => value && key.match('strMeasure')).map((el) => el[1]);

  const ingredientsList = ingredients && ingredients.reduce((acc, cur, index) => {
    const ingredient = `- ${cur[1]} - ${measures[index]}`;
    return [...acc, ingredient];
  }, []);

  if (isFetching) return <div>Carregando...</div>;

  return (
    <div>
      {fetchResult
        && fetchResult
          .map(({
            strMeal,
            strDrink,
            strMealThumb,
            strDrinkThumb,
            strCategory,
            strAlcoholic,
            strInstructions,
            strYoutube,
          }) => (
              <article className="details-page" key={strMeal || strDrink}>
                <section className="top-image-section">
                  <RecipeImage source={strMealThumb || strDrinkThumb} imgAlt={strMeal || strDrink} />
                </section>
                <section className="header-section">
                  <section className="title-section">
                    <h1 className="recipe-title">{strMeal || strDrink}</h1>
                    <h3 className="recipe-subtitle">{strCategory || strAlcoholic}</h3>
                  </section>
                  <section className="icons-section">
                    <button
                      className="icon-button"
                      type="button"
                    >
                      <img className="icons" src={ShareIcon} alt="share icon" />
                    </button>
                    <button
                      className="icon-button"
                      type="button"
                    >
                      <img className="icons" src={HeartIcon} alt="heart icon" />
                    </button>
                  </section>
                </section>
                <Ingredients ingredientsList={ingredientsList} />
                <Instructions instructions={strInstructions} />
                <section className="video-section">
                  <iframe
                    title="recipe video"
                    src={`https://youtube.com/embed/${strYoutube.split('=')[1]}`}
                    width="100%"
                    height="200px"
                    allowFullScreen
                    frameBorder="0"
                  />
                </section>
                <section className="recomendations-section">
                  <h2>Recomendations</h2>
                </section>
                <section>
                  <Link to={`/receitas/emprocesso/${type}/${id}`}>
                    <ReceitaButton data-testid="start-recipe-btn" />
                  </Link>
                </section>
              </article>
            ))}
    </div>
  );
};

Detalhes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Detalhes;
