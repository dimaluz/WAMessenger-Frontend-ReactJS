import React from "react";
import moment from 'moment';

import { useState, useEffect } from 'react';

import CheckBox from "../CheckBox/CheckBox";
import './MesTab.css';



const MesTab = (props) => {

    const [Checked, setChecked] = useState(false);
    const createdOn = moment(props.createdOn).format("DD MMM YYYY");
    const [Status, setStatus] = useState();

    const [isActive, setIsActive] = useState(false);
    const toggleActive = () => {
        setIsActive(!isActive);
    }

    useEffect(()=>{
        if(props.status === 'AC'){
            setStatus('Active');
        }
        else{
            setStatus('Draft');
        }
    })

    return(
        <div className={`msg-tab-accordion ${isActive ? 'active' : ''}`}>

            <div className='msg-tab-container'>
                <div className='msg-tab-grid'>

                    <div className='tab-checkbox'>
                        <CheckBox 
                            isChecked={Checked}
                            onChange={setChecked}
                            id={props.key}
                        />
                    </div>

                    <div className='tab-logo'>

                    </div>

                    <div className='tab-message-title'>
                        <h3 key={props.key}>{props.title}</h3>
                    </div>

                    <div className='tab-status'>
                        <button key={props.key} className={props.status === 'AC' ? 'active' : 'draft'}>
                            <span>{Status}</span>
                        </button>
                    </div>

                    <div className='tab-createdon'>
                        <h3 key={props.key}>{createdOn}</h3>
                    </div>

                    <div className='tab-updatedon'>
                        
                    </div>

                    <div className='tab-btn-container'>
                        <button className='basket-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#9ea1a7">
                            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                        </button>
                        <button className='shevron-btn' onClick={toggleActive}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#9ea1a7" className={`icon ${isActive ? 'active': ''}`}>
                                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                            </svg>
                        </button>
                    </div>
    

                </div>
            </div>

            <div className={`msg-body-container ${isActive ? 'active' : ''}`}>
                {props.messageBody}
            </div>

        </div>
    )
}

export default MesTab;