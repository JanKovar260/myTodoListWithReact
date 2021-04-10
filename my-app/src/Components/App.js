import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import PictureAPI from './PictureAPI';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            taskList: [],
            image: null,
            placeholderText: 'Here you can put in a new task',
        };
    }

    handleInput = (e) => {
        this.setState({ input: e.target.value });
    };

    handleAddNewTask = (e) => {
        e.preventDefault();
        if (this.state.input) {
            this.setState({
                taskList: [
                    ...this.state.taskList,
                    {
                        text: this.state.input,
                        status: false,
                        id: new Date(),
                    },
                ],
                placeholderText: 'You can add another task',
                input: '',
            });
        } else {
            this.setState({
                placeholderText:
                    'You need to write something before submitting',
            });
        }
    };

    handleStatusChange = (task) => {
        this.setState((prevState) => ({
            ...prevState,
            taskList: this.state.taskList.map((item) =>
                item.id === task.id ? { ...item, status: !item.status } : item
            ),
        }));
    };

    handleDeleteItem = (task) => {
        this.setState({
            taskList: this.state.taskList.filter((item) => item.id !== task.id),
        });
    };

    handleImage = (url) => {
        this.setState({
            image: url,
        });
    };

    componentDidMount() {
        if (localStorage.getItem('taskList') == null) {
            localStorage.setItem('todoList', JSON.stringify([]));
        } else {
            this.setState({
                taskList: JSON.parse(localStorage.getItem('taskList')),
            });
        }
    }

    componentDidUpdate() {
        localStorage.setItem('taskList', JSON.stringify(this.state.taskList));
    }

    render() {
        return (
            <div className="app">
                <h1>My todo list</h1>
                <PictureAPI
                    image={this.state.image}
                    handleImage={this.handleImage}
                />
                <TaskInput
                    placeholderText={this.state.placeholderText}
                    inputValue={this.state.input}
                    handleInput={this.handleInput}
                    handleAddNewTask={this.handleAddNewTask}
                />
                <TaskList
                    taskList={this.state.taskList}
                    handleStatusChange={this.handleStatusChange}
                    handleDeleteItem={this.handleDeleteItem}
                />
            </div>
        );
    }
}
