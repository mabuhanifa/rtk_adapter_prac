import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const todoAdapter = createEntityAdapter();
export const todoSelector = todoAdapter.getSelectors((state) => state.todo);
const todoSlices = createSlice({
  name: "todos",
  initialState: todoAdapter.getInitialState(),
  reducers: {
    addTodo: todoAdapter.addOne,
  },
});
export const {addTodo} = todoSlices.actions;
export default todoSlices;
