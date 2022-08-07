import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../redux/slices/todoSlice";
const AddToDo = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const submit = () => {
    const items = text.split(",");
    dispatch(
      addTodos(
        items.map((item) => ({ id: nanoid(), todo: item, completed: false }))
      )
    );
  };
  return (
    <div className="add-todo">
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={submit}>Add</button>
    </div>
  );
};

export default AddToDo;
