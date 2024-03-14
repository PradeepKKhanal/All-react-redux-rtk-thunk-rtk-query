import TodoItem from "./components/TodoItem"
import { TodoContextProvider,useTodoContext } from "./context/Todocontext"
import {useState} from 'react'
export function App() {
  const val=useTodoContext()
  console.log(val)

  const [todos,setTodos]=useState([{id:1,
    todo:'First todo ',
    completed: false},
    {id:2,
      todo:'Second todo ',
      completed: false},
      {id:3,
        todo:'Third todo ',
        completed: false}])
  return (
   <>
   <TodoContextProvider value={todos}>

<h1>hello world {todos[0].todo}</h1>
    {todos.map((todo)=>{return(
      <TodoItem value={todo.todo} key={todo.id}></TodoItem>
    )})}
   </TodoContextProvider>

    
   
   </>
  )
}


