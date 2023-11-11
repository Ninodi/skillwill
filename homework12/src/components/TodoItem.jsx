import { Component } from "react";

class TodoItem extends Component {
  
    handleToggleComplete = () => {
        this.props.toggleComplete(this.props.todo.id);

    };
  
    render() {
      const { completed, text } = this.props.todo;
  
      return (
        <div className="todo-item">
          <div className="status">{completed ? 'Completed' : 'Incomplete'}</div>
          <p>{text}</p>
            <button onClick={this.handleToggleComplete}>
              {completed ? 'Mark as not done' : 'Mark as done'}
            </button>
        </div>
      );
    }
  }
  export default TodoItem;



