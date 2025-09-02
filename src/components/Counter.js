import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


function Counter(){
    const [counter, setCounter] = useLocalStorage('count',0);
    const decrementCount = ()=>{ 
                if (counter > 0) setCounter(counter-1);}
    return(
        <div>
            <p>
            Count : {counter}
            </p>
            <button onClick={()=> setCounter(counter+1)}>
                Increment
            </button>
            <button onClick={ decrementCount}>
                Decrement
            </button>
        </div>
    )
}
export default Counter;