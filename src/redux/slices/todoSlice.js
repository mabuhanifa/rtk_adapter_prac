import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
export const todoAdapter = createEntityAdapter();
export const todoSelectors = todoAdapter.getSelectors((state) => state.todos);
const todoSlice = createSlice({
  name: "counter",
  initialState: todoAdapter.getInitialState(),
  reducers: {
    addTodo: todoAdapter.addOne,
    addTodos: todoAdapter.addMany,
    deleteTodo(state, action) {
      state.deletedTodos.push(state.entities[action.payload]);
      todoAdapter.removeOne(state, action);
    },
    clearTodos: todoAdapter.removeAll,
    updateTodo: todoAdapter.updateOne,
    restoreTodo(state, action) {
      todoAdapter.addOne(state, action);
      state.deletedTodos = state.deletedTodos.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addTodo, addTodos } = todoSlice.actions;
export default todoSlice.reducer;
