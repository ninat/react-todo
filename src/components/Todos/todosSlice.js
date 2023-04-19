import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push({ id: new Date().valueOf(), title: action.payload });
    },
    removeTask: (state, action) => {
      state.list = state.list.filter(el => el.id !== action.payload);
    },
    toggleDone: (state, action) => {
      const editingItem = state.list.find(todo => todo.id === action.payload);
      if (editingItem) {
        editingItem.isDone = !editingItem.isDone;
      }
    },
    clearAll: (state, action) => {
      state.list = [];
    }
  },
});

export const { listState, addTodo, removeTask, toggleDone, clearAll } = todosSlice.actions;

export const selectAllTodos = state => state.todos.list;

export default todosSlice.reducer
