

function Counters({counter,  setCounter}){

const decrementCount = ()=>{ if (counter > 0) setCounter(counter-1);}
  const incrementCounter = () => setCounter(counter+1)
    return(
        <div>
            <p>
            Count : {counter}
            </p>
            <button onClick={incrementCounter}>
                Increment
            </button>
            <button onClick={ decrementCount}>
                Decrement
            </button>
        </div>
    )
}
export default Counters;