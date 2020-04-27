import React, { useContext, useEffect } from 'react';
import { RecipesContext } from '../context/Recipes';
import HeartIcon from '../images/heart.png';
import ShareIcon from '../images/share.png';
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
                  <img
                    className="top-image"
                    src={strMealThumb || strDrinkThumb}
                    alt={strMeal || strDrink}
                  />
                </section>
                <section className="header-section">
                  <section className="title-section">
                    <h1>{strMeal || strDrink}</h1>
                    <h3>{strCategory || strAlcoholic}</h3>
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
                <section className="ingredients-section">
                  <h2>Ingredients</h2>
                  <div className="gray">
                    {ingredientsList.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
                  </div>
                </section>
                <section className="instructions-section">
                  <h2>Instructions</h2>
                  <p className="gray">{strInstructions}</p>
                </section>
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
              </article>
            ))}
    </div>
  );
};

export default Detalhes;

// parei na parte de criar a rota para página de detalhes.
// Ainda necessário corrigir o bug de quando carrega uma só receita
