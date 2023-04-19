import React from 'react';
import { render, screen } from '@testing-library/react';
import NewTodo from './Input';
import { ReduxProvider } from '../../setupTests';

test('renders textbox',  () => {
  render(<ReduxProvider><NewTodo /></ReduxProvider>);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('renders add button',  () => {
  render(<ReduxProvider><NewTodo /></ReduxProvider>);
  expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
});


test('renders reset button',  () => {
  render(<ReduxProvider><NewTodo /></ReduxProvider>);
  expect(screen.getByRole('button', { name: 'Clear All' })).toBeInTheDocument();
});
