import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header.js';
import About from './Components/About/About.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Components/Form/Form.js';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([initialState]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          }
        />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
