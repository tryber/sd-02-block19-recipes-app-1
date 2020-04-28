import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/Recipes';
import './Detalhes.css';
import RecipeImage from '../components/RecipeImage';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';
import DetailsHeader from '../components/DetailsHeader';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import RecipeVideo from '../components/RecipeVideo';
import Recomendations from '../components/Recomendations';
import useFetchRecomendations from '../hooks/useFetchRecomendations';

const Detalhes = ({ match: { params: { type, id } } }) => {
  const { fetchResult, setRecipeId, setAPI, isFetching } = useContext(RecipesContext);

  const [recomendations] = useFetchRecomendations(type);

  useEffect(() => {
    if (type === 'comidas') {
      setAPI('themealdb');
    } if (type === 'bebidas') {
      setAPI('thecocktaildb');
    }
    setRecipeId(id);
  }, []);

  if (isFetching) return <div>Carregando...</div>;

  return (
    <div>
      {fetchResult
        && fetchResult
          .map(({ strMeal, strDrink }) => (
            <article className="details-page" key={strMeal || strDrink}>
              <RecipeImage />
              <section className="header-section">
                <DetailsHeader />
                <section className="icons-section">
                  <ShareButton />
                  <FavoriteButton />
                </section>
              </section>
              <Ingredients />
              <Instructions />
              <RecipeVideo />
              <Recomendations recipes={recomendations} />
              {/* <section>
                <Link to={`/receitas/emprocesso/${type}/${id}`}>
                  <ReceitaButton data-testid="start-recipe-btn" />
                </Link>
              </section> */}
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
