import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Explorar.css';

const explorarBtn = (btnValue, recipeType, newPath) => {
  if (recipeType === 'bebidas' && newPath === 'area') {
    return null;
  }
  return (
    <Link className="ExplorarLink" to={`/explorar/${recipeType}/${newPath}`}>
      <button className="ExplorarBtn" type="button">
        {btnValue}
      </button>
    </Link>
  );
};

const ExplorarTipos = ({ match }) => {
  const title = match.path.split('/')[match.path.split('/').length - 1];
  const { setHeaderTitle } = useContext(RecipesContext);
  useEffect(() => {
    setHeaderTitle(`Explorar - ${title}`);
  }, []);

  return (
    <div>
      <Header />
      <div className="ExplorarContainer">
        {explorarBtn('Por ingredientes', title, 'ingredientes')}
        {explorarBtn('Por local de origem', title, 'area')}
        {explorarBtn('Me surpreenda!', title, 'random')}
      </div>
      <Footer />
    </div>
  );
};

ExplorarTipos.propTypes = {
  match: propTypes.instanceOf(Object).isRequired,
};

export default ExplorarTipos;
