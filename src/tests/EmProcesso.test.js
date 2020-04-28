import React from 'react';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { RecipesProvider } from '../context/Recipes';
import EmProcesso from '../pages/EmProcesso';

afterEach(cleanup);

describe('Testa a página de receita em processo', () => {
  it('A tela deve conter uma imagem da receita, o titulo, a categoria, os ingredientes e as instruções', () => {
    const { getByTestId } = render(
      <RecipesProvider>
        <MemoryRouter>
          <EmProcesso />
        </MemoryRouter>
      </RecipesProvider>,
    );
  });
});
