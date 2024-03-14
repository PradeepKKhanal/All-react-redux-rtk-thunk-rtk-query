import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComeplete:(id)=>{}
});

const TodoProvider = TodoContext.Provider;

const useTodo = () => {
	return useContext(TodoContext);
};

export { TodoProvider, useTodo };
