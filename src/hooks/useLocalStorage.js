import { useEffect, useState } from "react";


export function useLocalStorage(key, initialValue){

    const [value, setValue] = useState(()=>{
        try{
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item):initialValue;
        }catch(error){
            console.warn("Error reading localStorage", error)
            return initialValue;
        }
    })

    useEffect(()=>{
        try{
            localStorage.setItem(key, JSON.stringify(value));
        }catch(e){
            console.warn('Error writing', e)
        }
    },[value,setValue])

    return [value, setValue];
}