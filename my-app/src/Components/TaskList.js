import React from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ taskList, handleDeleteItem, handleStatusChange }) => {
    const tasks = taskList.map((task) => (
        <div key={task.id}>
            <Task
                status={task.status}
                task={task}
                handleStatusChange={handleStatusChange}
                handleDeleteItem={handleDeleteItem}
                taskList={taskList}
            />
        </div>
    ));

    return (
        <div className="task-list">
            <ul>{tasks}</ul>
        </div>
    );
};

export default TaskList;
