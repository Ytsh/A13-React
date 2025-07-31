import { useEffect, useState } from "react";

export function UseEffectPractis(){

    const [toggle,setToggle] = useState(false);
    const [toggle2,setToggle2] = useState(false);
    
    useEffect(()=>{
        console.log("Hello-runs all the time");
    })

    useEffect(()=>{
        console.log("Hello - runs only at the beginning");
    },[])

      useEffect(()=>{
        console.log("Hello - runs at the beninning and when toggle value cahnges");
    },[toggle])

    return(
        <>
            <button onClick={() => setToggle(p => !p)}>Toggle</button>
            <button onClick={() => setToggle2(previous => !previous)}>Toggle2</button>
        </>
    )

}