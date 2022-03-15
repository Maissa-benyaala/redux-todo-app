import React from 'react'
import { Checkbox } from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {deleteToDo, setCheck} from '../features/todoSlice'
// import EditTodo from './EditTodo'

function Todo({name, done, id}) {
    const dispatch = useDispatch()

    const handleCheck = () => {
        dispatch(setCheck(id))
    }

  return (
    <div className='todo-item'>
        <Checkbox 
            checked={done}
            color="primary"
            onChange={handleCheck}
            inputProps={{ 'aria-label': 'secondary-checkbox'}}
        />
        <p className={done && 'item-done'}>{name}</p>
        <i class="fa-solid fa-trash-can delete-item" onClick={()=>dispatch(deleteToDo({id:id}))}></i> 
    </div>
  )
}

export default Todo