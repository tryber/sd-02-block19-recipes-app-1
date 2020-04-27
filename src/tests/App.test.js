import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';
import { RecipesProvider } from '../context/Recipes';

afterEach(cleanup);

describe('Teste para o componente App', () => {
  it('', () => {
    const { getByTestId } = render(
      <RecipesProvider>
          <App />
      </RecipesProvider>
    );

    const appComponent = getByTestId('App');
    expect(appComponent).toBeTruthy();
  });
});