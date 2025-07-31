import { useState } from "react"


export function CharacterCount(){
    const [text,setText] = useState("")
    const handleChange = (e) {
        if(text.length >100 )
            return
         setText(e.target.value)
    }
    return(
        <>
            <textarea 
                value={text}
                onChange={(e) => handleChange(e)}
                rows={5}
            />
            {text.length}

        </>
    )
}