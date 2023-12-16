import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodoAction, markAsDoneAction } from '../store/todo/todo.actions'

function Todo({todoValue, todoStatus, todoId}) {
    const todoList = useSelector((state) => state.todo.todoList)
    const dispatch = useDispatch()

    const markAsDone = () => {
        dispatch(markAsDoneAction(todoId))
    }

    const deleteTodo = () => {
        dispatch(deleteTodoAction(todoId))
    }
  return (
    <div className='todo-container'>
        <p>{todoValue}</p>
        <p>{todoStatus ? "Complete" : "Incomplete"}</p>
        <button onClick={markAsDone}>Done</button>
        <button onClick={deleteTodo}>Delete</button>
    </div>
  )
}

export default Todo