import {createContext, useContext} from 'react'

const TodoContext=createContext({
    todos:[{id:1,
            todo:'this is todo',
           completed:false}],
    addTodo:()=>{},
    updateTodo:()=>{},
    deletedTodo:()=>{},
    toogleCheck:()=>{}


})

const TodoProvider=TodoContext.Provider

const useTodo=()=>{
    return useContext(TodoContext)
}

export {TodoContext,TodoProvider,useTodo}