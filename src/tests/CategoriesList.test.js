import React from 'react';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { RecipesProvider } from '../context/Recipes';
import { render, cleanup, fireEvent } from '@testing-library/react';
import CategoriesList from '../components/CategoriesList';

afterEach(cleanup);

describe('Testa o componente Categories List - Lista de Categorias', () => {
  it('Deve ter botões clicáveis de categorias', () => {
    const history = createMemoryHistory();
    const { queryByText } = render(
      <RecipesProvider>
        <Router history={history}>
          <CategoriesList />
        </Router>
      </RecipesProvider>
    );
      const categoriesButtons = queryByText('Beef');
      expect(categoriesButtons).toBeInTheDocument();
      expect(categoriesButtons.tagName).toBe('BUTTON');
      expect(categoriesButtons.click).toBeTruthy();
  });
});
