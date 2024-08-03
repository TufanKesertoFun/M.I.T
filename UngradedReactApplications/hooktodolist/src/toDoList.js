import React, { useState } from "react";
function TodoItem({ todo, onDelete }) {
    return(
        <li>
            <span>{todo.text}</span>
            <button onClick={() =>onDelete(todo.id)}>Delete</button>
        </li>
    );
}

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text:"Learn React" },
        { id: 2, text:"Build a project" },
        { id: 3, text:"Deploy project" },
    ]);
    const addTodo = () => {
        const newTodo = {
            id: todos.length + 1,
            text: `Todo ${todos.length + 1}`,
        };
        setTodos([...todos, newTodo]);
    };
    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };
    return (
        <div>
            <h2>Todo List</h2>
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
                ))}
            </ul>
        </div>
    );
}
export default TodoList;