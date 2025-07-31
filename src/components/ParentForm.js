import { useState } from "react";
import Form from "./Form";
import Welcome from "./Welcome";

function ParentForm(){
    const [formData, setFormData] = useState({email:"", password:""});

    const handleChange = (e) =>{
        setFormData(
            {...formData, [e.target.name]: e.target.value}
        );
        console.log(formData);
    };
    return(
        <>
        <Form email = {formData.email} password={formData.password}
            onChange={handleChange}
        />
        <Welcome name={formData.email} message={formData.password} 
        />
        </>
    )
}

export default ParentForm;