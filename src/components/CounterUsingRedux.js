import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/action";


function CounterUsingRedux(){
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return(
        <div>
            <p>
            Count : {count}
            </p>
            <button onClick={()=> dispatch(increment())}>
                Increment
            </button>
            <button onClick={ ()=> dispatch(decrement())}>
                Decrement
            </button>
            <button onClick={ ()=> dispatch(reset())}>
                Reset
            </button>
        </div>
    )
}
export default CounterUsingRedux;