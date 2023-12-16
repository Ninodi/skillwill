import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import TodoInput from './components/TodoInput';
import { useSelector } from 'react-redux';

function App() {
  const incompleteTodos = useSelector((state) => state.todo.incompleteTodos);
  const doneTodos = useSelector((state) => state.todo.doneTodos);
  const todoList = useSelector((state) => state.todo.todoList);

  console.log(todoList)
  return (
    <div className="App">
      <TodoInput />
      <div className='list-container'>
        <div className='incomplete-todos'>
          {incompleteTodos.map(item => (
            <Todo key={item.id} todoValue={item.text} todoStatus={item.isComplete} todoId={item.id} />
          ))}
        </div>
        <div className='done-todos'>
          {doneTodos.map(item => (
            <Todo key={item.id} todoValue={item.text} todoStatus={item.isComplete} todoId={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
