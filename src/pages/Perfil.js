import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Perfil.css';

function renderPage(userEmail) {
  return (
    <div className="perfilContainer">
      <div className="user-mail" data-testid="profile-email">
        {userEmail.email}
      </div>
      <Link to="/receitas-feitas">
        <button className="rect" data-testid="profile-done-btn" type="button">
          <p className="btn-perfil">Receitas Feitas</p>
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button className="rect" data-testid="profile-favorite-btn" type="button">
          <p className="btn-perfil">Receitas Favoritas</p>
        </button>
      </Link>
      <Link to="/">
        <button
          className="rect"
          data-testid="profile-logout-btn"
          onClick={() => localStorage.clear()}
          type="button"
        >
          <p className="btn-perfil">Sair</p>
        </button>
      </Link>
    </div>
  );
}

const Perfil = () => {
  const { setHeaderTitle, setIsFetching } = useContext(RecipesContext);
  const userEmail = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    setHeaderTitle('Perfil');
    setIsFetching(true);
  }, []);

  if (!userEmail) return <div>Carregando...</div>;

  return (
    <div>
      <Header showSearch={false} isDisable />
      {renderPage(userEmail)}
      <Footer />
    </div>
  );
};

export default Perfil;
