import './App.css';
import TodoInput from './components/TodoInput';
import { useEffect, useState } from 'react';
import Todo from './components/Todo';



function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos()
  }, [todos])

  const getTodos = () => {
    fetch('https://crudapi.co.uk/api/v1/testTodos', {
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
        username: todo.username,
        date: todo.date,
        isCompleted: todo.isCompleted,
        id: todo._uuid
      }
    })))
    .catch(err => console.log(err))
  }

  const addTodo = (text, username, date) => {
    let newTodo = {
      text,
      username,
      date,
      isCompleted: false,
    };

    fetch('https://crudapi.co.uk/api/v1/testTodos', {
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
        user: data.items[0].username,
        date: data.items[0].date,
        isCompleted: data.items[0].isCompleted,
        id: data.items[0]._uuid
      },
      ...prev,
    ]))
    .catch(err => console.log(err))
  }

  const markAsDone= (todoId) => {
    fetch(`https://crudapi.co.uk/api/v1/testTodos/${todoId}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify({ isCompleted: !todos.find((todo) => todo.id === todoId).isCompleted }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Update Failed');
        return res.json();
      })
      .catch((err) => console.log(err));
  };


  const deleteTodo = (todoId) => {
    fetch(`https://crudapi.co.uk/api/v1/testTodos/${todoId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Update Failed');
        return res.json();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <TodoInput addTodo={addTodo}/>
      <div>
        {todos.map(todo => (
          <Todo key={todo.id} todoUser={todo.username} todoDate={todo.date} todoText={todo.text} todoStatus={todo.isCompleted} markAsDone={() => markAsDone(todo.id)} deleteTodo={() => deleteTodo(todo.id)}/>
        ))}
      </div>
    </div>
  );
}

export default App;
