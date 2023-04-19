import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';
import { ReduxProvider } from '../../../setupTests';

describe('Todo', () => {
  const props = {
    todo: {
      id: 1,
      title: 'fooBoo',
      isDone: false,
    },
  };

  test('renders todo text', () => {
    render(<ReduxProvider><Todo {...props} /></ReduxProvider>);
    expect(screen.getByText(props.todo.title)).toBeInTheDocument();
  });

  test('renders Remove button', () => {
    render(<ReduxProvider><Todo {...props} /></ReduxProvider>);
    expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument();
  });

  test('renders unchecked checkbox if task is incompleted', () => {
    render(<ReduxProvider><Todo {...props} /></ReduxProvider>);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox').checked).toEqual(false);
  });

  test('renders checked checkbox if task is completed', () => {
    const newProps = { ...props, todo: { ...props.todo, isDone: true } };
    render(<ReduxProvider><Todo {...newProps} /></ReduxProvider>);
    expect(screen.getByRole('checkbox').checked).toEqual(true);
  });
});
