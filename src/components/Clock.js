import { useEffect, useState } from "react";

export function Clock(){
    const [time,setTime] = useState(new Date())

    useEffect(()=>{

        const interval = setInterval(() =>{
            setTime(new Date())
        },1000)
        
        return () => clearInterval(interval)

    }, [])
    
    return(
        <>
            <h2>Clock: {time.toLocaleTimeString()}</h2>
        </>
    )
}