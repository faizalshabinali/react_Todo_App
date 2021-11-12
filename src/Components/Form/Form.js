import React from 'react';
import './Form.css';
import TodoList from '../TodoList/TodoList';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );

    setTodos(newTodo);
    setEditTodo('');
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput('');
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput('');
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <div className='todo-container'>
      <form className='input-section' onSubmit={onFormSubmit}>
        <h1>Todo App</h1>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Enter a Todo...'
            className='task-input'
            value={input}
            required
            onChange={onInputChange}
          />
          <button className='button-add' type='submit'>
            {editTodo ? 'Ok' : 'Add'}
          </button>
        </div>
      </form>
      <div>
        <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
      </div>
    </div>
  );
};

export default Form;
