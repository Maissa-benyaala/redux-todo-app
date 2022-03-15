import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
        state.todoList.push(action.payload)
    },
    deleteToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((todo) => 
          todo.id !==action.payload.id);
    },
    editTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.map((todo) => 
        todo.id === action.payload.id ? action.payload : todo);
    },
    setCheck: (state, action) => {
      state.todoList.map(todo => {
        if (action.payload === todo.id){
          if (todo.done === true) {
              todo.done = false
          } else {
            todo.done = true
          }
        }
      })
    }
  }
});

export const {saveTodo, deleteToDo, editTodo, setCheck} = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer