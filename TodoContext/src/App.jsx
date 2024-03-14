import { useState, useEffect } from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
	const [todos, setTodos] = useState([
		// { id: 1, todo: "this is the todo I want to show", complete: false },
		// { id: 2, todo: "this is the todo I want to show 2", complete: false },
		// { id: 3, todo: "this is the todo I want to show 3", complete: false }
	]);
	useEffect(() => {
		console.log(localStorage);

		let localtodos = JSON.parse(localStorage.getItem("todos"));
		console.log(localtodos);
		if (localtodos) {
			setTodos(localtodos);
		} 
	}, []);

	useEffect(() => {
		if (todos.length > 0) {
			localStorage.setItem("todos", JSON.stringify(todos));
		}
	}, [todos]);

	const addTodo = (todo) => {
		console.log("ee");
		setTodos((prev) => {
			console.log("ee");
			return [...prev, todo];
		});
	};
	const deleteTodo = (id) => {
		setTodos((prev) => {
			return prev.filter((todo) => {
				return todo.id !== id;
			});
		});
	};

	const toggleComplete = (id) => {
		setTodos((prevTodo) => {
			return prevTodo.map((todo) => {
				if (todo.id != id) {
					return todo;
				} else {
					return { ...todo, complete: !todo.complete };
				}
			});
		});
	};

	const updateTodo = (id, updatedtodo) => {
		console.log("update");
		setTodos((prevTodo) => {
			return prevTodo.map((todo) => {
				if (todo.id == id) {
					console.log("again", todo);
					return { ...todo, todo: updatedtodo };
				} else {
					return todo;
				}
				console.log(todos);
			});
		});
		// console.log(todos)
	};

	return (
		<>
			<TodoProvider
				value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
			>
				<div className="flex-column w-96 m-auto mt-32">
					<p className="text-center font-bold text-xl mb-6 text-white">Manage your Todos</p>
					<TodoForm></TodoForm>

					{todos.map((todo) => {
						return <TodoItem key={todo.id} todo={todo}></TodoItem>;
					})}
				</div>
			</TodoProvider>
		</>
	);
}

export default App;
