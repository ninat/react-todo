import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { ReduxProvider } from './setupTests';

test('add new todo into the list',  () => {
  render(<ReduxProvider><App /></ReduxProvider>);

  expect(screen.queryByRole('listitem')).not.toBeInTheDocument();

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'foo' } });
  fireEvent.click(screen.getByRole('button', { name: 'Add' }));

  expect(screen.getAllByRole('listitem')).toHaveLength(1);
  expect(screen.getByText('foo')).toBeInTheDocument();
});

test('remove one todo from the list on clicking Remove button',  () => {
  render(<ReduxProvider><App /></ReduxProvider>);

  expect(screen.queryByText('boo')).not.toBeInTheDocument();

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'boo' } });
  fireEvent.click(screen.getByRole('button', { name: 'Add' }));

  expect(screen.getByText('boo')).toBeInTheDocument();

  fireEvent.click(screen.getAllByRole('button', { name: 'Remove' })[1]);
  expect(screen.queryByText('boo')).not.toBeInTheDocument();
});

test('clear all list on clicking Clear All button',  () => {
  render(<ReduxProvider><App /></ReduxProvider>);

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'fooBoo' } });
  fireEvent.click(screen.getByRole('button', { name: 'Add' }));
  fireEvent.change(input, { target: { value: 'boo' } });
  fireEvent.click(screen.getByRole('button', { name: 'Add' }));

  expect(screen.getAllByRole('listitem')).toHaveLength(3);

  fireEvent.click(screen.getByRole('button', { name: 'Clear All' }));
  expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
});
