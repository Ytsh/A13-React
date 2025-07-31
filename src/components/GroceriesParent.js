import { useState } from "react";
import Groceries from "./Groceries";

export function ParentGrocery(){

const [groceries, setGroceries] = useState([
            { id: 1, text: 'Buy groceries'},
            { id :2, text: 'Buy milk'}
        ])
    return(
        <>
            <Groceries groceries={groceries} setGroceries={setGroceries} />
        </>
    )
}