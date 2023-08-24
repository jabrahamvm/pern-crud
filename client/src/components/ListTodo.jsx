import React, {useState, useEffect} from "react";
import EditTodo from "./EditTodo";

const ListTodo = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos", {
                method: "GET"
            })
            const resJSON = await response.json();
            console.log(resJSON);
            setTodos(resJSON);
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleDelete = (id) => async () => {
        try {
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });
            // This is a filter function that will return all todos that do not have the id of the todo that was deleted. (This is a way to delete a todo without having to refresh the page.)
            setTodos(todos.filter(todo => todo.todo_id !== id)); 
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td><EditTodo id={todo.todo_id} description={todo.description} /></td>
                            <td><button className="btn btn-danger" onClick={handleDelete(todo.todo_id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ListTodo;