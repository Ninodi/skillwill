import React from 'react'

function Todo({todoText, todoStatus}) {
  return (
    <div className='todo-container'>
        <p>{todoText}</p>
        <p>{todoStatus ? 'Complete' : 'Incomplete'}</p>
    </div>
  )
}

export default Todo