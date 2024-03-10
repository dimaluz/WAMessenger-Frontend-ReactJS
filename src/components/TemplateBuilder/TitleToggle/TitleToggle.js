import React from "react";
import {useState} from 'react';

import './TitleToggle.css';
import Toggle from "../../Toggle/Toggle";
import InputField from "../../InputField/InputField";

const TitleToggle = () => {

    const [isTitleActive, setIsTitleActive] = useState(false);

    return(
        <div className='title-toggle-section'>
            <div className='title-toggle-flexbox'>
                <div className='toggle-container'>
                    <Toggle 
                        id='title-toggle'
                        isChecked={isTitleActive}
                        onChange={setIsTitleActive}
                    />
                </div>
                <div className={`title-container ${isTitleActive ? 'active' : ''}`}>
                    <h3>Title</h3>
                </div>
            </div>
            <div className={`title-settings-box ${isTitleActive ? 'active' : ''}`}>
                <div className='title-fields-container'>
                    <div className='type-box'>
                        <InputField type='text' label='Type'/>
                    </div>
                    <div className='header-box'>
                        <InputField type='text' label='Header text'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleToggle;