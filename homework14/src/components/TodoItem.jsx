import React, {memo} from "react";

const TodoItem = ({ todo, toggleComplete }) => {
  const handleToggleComplete = () => {
    toggleComplete(todo.id);
  };

  // checking if items are really rerendering
  console.log(`Rendering TodoItem ${todo.id}`);

  return (
    <div className="todo-item">
      <div className="status">{todo.completed ? "Completed" : "Incomplete"}</div>
      <p>{todo.text}</p>
      <button onClick={handleToggleComplete}>
        {todo.completed ? "Mark as not done" : "Mark as done"}
      </button>
    </div>
  );
};

// Using memo to prevent unnecessary renders
export default memo(TodoItem);
