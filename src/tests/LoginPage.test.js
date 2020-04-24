import React from 'react';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { RecipesProvider } from '../context/Recipes';
import LoginPage from '../pages/LoginPage';

afterEach(cleanup);

describe('Testa a página de login', () => {
  it('A página inicialmente contém um input para e-mail, um input para senha e um botão desabilitado', () => {
    const { getByTestId } = render(
      <RecipesProvider>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </RecipesProvider>,
    );

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('login-submit-btn');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(emailInput.tagName).toBe('INPUT');
    expect(passwordInput.tagName).toBe('INPUT');
    expect(loginButton.tagName).toBe('BUTTON');
    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
    expect(loginButton.innerHTML).toBe('Entrar');
    expect(loginButton.disabled).toBe(true);
  });

  it('Testa o login, as entradas no localStorage, o botão sendo habilitado após a inserção de um email válido e uma senha de mais de 6 caracteres e o redirecionamento da rota', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <RecipesProvider>
        <Router history={history}>
          <LoginPage />
        </Router>
      </RecipesProvider>,
    );

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('login-submit-btn');

    fireEvent.change(emailInput, { target: { value: 'teste@testando.com' } });
    expect(emailInput.value).toBe('teste@testando.com');
    fireEvent.change(passwordInput, { target: { value: '1234567' } });
    expect(passwordInput.value).toBe('1234567');
    expect(loginButton.disabled).toBe(false);
    fireEvent.click(loginButton);
    expect(localStorage.getItem('meals-token')).toBe('1');
    expect(localStorage.getItem('cocktails-token')).toBe('1');
    expect(JSON.parse(localStorage.getItem('user'))).toMatchObject({ email: 'teste@testando.com' });
    fireEvent.click(loginButton);
    expect(history.location.pathname).toBe('/receitas/');
  });
});
