import React, { useState, useCallback } from 'react';

const TodoInput = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState('');

  const handleInputChange = useCallback((event) => {
    setTodoInput(event.target.value);
  }, []);

  const handleAddTodo = useCallback(() => {
    if (todoInput !== '') {
      addTodo(todoInput);
      setTodoInput('');
    }
  }, [addTodo, todoInput]);

  return (
    <div className="input-container">
      <input
        type="text"
        value={todoInput}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default React.memo(TodoInput);
