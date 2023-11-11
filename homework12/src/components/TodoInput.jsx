import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInput: '',
    };
  }

  handleInputChange = (event) => {
    //targeting input values when typing in
    this.setState({ todoInput: event.target.value });
  };

  handleAddTodo = () => {
    //adding new todo to todos state and clearing input field
    if (this.state.todoInput !== '') {
      this.props.addTodo(this.state.todoInput);
      this.setState({ todoInput: '' });
    }
  };

  render() {
    return (
      <div className="input-container">
        <input
          type="text"
          value={this.state.todoInput}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    );
  }
}

export default TodoInput;
