
import {useState} from 'react'
import { useTodo } from '../context/TodoContext'

const TodoForm = () => {
    const [todo,setTodo]=useState()
    const {todos,addTodo} =useTodo()
    const handleSubmit=(e)=>{
        e.preventDefault()
        addTodo({id:Date.now(),todo,checked:false})
        e.target.reset()
    }
   
    return ( 
        <form onSubmit={handleSubmit} className='flex m-2' >
            <input type="text" 
            placeholder="Enter your todos..."
            className='w-full p-2 rounded-l bg-gray-600 text-white outline-none'
            // value={todo}
            onChange={(e)=>{setTodo(e.target.value)}}/>
            <button type='submit' className='bg-green-600 text-white p-2 rounded-r'>Add</button>
        </form>
     );
}
 
export default TodoForm;