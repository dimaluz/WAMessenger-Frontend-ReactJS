import React from "react";

import classes from './TextBox.module.css';

const TextBox = ({label, onChange}) => {
    return (
        <div className={classes.textbox_container}>
            <textarea 
                name="" 
                id="" 
                cols="50" 
                rows="10" 
                className={classes.textbox_field} 
                onChange={(e) => onChange(e)}
                placeholder=""
            >

            </textarea>
            <label className={classes.labelline}>{label}</label>
        </div>
    )
}
export default TextBox;