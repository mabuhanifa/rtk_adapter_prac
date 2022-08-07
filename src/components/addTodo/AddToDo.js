import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices/todoSlice";
const AddToDo = () => {
  const dispatch = useDispatch();
  
  const [text, setText] = useState("");
  const items = text.split(',')
  const submit = () => {
    dispatch(
      addTodo({
        id: nanoid(),
        todo: text,
        completed: false,
      })
    );
  };
  return (
    <div className='add-todo'>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={submit}>Add</button>
    </div>
  );
};

export default AddToDo;
