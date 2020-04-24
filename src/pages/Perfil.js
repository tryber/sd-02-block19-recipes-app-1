import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Perfil.css';

const Perfil = () => (
  <div>
    <Header />
    <div>
      <div data-testid="profile-email">

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

export default Perfil;