import React from "react";
import labels from "./FormInput.module.css"
import inputs from "./FormInput.module.css"
const FormInput = (props) => {
    return (
        <div>
            <label className={labels.myLabel}>{props.title}</label>
            <input onBlur={props.onBlur} name={props.name} className={inputs.myInput} type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        </div>
    )
}

export default FormInput;