import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { RecipesProvider } from '../context/Recipes';
import { render, cleanup, fireEvent } from '@testing-library/react';
import LoginPage from '../pages/LoginPage';
import Comidas from '../pages/Comidas';
import Footer from '../components/Footer';

afterEach(cleanup);

describe('Testa a página de comidas', () => {
  it('Testa a rota do componente de comidas que é iniciada após logar a página', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <RecipesProvider>
        <Router history={history}>
          <LoginPage />
        </Router>
      </RecipesProvider>
    );

    const loginButton = getByTestId('login-submit-btn');
    fireEvent.click(loginButton);
    expect(history.location.pathname).toBe('/receitas/comidas');
  });
  
  it('Testa o direcionamento para rota do componente de comidas ao clicar no Footer', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <RecipesProvider>
        <Router history={history}>
          <Footer />
        </Router>
      </RecipesProvider>
    );

    const foodButton = getByTestId('food-bottom-btn');
    fireEvent.click(foodButton);
    expect(history.location.pathname).toBe('/receitas/comidas');
  });

  it('Testa os componentes presentes na página de comidas', () => {
    const { getByTestId } = render(
      <RecipesProvider>
        <Router>
          <Comidas />
        </Router>
      </RecipesProvider>
    );

    const pageHeader = getByTestId('header');
    const categories = getByTestId('categories-component');
    const pageFooter = getByTestId('footer');
    expect(pageHeader).toBeinTheDocument();
    expect(categories).toBeinTheDocument();
    expect(pageFooter).toBeinTheDocument();
  });
});
