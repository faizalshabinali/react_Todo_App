import React, { Component } from 'react';
import './TodoApp.css';

class TodoApp extends Component {
  state = {
    newTodo: '',
    todos: [],
  };

  handleChange = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  };

  // storeItems = (event) => {
  //   event.preventDefault();
  //   const { newTodo } = this.state;
  //   const allTodos = this.state.todos;
  //   allTodos.push(newTodo);
  //   this.setState({
  //     todos: allTodos,
  //   });
  // };

  storeItems = (event) => {
    event.preventDefault();
    const { newTodo } = this.state;
    this.setState({
      todos: [...this.state.todos, newTodo],
      newTodo: '',
    });
  };

  // deletTodos = (index) => {
  //   const allTodos = this.state.todos;
  //   allTodos.splice(index, 1);
  //   this.setState({
  //     todos: allTodos,
  //   });
  // };

  deletTodos = (key) => {
    this.setState({
      todos: this.state.todos.filter((data, index) => index !== key),
    });
  };

  render() {
    const { newTodo, todos } = this.state;
    return (
      <div className='todo-container'>
        <form className='input-section' onSubmit={this.storeItems}>
          <h1>Todo App</h1>

          <input
            type='text'
            value={newTodo}
            onChange={this.handleChange}
            placeholder='Enter Items...'
          />
        </form>
        <ul>
          {todos.map((data, index) => (
            <li key={index}>
              {data}{' '}
              <i
                className='fas fa-trash-alt'
                onClick={() => this.deletTodos(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
