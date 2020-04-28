import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';

const RecipeVideo = () => {
  const { fetchResult } = useContext(RecipesContext);
  return (
    fetchResult
    && fetchResult
      .map(({ strYoutube }) => (
        <section className="video-section">
          {strYoutube && (
            <iframe
              title="recipe video"
              src={`https://youtube.com/embed/${strYoutube.split('=')[1]}`}
              width="100%"
              height="200px"
              allowFullScreen
              frameBorder="0"
            />
          )}
        </section>
      ))
  );
};

export default RecipeVideo;
