import React, { useState, useCallback } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((text) => {
    const newTodo = {
      id: Math.random(),
      text,
      completed: "incomplete",
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  const toggleComplete = useCallback((todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: todo.completed === 'complete' ? 'incomplete' : 'complete' } : todo
      )
    );
  }, []);

  const setProgress = useCallback((todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: 'progress' } : todo
      )
    );
  }, [])

  const incompleteTodos = todos.filter((todo) => todo.completed === 'incomplete');
  const completeTodos = todos.filter((todo) => todo.completed === 'complete');
  const inProgressTodos = todos.filter((todo) => todo.completed === 'progress');

  console.log("Component is rendering");

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <div className="todos-container">
        <div className="incomplete">
          <div className="title inc-title">
            <h1>Incomplete Todos</h1>
            <div className="count">{incompleteTodos.length}</div>
          </div>
          {incompleteTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              setProgress={setProgress}
            />
          ))}
        </div>
        <div className="progress">
        <div className="title prog-title">
            <h1>In Progress</h1>
            <div className="count">{inProgressTodos.length}</div>
          </div>
          {inProgressTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              setProgress={setProgress}
            />
          ))}
        </div>
        <div className="complete">
        <div className="title comp-title">
            <h1>Complete Todos</h1>
            <div className="count">{completeTodos.length}</div>
          </div>
          {completeTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              setProgress={setProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
