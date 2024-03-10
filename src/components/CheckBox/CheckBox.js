import React from "react";
import './CheckBox.css';

const CheckBox = (props) => {
    return (
        <label className='checkbox-wrapper'>
            <input type='checkbox' 
                className='checkbox-element' 
                checked={props.isChecked}
                onChange={() => props.onChange((prev) => !prev)} 
            />
        </label>
    )
}

export default CheckBox;