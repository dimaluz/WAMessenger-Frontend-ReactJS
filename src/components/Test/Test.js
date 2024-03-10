import React from "react";
import './Test.css';

const Test = (props) => {
    return(
        <div className="input-field-container">
            <div className="inner-input-field">
                <input type={props.type} required/>
                <div className='labelline'>{props.label}</div>
            </div>
        </div>
    )
}

export default Test;