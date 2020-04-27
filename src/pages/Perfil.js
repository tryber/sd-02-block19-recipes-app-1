import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RecipesContext } from '../context/Recipes';
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
        <div className="rectangles" data-testid="profile-done-btn">
          <p>Receitas Feitas</p>
        </div>
        <div className="rectangles" data-testid="profile-favorite-btn">
          <p>Receitas Favoritas</p>
        </div>
        <div className="rectangles" data-testid="profile-logout-btn">
          <p>Sair</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Perfil;
