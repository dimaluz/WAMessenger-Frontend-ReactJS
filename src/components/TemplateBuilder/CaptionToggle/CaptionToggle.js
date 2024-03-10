import React from "react";
import {useState} from 'react';

import './CaptionToggle.css';
import Toggle from "../../Toggle/Toggle";
import InputField from "../../InputField/InputField";

const CaptionToggle = () => {
    const [isCaptionActive, setIsCaptionActive] = useState(false);

    return(
        <div className='caption-toggle-section'>
            <div className='caption-toggle-flexbox'>
                <div className='caption-toggle-container'>
                    <Toggle 
                        id='caption-toggle'
                        isChecked={isCaptionActive}
                        onChange={setIsCaptionActive}
                    />
                </div>
                <div className={`caption-container ${isCaptionActive ? 'active' : ''}`}>
                    <h3>Caption</h3>
                </div>
            </div>
            <div className={`caption-settings-box ${isCaptionActive ? 'active' : ''}`}>
                <div className='caption-field-container'>
                    <div className='caption-box'>
                        <InputField type='text' label='Type'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CaptionToggle;