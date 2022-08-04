import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
export const todoAdapter = createEntityAdapter();
export const todoSelectors = todoAdapter.getSelectors((state) => state.todos);
const todoSlice = createSlice({
  name: "counter",
  initialState: todoAdapter.getInitialState(),
  reducers: {
    addTodo: todoAdapter.addOne,
  },
});

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;
