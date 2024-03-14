import { useTodo } from "../context/TodoContext";
import { useState } from "react";
const TodoItem = ({ todo }) => {
	const [isEditable, setIsEditable] = useState(false);
	const [message, setMessage] = useState(todo.todo);

	const { todos, deleteTodo, toggleComplete, updateTodo } = useTodo();
	const handleDelete = () => {
		deleteTodo(todo.id);
	};
	const handleCheck = () => {
		toggleComplete(todo.id);
		console.log(todos);
	};
	const handleEdit = () => {};
	const handleSubmit = () => {};
	return (
		<>
			<div className={`flex  p-2 rounded-md m-2 ${todo.complete? 'bg-green-200':'bg-purple-300' }`}>
				<input type="checkbox" onChange={handleCheck} checked={todo.complete} />
				<input
					type="text"
					className={`border w-full ${todo.complete ? "line-through " : null}  bg-transparent outline-none ${isEditable ?null:' border-none'}  mx-2 rounded-md px-2`}
					value={message}
					readOnly={!isEditable}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
				/>
				{/* <p>{todo.todo}</p> */}
				{/* <p onClick={handleEdit}></p>
        <p onClick={handleDelete}></p> */}
				<button
					onClick={() => {
						if (!todo.complete) {
							setIsEditable((prev) => !prev);
							if (isEditable) {
								updateTodo(todo.id, message);
							}
						}

						console.log(todos);
					}} className="bg-white p-1 rounded-md"
				>
					{isEditable && !todo.complete ? "📥" : "✏"}
				</button>
				<p onClick={handleDelete} className="bg-white p-1 rounded-md ml-3">❌</p>
			</div>

			{/* <p>this is todo item</p> */}
		</>
	);
};

export default TodoItem;
