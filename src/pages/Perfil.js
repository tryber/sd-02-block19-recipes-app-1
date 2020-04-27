import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Perfil.css';

const userEmail = JSON.parse(localStorage.getItem('user'));

const Perfil = () => {
  const { setHeaderTitle } = useContext(RecipesContext);
  useEffect(() => {
    setHeaderTitle('Perfil');
  }, []);
  return (
    <div>
      <Header showSearch={false} />
      <div>
        <div className="user-mail" data-testid="profile-email">
          {userEmail.email}
        </div> 
        <Link to="/receitas-feitas">
        <button className="rectangles" data-testid="profile-done-btn">
          <p>Receitas Feitas</p>
        </button>
        </Link>
        <Link to="/receitas-favoritas">
        <button className="rectangles" data-testid="profile-favorite-btn">
          <p>Receitas Favoritas</p>
        </button>
        </Link>
        <Link to="/">
        <button className="rectangles" 
        data-testid="profile-logout-btn"
        onClick={() => localStorage.clear()}>
          <p>Sair</p>
        </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Perfil;
