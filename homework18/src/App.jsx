import './App.css';
import TodoInput from './components/TodoInput';
import { useEffect, useState } from 'react';
import Todo from './components/Todo';



function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos()
  }, [])

  const getTodos = () => {
    fetch('https://crudapi.co.uk/api/v1/todos', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    })
    .then(res => {
      if(!res.ok) throw new Error("Response Failed")
      return res.json()
    })
    .then(data => setTodos(data.items.map(todo => {
      return{
        text: todo.text,
        isCompleted: todo.isCompleted,
        id: todo._uuid
      }
    })))
    .catch(err => console.log(err))
  }

  const addTodo = (text) => {
    let newTodo = {
      text,
      isCompleted: false,
    };

    fetch('https://crudapi.co.uk/api/v1/todos', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify([newTodo])
    })
    .then(res => {
      if(!res.ok) throw new Error("Response Failed")
      return res.json()
    })
    .then(data => setTodos((prev) => [
      {
        text: data.items[0].text,
        isCompleted: data.items[0].isCompleted,
        id: data.items[0]._uuid
      },
      ...prev,
    ]))
    .catch(err => console.log(err))
  }


  return (
    <div className="App">
      <TodoInput addTodo={addTodo}/>
      <div>
        {todos.map(todo => (
          <Todo key={todo.id} todoText={todo.text} todoStatus={todo.isCompleted}/>
        ))}
      </div>
    </div>
  );
}

export default App;
