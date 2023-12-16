import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../store/todo/todo.actions';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState('');

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoInput.trim() !== '') {
      dispatch(addTodoAction({ text: todoInput, isComplete: false, id: Math.random() }));
      setTodoInput('');
    }
  };

  return (
    <div className="input-container" style={{ marginBottom: '40px' }}>
      <input
        type="text"
        value={todoInput}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
