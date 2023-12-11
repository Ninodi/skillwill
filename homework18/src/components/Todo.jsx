import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage, LanguageOptions } from '../contexts/LanguageContext';

function Todo({todoText, todoId, todoStatus, todoUser, todoDate, markAsDone, deleteTodo}) {
  const { language } = useLanguage();
  const translations = LanguageOptions[language];

  return (
    <div className='todo-container'>
        <div>{translations.taskFor}: <span>{todoUser}</span></div>
        <div>{translations.deadline}: <span>{todoDate}</span></div>
        <div>{translations.todoStatus}: <span>{todoStatus ? `${translations.markIncomplete}` : `${translations.markDone}`}</span></div>
        <p>{todoText}</p>
        <div>
          <button onClick={markAsDone}> {todoStatus ? `${translations.markIncomplete}` : `${translations.markDone}`}</button>
        </div>
        <Link to={`/update/${todoId}`} className='edit-todo'>{translations.editBtn}</Link>
        <button className="delete-todo" onClick={deleteTodo}>{translations.deleteBtn}</button>
    </div>
  )
}

export default Todo