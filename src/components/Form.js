import { useState } from "react";

function Form({email, password, onChange}){
    // const [email,setEmail] = useState("")
    // const [password,setPassword] = useState("")

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email,password);
    // }

    return(
        <>
            <form>
                <label htmlFor="email">Email:</label>
                <input 
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Email halam"
                    value={email}
                    onChange={onChange}
                />
                <label htmlFor="password">Password:</label>
                <input 
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password halam"
                    value={password}
                    onChange={onChange}
                />
            </form>
        </>
    )

}
export default Form;