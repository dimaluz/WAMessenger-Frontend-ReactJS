// import React from "react";
// import { useState, useEffect } from 'react';
// import moment from 'moment'
// import CheckBox from "../CheckBox/CheckBox";
// import './Tab.css';

// const Tab = (props) => {

//     const [Checked, setChecked] = useState(false);
//     const createdOn = moment(props.createdOn).format("DD MMM YYYY");
//     const [Status, setStatus] = useState();

//     const [isVisible, setIsVisible] = useState(false);
//     const toggleVisible = () => {
//         setIsVisible(!isVisible);
//     }

//     useEffect(()=>{
//         if(props.status === 'AC'){
//             setStatus('Active');
//         }
//         else{
//             setStatus('Draft');
//         }
//     })

//     return (
//         <div className='outer-message-tab'>
//             <div className='inner-message-tab'>
//                 <div className='tab-grid'>
//                     <div className='tab-checkbox'>
//                         <CheckBox 
//                             isChecked={Checked}
//                             onChange={setChecked}
//                             id={props.key}
//                         />
//                     </div>
//                     <div className='tab-logo'>

//                     </div>
//                     <div className='tab-message-title'>
//                         <h3 key={props.key}>{props.title}</h3>
//                     </div>
//                     <div className='tab-status'>
//                         <button key={props.key} className={props.status === 'AC' ? 'active' : 'draft'}>
//                             <span>{Status}</span>
//                         </button>
//                     </div>
//                     <div className='tab-createdon'>
//                         <h3 key={props.key}>{createdOn}</h3>
//                     </div>
//                     <div className='tab-updatedon'></div>
//                     <div className='shevron-btn-container'>
//                         <button className='shevron-btn' onClick={toggleVisible}>
//                             <svg xmlns="http://www.w3.org/2000/svg" className='shevron-icon' height="24" viewBox="0 -960 960 960" width="24" fill="#9ea1a7">
//                                 <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
//                             </svg>
//                         </button>
//                     </div>
    
//                 </div>
                
//             </div>
//             <div className={isVisible ? 'message-body active': 'message-body'}>
//                 {/* <div className="message-body-container">
//                     <span>{props.messageBody}</span>
//                 </div> */}
//             </div>
        

//         </div>
//     )
// }

// export default Tab;