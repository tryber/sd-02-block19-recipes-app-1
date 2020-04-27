import React from 'react';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { RecipesProvider } from '../context/Recipes';
import Perfil from '../pages/Perfil';

afterEach(cleanup);

describe('Testa a página de perfil', () => {
  it('O e-mail do usuário que vem do localStorage deve estar visível na página', () => {
    const { getByTestId } = render(
      <RecipesProvider>
        <MemoryRouter>
          <Perfil />
        </MemoryRouter>
      </RecipesProvider>,
    );

    const userEmail = getByTestId('profile-email');

    expect(userEmail).toBeInTheDocument();
  });
  it('A tela deve conter 3 botões: um de receitas favoritas, um de receitas feitas e um de sair', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <RecipesProvider>
        <Router history={history}>
          <Perfil />
        </Router>
      </RecipesProvider>,
    );
    const receitasFeitas = getByTestId('profile-done-btn');
    const receitasFavoritas = getByTestId('profile-favorite-btn');
    const botaoSair = getByTestId('profile-logout-btn');

    expect(receitasFeitas).toBeInTheDocument();
    expect(receitasFavoritas).toBeInTheDocument();
    expect(botaoSair).toBeInTheDocument();
    //Ao clicar no botão de "Receitas Favoritas", a rota deve mudar para a tela de receitas favoritas;
    fireEvent.click(receitasFeitas);
    expect(history.location.pathname).toBe('/receitas-feitas');
    //Ao clicar no botão de "Receitas Feitas", a rota deve mudar para a tela de receitas feitas;
    fireEvent.click(receitasFavoritas);
    expect(history.location.pathname).toBe('/receitas-favoritas');
    //Ao clicar no botão de "Sair", o localStorage deve ser limpo e a rota deve mudar para a tela de login.
    fireEvent.click(botaoSair);
    expect(history.location.pathname).toBe('/');
  });
});
