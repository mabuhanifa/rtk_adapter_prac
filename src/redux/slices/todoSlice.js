import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "counter",
  initialState: {
    todo: 0,
  },
  reducers: {

  },
});

export const {  } = todoSlice.actions;
export default todoSlice.reducer;
