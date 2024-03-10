import React from "react";
import {useState} from 'react';

import './ButtonToggle.css';
import Toggle from "../../Toggle/Toggle";
import InputField from "../../InputField/InputField";

const ButtonToggle = () => {
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [isToggle1Active, setIsToggle1Active] = useState(false);
    const [isToggle2Active, setIsToggle2Active] = useState(false);
    const [isToggle3Active, setIsToggle3Active] = useState(false);

    return(
        <div className='button-toggle-section'>
            <div className='button-toggle-flexbox'>
                <div className='button-toggle-container'>
                    <Toggle 
                        id='button-toggle'
                        isChecked={isButtonActive}
                        onChange={setIsButtonActive}
                    />
                </div>
                <div className={`button-container ${isButtonActive ? 'active' : ''}`}>
                    <h3>Buttons</h3>
                </div>
            </div>
            <div className={`button-settings-box ${isButtonActive ? 'active' : ''}`}>
                <div className='button-fields-container'>
                    <div className='type-box'>
                        <InputField type='text' label='Type'/>
                    </div>
                    <div className='button-box-1'>
                        <div className='button-field-1'>
                            <InputField type='text' label='Button text'/>
                        </div>
                        <div className='toggle-field-1'>
                            <Toggle 
                                id='toggle-field-1'
                                isChecked={isToggle1Active}
                                onChange={setIsToggle1Active}
                            />
                        </div>
                    </div>
                    <div className='button-box-2'>
                        <div className='button-field-2'>
                            <InputField type='text' label='Button text'/>
                        </div>
                        <div className='toggle-field-2'>
                            <Toggle 
                                id='toggle-field-2'
                                isChecked={isToggle2Active}
                                onChange={setIsToggle2Active}
                            />
                        </div>
                    </div>
                    <div className='button-box-3'>
                        <div className='button-field-3'>
                            <InputField type='text' label='Button text'/>
                        </div>
                        <div className='toggle-field-3'>
                            <Toggle 
                                id='toggle-field-3'
                                isChecked={isToggle3Active}
                                onChange={setIsToggle3Active}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ButtonToggle;