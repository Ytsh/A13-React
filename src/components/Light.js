import { useState } from "react"
import { useToggle } from "../hooks/useTogglw"

export function Light(){
    const [light,toggle] = useToggle();
    return(
        <>
            <h2>Light</h2>
            <p> {light?"On":"Off"} </p>
            <button onClick={toggle}> {light?'TurnOff':'TurnOn'} </button>
        </>
    )
}