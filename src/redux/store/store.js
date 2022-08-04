import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/todoSlices';

const store = configureStore({
  reducer: { todos: todoReducer },
});

export default store;
