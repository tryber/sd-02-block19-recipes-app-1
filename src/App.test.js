import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Farewell, front-end', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Edit/i);
  expect(linkElement).toBeInTheDocument();
});
