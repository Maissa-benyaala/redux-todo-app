import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import { useSelector } from 'react-redux'
import { selectTodoList } from './features/todoSlice'


function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
    <div className="app-container">
      <div className="todo-container">
        {todoList.map(todo => (
          <Todo 
            name={todo.item}
            done={todo.done}
            id ={todo.id}
          />
        ))}
      </div>
      <AddTodo />
    </div>
    </div>
  );
}

export default App;
