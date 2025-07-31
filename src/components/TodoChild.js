import { useState } from "react";

export function TodoChild( {todos, setTodos, newTodo, setNewTodo, handleAdd, toggleDone} ){
   
     
       
    
 
    
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