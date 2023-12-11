import React from 'react'
import { Link } from 'react-router-dom'

function Todo({todoText, todoId, todoStatus, todoUser, todoDate, markAsDone, deleteTodo}) {

  return (
    <div className='todo-container'>
        <div>Todo for: <span>{todoUser}</span></div>
        <div>Deadline: <span>{todoDate}</span></div>
        <div>Todo status: <span>{todoStatus ? 'Complete' : 'Incomplete'}</span></div>
        <p>{todoText}</p>
        <div>
          <button onClick={markAsDone}>Mark as {todoStatus ? 'incomplete' : 'done'}</button>
        </div>
        <Link to={`/update/${todoId}`} className='edit-todo'>Edit Todo</Link>
        <button className="delete-todo" onClick={deleteTodo}>Delete Todo</button>
    </div>
  )
}

export default Todo