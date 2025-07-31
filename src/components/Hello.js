import { useState } from "react";
import Counters from "./Counters";


function Hello(){
// const [counter, setCounter] = useState(10);
  // const decrementCount = ()=>{ if (counter > 0) setCounter(counter-2);}
  // const incrementCounter = () => setCounter(counter+3)
  return(
      <>
    {/* <Counters counter = {counter} 
    incrementCounter = {incrementCounter}
    decrementCounter = {decrementCount} /> */}
        <h1>Hello!</h1>
        <p>Welcome everyone</p>
        </>
    )
}
export default Hello;