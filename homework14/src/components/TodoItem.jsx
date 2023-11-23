import React, {memo} from "react";

const TodoItem = ({ todo, toggleComplete, setProgress }) => {
  const handleToggleComplete = () => {
    toggleComplete(todo.id);
  };

  const handleProgress = () => {
    setProgress(todo.id)
  };

  const setBorderColor = () => {
    if(todo.completed === 'incomplete'){
      return 'red'
    }else if(todo.completed === 'progress'){
      return '#FFE600'
    }else return 'green'
  }
  // checking if items are really rerendering
  console.log(`Rendering TodoItem ${todo.id}`);

  return (
    <div className="todo-item" style={{border: `2px solid ${setBorderColor()}`}}>
      <div className="status">{todo.completed === 'complete' ? "Completed" : "Incomplete"}</div>
      <p>{todo.text}</p>
      <button onClick={handleToggleComplete}>
        {todo.completed === 'complete' ? "Mark as not done" : "Mark as done"}
      </button>
      <button onClick={handleProgress}>In progress</button>
    </div>
  );
};

// Using memo to prevent unnecessary renders
export default memo(TodoItem);
