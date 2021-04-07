import React from 'react';
import './Task.css';

const Task = ({ task, handleDeleteItem, handleStatusChange, status }) => {

    const changeStatus = () => {
        handleStatusChange(task);
    }

    const deleteItem = () => {
        handleDeleteItem(task);
    }

    return (
        <div className="task">
            <li className={status ? 'completed' : ''}>{task.text}</li>
            <button className="check" onClick={() => changeStatus()}>
                <i className="fas fa-check-circle"></i>
            </button>
            <button className="cross" onClick={() => deleteItem()}>
                <i className="fas fa-times-circle"></i>
            </button>
        </div>
    );
};

export default Task;
