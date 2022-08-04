import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
const AddToDo = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log(state);
    return (
        <div>
            
        </div>
    );
};

export default AddToDo;