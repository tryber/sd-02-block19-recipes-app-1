import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Explorar.css';

const explorarBtn = (routeType) => (
  <Link className="ExplorarLink" to={`/explorar/${routeType}`}>
    <button className="ExplorarBtn" type="button">
      {`Explorar ${routeType.charAt(0).toUpperCase() + routeType.slice(1)}`}
    </button>
  </Link>
);

const Explorar = ({ match }) => {
  const title = match.path.split('/')[match.path.split('/').length - 1];
  const { setHeaderTitle } = useContext(RecipesContext);
  useEffect(() => {
    setHeaderTitle(title);
  }, []);
  return (
    <div>
      <Header isDisable />
      <div className="ExplorarContainer">
        {explorarBtn('comidas')}
        {explorarBtn('bebidas')}
      </div>
      <Footer />
    </div>
  );
};

Explorar.propTypes = {
  match: propTypes.instanceOf(Object).isRequired,
};

export default Explorar;
