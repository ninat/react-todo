import React from 'react';
import { render, screen } from '@testing-library/react';
import Todos from './Todos';
import { ReduxProvider } from '../../setupTests';

test('renders list', () => {
  render(<ReduxProvider><Todos /></ReduxProvider>);
  expect(screen.getByRole('list')).toBeInTheDocument();
});
