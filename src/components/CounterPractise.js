import { useState } from "react";

export default function Counterss(){

    // let counter = 0;
    const [counter, setCounter] = useState(0)

    const incrementCount = () =>{
        // counter++;
        setCounter(counter+1);
    }

    return(
        <>
        <h3>
            Count: {counter}
        </h3>
            <button onClick={() => incrementCount()}
            >Increment</button>

        </>
    )
}
