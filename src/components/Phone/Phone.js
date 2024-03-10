import React from "react";
import { useSelector } from 'react-redux';
import parser from 'html-react-parser';

import './Phone.css';

const Phone = (props) => {

    return(
    <div className='phone-wrapper'>
        <div className='phone'>
            <div className='phone-buttons'>
                <div className='left'>
                    <div className='button'></div>
                    <div className='button'></div>
                    <div className='button'></div>
                </div>
                <div className='right'>
                    <div className='button'></div>
                </div>
                <div className='camera'></div>
                <div className='screen-container'>
                    <div className='bg'>
                        <div className='deep-purple'>
                            <div className='section'>
                                <div className='glow'></div>
                            </div>
                            <div className='section'>
                                <div className='glow'></div>
                            </div>
                        </div>
                    </div>

                    <div className='msg-container'>
                        <div className='scrollbox'>
                            <span className={props.templateText.trim().length ? 'msg-box': ''} value={props.templateText.trim()} readOnly={true}>
                                
                                {parser(props.templateText)}
                                
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            <div className='notch-container'>
                <div className='notch'>
                    <div className='content'>
                        <div className='left'>
                            <div className='title'></div>
                            <div className='text'></div>
                        </div>
                        <div className='right'>
                            <div className='bar'>
                                <div className='duration'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='notch-blur'></div>

            </div>

        </div>

        <div className='pallette'>

        </div>
    </div>
    )
}

export default Phone;