import { Component } from "react";

class TodoItem extends Component {
    shouldComponentUpdate(nextProps) {
      // Only update if the 'completed' prop changes
      return this.props.todo.completed !== nextProps.todo.completed;
    }
    
    handleToggleComplete = () => {
        this.props.toggleComplete(this.props.todo.id);

    };
  
    render() {
      const { completed, text } = this.props.todo;

      //checking if items are really rerendering
      console.log(`Rendering TodoItem ${this.props.todo.id}`);

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



