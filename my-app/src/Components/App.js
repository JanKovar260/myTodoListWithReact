import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import PictureAPI from './PictureAPI';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            taskList: [],
            image: null,
        };
    }


    handleInput = (e) => {
        this.setState({ input: e.target.value });
    };

    handleAddNewTask = (e) => {
        e.preventDefault();
        this.setState({
            taskList: [
                ...this.state.taskList,
                {
                    text: this.state.input,
                    status: false,
                    id: new Date(),
                },
            ],
        });
        this.setState({ input: '' });
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
        this.setState((prevState) => ({
            ...prevState,
            taskList: this.state.taskList.filter((item) => item.id !== task.id),
        }));
    };

    handleImage = (url) => {
        this.setState((prevState) => ({
            ...prevState,
            image: url,
        }));
        console.log(this.state.image);
    };

    componentDidMount() {
        this.setState((prevState) => ({
            ...prevState,
            taskList: JSON.parse(localStorage.getItem('taskList')),
        }));
    }

    componentDidUpdate() {
        localStorage.setItem('taskList', JSON.stringify(this.state.taskList));
        console.log(this.state.image);
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

// { this.state.image
//   ? <PictureAPI image={this.state.image} handleImage={this.handleImage}/>
//   : <p>...</p>
//   }
