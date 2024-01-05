import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from './hooks/renderWithRouter';

test('renders learn react link', () => {
  renderWithRouter(<App />);
  const linkElement = screen.getByText(/Bookish/i);
  expect(linkElement).toBeInTheDocument();
});
