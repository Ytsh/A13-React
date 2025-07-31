import { useState } from "react";
import { TodoChild } from "./TodoChild";

export function TodoParent(){
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
        <>
            <TodoChild 
                todos={todos}
                setTodos={setTodos}
                newTodo={newTodo}
                setNewTodo = {setNewTodo}
                handleAdd={handleAdd}
                toggleDone={toggleDone}
            />
        </>
    )
}