import React from 'react';
import './TaskInput.css';

const TaskInput = ({ inputValue, handleInput, handleAddNewTask, placeholderText }) => {
    return (
        <div className="task-input">
            <form>
                <input placeholder={placeholderText} value={inputValue} onChange={handleInput} />
                <button value={inputValue} onClick={handleAddNewTask}>
                    <i className="fas fa-plus-circle"></i>
                </button>
            </form>
        </div>
    );
};



export default TaskInput;
