import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TodoInput from '../components/TodoInput'
import useRequest from '../hooks/useRequest'
import useFetch from '../hooks/useFetch'

function UpdatePage() {
    const navigate = useNavigate()
    const {todoId} = useParams()
    const {response, loading, error} = useFetch({url: `https://crudapi.co.uk/api/v1/testTodos/${todoId}`, method: 'GET'})
    const {sendRequest} = useRequest({url: `https://crudapi.co.uk/api/v1/testTodos/${todoId}`, method: 'PUT'})

    const setTodo = (username, text, date) => {
      sendRequest({username, text, date})
      .then(() => {
        console.log('updated')
        navigate('/')
      })
      .catch(err => console.log(err))
    }

    if(loading && !response) return <p>Loading . . . </p>
    if(error || !response) return <p>Something went wrong</p>

  return (
    <div>
        <TodoInput setTodo={setTodo} />
        <h1>Update Todo</h1>
        <h2>Task Id: {todoId}</h2>
    </div>
  )
}

export default UpdatePage