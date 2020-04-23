import React from 'react';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { RecipesProvider } from '../context/Recipes';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Header from '../components/Header';

afterEach(cleanup);

describe('Testa o componente Header', () => {
  it('Deve ter uma imagem que indica o usuário e, ao ser clicado, redireciona para a página de perfil', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <RecipesProvider>
        <Router history={history}>
          <Header />
        </Router>
      </RecipesProvider>
    );

    const appUserIcon = getByTestId('profile-top-btn');
    expect(appUserIcon).toBeInTheDocument();
    expect(appUserIcon.tagName).toBe('IMG');
    fireEvent.click(appUserIcon);
    expect(history.location.pathname).toBe('/perfil');
  });
  it('Deve ter a existência e as condições de um título no Header', () => {
    const { getByTestId } = render(
      <RecipesProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </RecipesProvider>
    );
    
    const pageTitle = getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle.tagName).toBe('H2');
  });
  it('Deve ter um botão de pesquisa clicável', () => {
    const { getByTestId } = render(
      <RecipesProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </RecipesProvider>
    );

    const searchButton = getByTestId('search-top-btn');
    expect(searchButton).toBeInTheDocument();
    expect(searchButton.tagName).toBe('BUTTON');
    expect(searchButton.click).toBeTruthy();
  })
});