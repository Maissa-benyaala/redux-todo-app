import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {saveTodo} from '../features/todoSlice'


function AddTodo() {
    const [todo, setTodo] = useState("")
    const dispatch = useDispatch();

    const addTodo = () => {
        dispatch(saveTodo({
            item: todo,
            done: false,
            id: Date.now()
        }))
    }
  return (
    <div className='todo'>
        <input type='text' placeholder='Add Task' value={todo} onChange={e => setTodo(e.target.value)}/>
        <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default AddTodo