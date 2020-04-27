import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Perfil.css';

const userEmail = JSON.parse(localStorage.getItem('user'));

function renderPage() {
  return (
    <div>
      <div className="user-mail" data-testid="profile-email">
        {userEmail.email}
      </div>
      <Link to="/receitas-feitas">
        <button className="rect" data-testid="profile-done-btn">
          <p className="btn-perfil">Receitas Feitas</p>
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button className="rect" data-testid="profile-favorite-btn">
          <p className="btn-perfil">Receitas Favoritas</p>
        </button>
      </Link>
      <Link to="/">
        <button
          className="rect"
          data-testid="profile-logout-btn"
          onClick={() => localStorage.clear()}
        >
          <p className="btn-perfil">Sair</p>
        </button>
      </Link>
    </div>
  );
}

const Perfil = () => {
  const { setHeaderTitle } = useContext(RecipesContext);
  useEffect(() => {
    setHeaderTitle('Perfil');
  }, []);
  return (
    <div>
      <Header showSearch={false} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default Perfil;
