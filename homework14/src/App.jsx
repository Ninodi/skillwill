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
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  const toggleComplete = useCallback((todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completeTodos = todos.filter((todo) => todo.completed);

  console.log("Component is rendering");

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <div className="todos-container">
        <div className="incomplete">
          <h1>Incomplete Todos</h1>
          {incompleteTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
            />
          ))}
        </div>
        <div className="complete">
          <h1>Complete Todos</h1>
          {completeTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
