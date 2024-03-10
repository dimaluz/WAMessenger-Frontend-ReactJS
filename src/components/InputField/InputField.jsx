import React from "react";

import classes from './InputField.module.css';

const InputField = ({label}) => {

    return (
        <div className={classes.input_field_container}>
            <input type="text" className={classes.input_field} placeholder=""/>
            <div className={classes.labelline}>{label}</div>
        </div>
    )
}

export default InputField;