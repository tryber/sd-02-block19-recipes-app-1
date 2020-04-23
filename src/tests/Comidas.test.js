import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { RecipesProvider } from '../context/Recipes';
import { render, cleanup } from '@testing-library/react';
import Comidas from '../pages/Comidas';

afterEach(cleanup);

describe('Testa a página de comidas', () => {
  it('Testa a rota do componente de comidas', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <RecipesProvider>
        <Router history={history}>
          <Comidas />
        </Router>
      </RecipesProvider>
    );

    expect(history.location.pathname).toBe('/receitas/comidas')
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