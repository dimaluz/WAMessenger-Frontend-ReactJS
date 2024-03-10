import React from "react";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { RxCross2 } from "react-icons/rx";
import { AiFillCaretDown } from "react-icons/ai";


import classes from './Select.module.css';



const Select = ({id, value, onChange, options, title }) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState()
    const [isTitleActive, setIsTitleActive] = useState(false);

    const clearOption = () => {
        onChange("");
    }

    const selectOption = (option) => {
        if (option !== value) onChange(option)
    }

    const isOptionSelected = (option) => {
        return option === value;
    }

    useEffect(() => {
        if(isOpen) setHighlightedIndex(0)
    }, [isOpen])

    return (
        <div 
            tabIndex={0} 
            className={classes.container} 
            onClick={() => {
                setIsOpen(prev => !prev)
                setIsTitleActive(true)
            }}
            onBlur={() => {
                setIsOpen(false);
                if(value === ""){
                    setIsTitleActive(false)
                }
            }}
        >
            <label className={`${classes.labelline} ${isTitleActive ? classes.active : ''}`}>
                {title}
            </label>
            <span className={classes.value}>{value.label}</span>
            <button 
                className={classes["clear-btn"]}
                onClick={(e) => {
                    e.stopPropagation()
                    clearOption()
                }}
            >
                <RxCross2 />
            </button>
            <div className={classes.caret}>
                <AiFillCaretDown className={`${classes["caret-icon"]} ${isOpen ? classes.rotate : ''}`} />
            </div>
            <ul className={`${classes.options} ${isOpen ? classes.show : ''}`}>
                {options.map((option, index) => {
                    return <li 
                        key={option.value} 
                        onMouseEnter={() => setHighlightedIndex(index)}
                        className={`
                            ${classes.option} ${
                                isOptionSelected(option) ? classes.selected : ''
                            } ${
                                index === highlightedIndex ? classes.highlighted : ''
                            }
                            
                        `}
                        onClick={e => {
                            e.stopPropagation()
                            selectOption(option)
                            setIsOpen(false)
                            }
                        }
                    >
                        {option.label}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Select;

Select.propTypes = {
    options: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired | PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

Select.defaultProps = {
    options: [],
    value: "",
    onChange: ()=>{}
}