import { useState } from "react";

function TodoList(){
    const [todos, setTodos] = useState([
        { id: 1, text: 'Buy groceries', done: false},
        { id :2, text: 'Go to walk', done: false}
    ])
    const [newTodo, setNewTodo] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        if(newTodo.trim() === '') return;
        const newItem = {
            id: Date.now(),
            text: newTodo,
            done: false
        };
        setTodos([...todos, newItem])
        
        setNewTodo('');
    }

    const toggleDone = (id) => {
        setTodos(
            todos.map(todo => 
                todo.id === id ? { ...todo, done:!todo.done} : todo
            )
        )
    }

    return(
        <div>
            <h2>To-do List</h2>
            <form onSubmit={handleAdd}>
                <input 
                    type="text"
                    placeholder="Add new task"
                    value = {newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {
                    todos.map(todo =>(
                        <li 
                        key = {todo.id}
                        onClick = {() => toggleDone(todo.id)}
                        style={{
                            cursor:'pointer',
                            textDecoration: todo.done? 'line-through':'none',
                            color: todo.done? 'green' : 'red'
                        }}
                        > {todo.text} </li>
                    ))
                }
            </ul>

        </div>
    )
}
export default TodoList;