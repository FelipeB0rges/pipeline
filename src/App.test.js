import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders counter value', () => {
  render(<Counter />);
  const counterElement = screen.getByText(/counter: 0/i);
  expect(counterElement).toBeInTheDocument();
});

test('increments counter value on button click', () => {
  render(<Counter />);
  const counterElement = screen.getByText(/counter: 0/i);
  const buttonElement = screen.getByRole('button', { name: /increment/i });

  fireEvent.click(buttonElement);

  expect(counterElement).toHaveTextContent(/counter: 1/i);
});