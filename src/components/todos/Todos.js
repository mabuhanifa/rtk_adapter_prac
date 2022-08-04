import React from 'react';
import { useSelector } from 'react-redux';
const Todos = () => {
    const {entities} = useSelector((state) => state.todos);
    return (
        <div>
            
        </div>
    );
};

export default Todos;