import React, { useState } from 'react';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [headingInput, setHeddingInput] = ustState('');
    const [listInputs, setInputs];


    return (
        <>
            <div className="todo-container">
                <h1 className="title">My To-Do List</h1>
                <div className="input-container">
                    <input
                        type="text"
                        className="heading-input"
                        placeholder="Enter heading" />
                    <button className="add-list-button">Add Heading</button>
                </div>
            </div>
            <div className="todo_main">

            </div>
        </>
    );
};
