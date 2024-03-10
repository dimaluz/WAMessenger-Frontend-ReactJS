import React from 'react';
import './ButtonBlank.css';

const ButtonBlank = (props) => {
  return (
    <button className='repple-btn-blank'>
        <span className='button-blank-content'>{props.title}</span>
    </button>
  )
}

export default ButtonBlank;