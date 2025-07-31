import { useState } from "react";

function Groceries({groceries, setGroceries}){
    
        const [newGrocery, setNewGrocery] = useState('');
    
        const handleAdd = (e) => {
            e.preventDefault();
            if(newGrocery.trim() === '') return;
            const newItem = {
                id: Date.now(),
                text: newGrocery
            };
            setGroceries([...groceries, newItem])
            
            setNewGrocery('');
        }

        const handleDelete = (id) => {
            const newGroceryList = groceries.filter(
                grocery => grocery.id !== id
            )      
            setGroceries(newGroceryList);      
        }

    
        return(
            <div>
                <h2>Groceries</h2>
                <form onSubmit={handleAdd}>
                    <input 
                        type="text"
                        placeholder="Add new grocery"
                        value = {newGrocery}
                        onChange={(e) => setNewGrocery(e.target.value)}
                    />
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {
                        groceries.map(grocery =>(
                            <li 
                            key = {grocery.id}
                            > {grocery.text}  <button onClick={() => handleDelete(grocery.id)}>Remove</button> </li>
                        ))
                    }
                </ul>
    
            </div>
        )
}

export default Groceries;