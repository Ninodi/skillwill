import React, { useState } from 'react'

const TodoInput = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState('');

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  }

  const handleAddTodo = () => {
    if (todoInput !== '') {
      addTodo(todoInput);
      setTodoInput('');
    }
  };

  return (
    <div className="input-container" style={{marginBottom: '40px'}}>
      <input
        type="text"
        value={todoInput}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};
export default TodoInput