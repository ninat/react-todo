import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './components/Todos/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
