import React, { useState } from 'react'

const TodoInput = ({ setTodo }) => {
  const [todoInput, setTodoInput] = useState('');
  const [userInput, setUserInput] = useState('')
  const [deadlineInput, setDeadlineInput] = useState('')

  const handleTodoInputChange = (e) => {
    setTodoInput(e.target.value);
  }

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  }

  const handleDeadlineInputChange = (e) => {
    setDeadlineInput(e.target.value);
  }

  const handleAddTodo = () => {
    if (todoInput !== '' && userInput !== '' && deadlineInput !== '' ) {
      setTodo(userInput, todoInput, deadlineInput);
      setTodoInput('');
      setUserInput('')
      setDeadlineInput('')
    }else{
      alert('Fill all the fields')
    }
  };

  return (
    <div className="input-container" style={{marginBottom: '40px'}}>
      <input
        type="text"
        value={userInput}
        placeholder='User'
        onChange={handleUserInputChange}
      />
      <input
        type="text"
        value={todoInput}
        placeholder='Add task'
        onChange={handleTodoInputChange}
      />
      <input
        type="date"
        value={deadlineInput}
        onChange={handleDeadlineInputChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};
export default TodoInput