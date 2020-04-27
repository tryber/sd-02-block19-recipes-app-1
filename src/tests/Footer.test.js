import React from 'react';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { RecipesProvider } from '../context/Recipes';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Footer from '../components/Footer';

afterEach(cleanup);

describe('Testa o componente Footer', () => {
  it('Deve ter uma imagem que indica bebidas que, ao ser clicada, redireciona para a página de bebidas', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <RecipesProvider>
        <Router history={history}>
          <Footer />
        </Router>
      </RecipesProvider>
    );

    const drinksIcon = getByTestId('drinks-bottom-btn');
    expect(drinksIcon).toBeInTheDocument();
    expect(drinksIcon.tagName).toBe('BUTTON');
    fireEvent.click(drinksIcon);
    expect(history.location.pathname).toBe('/receitas/bebidas/');
  });

  it('Deve ter uma imagem que indica uma bússola que, ao ser clicada, redireciona para a página de exploração', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <RecipesProvider>
        <Router history={history}>
          <Footer />
        </Router>
      </RecipesProvider>
    );

    const exploreIcon = getByTestId('explore-bottom-btn');
    expect(exploreIcon).toBeInTheDocument();
    expect(exploreIcon.tagName).toBe('BUTTON');
    fireEvent.click(exploreIcon);
    expect(history.location.pathname).toBe('/receitas/explorar/');
  });
  it('Deve ter uma imagem que indica comer que, ao ser clicada, redireciona para a página de comidas', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <RecipesProvider>
        <Router history={history}>
          <Footer />
        </Router>
      </RecipesProvider>
    );

    const foodIcon = getByTestId('food-bottom-btn');
    expect(foodIcon).toBeInTheDocument();
    expect(foodIcon.tagName).toBe('BUTTON');
    fireEvent.click(foodIcon);
    expect(history.location.pathname).toBe('/receitas/comidas/');
  });
});
