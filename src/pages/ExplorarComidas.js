import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Explorar.css';

const explorarBtn = (routeType) => {
  const name = routeType.charAt(0).toUpperCase() + routeType.slice(1);
  return (
    <Link className="ExplorarLink" to={`/receitas/${name}`}>
      <button className="ExplorarBtn" type="button">
        {`Explorar ${name}`}
      </button>
    </Link>
  );
};

const ExplorarComidas = ({ match }) => {
  const title = match.path.split('/')[match.path.split('/').length - 1];
  const { setHeaderTitle } = useContext(RecipesContext);
  useEffect(() => {
    setHeaderTitle(title);
  }, []);

  return (
    <div>
      <Header />
      <h2>xD</h2>
      <div className="ExplorarContainer">
        {/* {explorarBtn('comidas')}
        {explorarBtn('bebidas')} */}
      </div>
      <Footer />
    </div>
  );
};

ExplorarComidas.propTypes = {
  match: propTypes.instanceOf(Object).isRequired,
};

export default ExplorarComidas;
