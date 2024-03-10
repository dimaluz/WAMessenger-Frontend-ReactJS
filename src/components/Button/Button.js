import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button className='repple-btn'>
        <span className='button-content'>{props.title}</span>
    </button>
  )
}

export default Button;