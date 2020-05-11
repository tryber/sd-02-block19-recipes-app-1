import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import ReceitaButton from '../components/ReceitaButton';
import RecipeImage from '../components/RecipeImage';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';
import './Detalhes.css';
import DetailsHeader from '../components/DetailsHeader';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import RecipeVideo from '../components/RecipeVideo';
import Recomendations from '../components/Recomendations';
import useFetchRecomendations from '../hooks/useFetchRecomendations';

const Detalhes = ({ match: { params: { type, id }, url } }) => {
  const {
    fetchResult,
    setRecipeId,
    setAPI,
    isFetching,
    setButtonText,
  } = useContext(RecipesContext);

  const [recomendationsAPI, setRecomendationsAPI] = useState('thecocktaildb');
  const [recomendations] = useFetchRecomendations(recomendationsAPI);

  useEffect(() => {
    setButtonText('Iniciar Receita');
    const recipesInProgressFrmStrg = localStorage.getItem('in-progress');
    const recipesInProgress = recipesInProgressFrmStrg ? JSON.parse(recipesInProgressFrmStrg) : [];
    const isCurrentRecipeInProgress = recipesInProgress.find((recipeID) => recipeID === id);
    if (isCurrentRecipeInProgress) {
      setButtonText('Continuar Receita');
    }
    if (type === 'comidas') {
      setRecomendationsAPI('thecocktaildb');
      setAPI('themealdb');
    } if (type === 'bebidas') {
      setRecomendationsAPI('themealdb');
      setAPI('thecocktaildb');
    }
    setRecipeId(id);
  }, [id]);

  const setRecipesInProgress = () => {
    const inProgressRecipes = localStorage.getItem('in-progress');
    let newInProgressRecipes = [];
    if (inProgressRecipes) {
      const parsedinProgressRecipes = JSON.parse(inProgressRecipes);
      newInProgressRecipes = [...parsedinProgressRecipes];
    }
    const newProgressItem = fetchResult[0].idMeal ? fetchResult[0].idMeal : fetchResult[0].idDrink;
    localStorage.setItem('in-progress', JSON.stringify([...newInProgressRecipes, newProgressItem]));
  };

  return (
    !fetchResult ? <div>Carregando...</div> : (
      <div>
        {fetchResult.map(({
          strMeal, strDrink, idMeal, idDrink,
          strCategory, strAlcoholic, strMealThumb, strDrinkThumb,
          strArea,
        }) => (
          <article className="details-page" key={strMeal || strDrink}>
            <RecipeImage />
            <section className="header-section">
              <DetailsHeader />
              <section className="icons-section">
                <ShareButton url={url} />
                <FavoriteButton
                  recipe={{
                    id: idMeal || idDrink,
                    category: strCategory || strAlcoholic,
                    image: strMealThumb || strDrinkThumb,
                    area: strArea,
                    name: strMeal || strDrink,
                    isMeal: !!idMeal,
                  }}
                />
              </section>
            </section>
            <Ingredients />
            <Instructions />
            <RecipeVideo />
            {isFetching ? <div>Carregando...</div> : <Recomendations recipes={recomendations} />}
            <section>
              <Link to={`/receitas/emprocesso/${type}/${id}`}>
                <ReceitaButton
                  onClick={setRecipesInProgress}
                  data-testid="start-recipe-btn"
                  id={Number(id)}
                />
              </Link>
            </section>
          </article>
        ))}
      </div>
    )
  );
};

Detalhes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Detalhes;
