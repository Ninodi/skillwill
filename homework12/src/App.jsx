import React, { Component } from "react"
import './App.css'
import TodoInput from "./components/TodoInput"
import TodoItem from "./components/TodoItem"



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //store all the todos here
      todos: [],
    };
  }

  addTodo = (text) => {
    const newTodo = {
      id: Math.random(),
      text,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  toggleComplete = (todoId) => {
    //modify todos. find the todo that was clicked with id and then change the state of completed to opposite
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  render() {
    const incompleteTodos = this.state.todos.filter((todo) => !todo.completed);
    const completeTodos = this.state.todos.filter((todo) => todo.completed);

    return (
      <div>
        <TodoInput addTodo={this.addTodo} />
        <div className="todos-container">
          <div className="incomplete">
            <h1>Incomplete Todos</h1>
            {incompleteTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleComplete={this.toggleComplete}
              />
            ))}
          </div>
          <div className="complete">
            <h1>Complete Todos</h1>
            {completeTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleComplete={this.toggleComplete}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
