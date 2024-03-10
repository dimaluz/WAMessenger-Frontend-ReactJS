import React from "react";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { RxCross2 } from "react-icons/rx";
import { AiFillCaretDown } from "react-icons/ai";

import classes from './MultiSelect.module.css';



const MultiSelect = ({ id, value, onChange, options, title }) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState();
    const [isLabelActive, setIsLabelActive] = useState(false);

    const clearOption = () => {
        onChange([]);
    }

    const selectOption = (option) => {
        if (value.includes(option)){
            onChange(value.filter(o => o !== option))
        }
        else{
            onChange([...value, option])
        }
    }

    const isOptionSelected = (option) => {
        return value.includes(option);
    }

    useEffect(() => {
        if(isOpen) setHighlightedIndex(0)
    }, [isOpen])

    // useEffect(() => {
    //     if(value.lenght !== 0) {
    //         setIsLabelActive(true);
    //     }
    //     else{
    //         setIsLabelActive(false);
    //     }
    // }, [value]);

    return (
        <div 
            tabIndex={id} 
            className={classes.container} 
            onClick={() => {
                setIsOpen(prev => !prev)
                setIsLabelActive(true)
            }}
            onBlur={() => {
                setIsOpen(false);
                if(value.length === 0){
                    setIsLabelActive(false)
                }
            }}
        >
            <label className={`${classes.labelline} ${isLabelActive ? classes.active : ''}`}>
                {title}
            </label>
            <span className={classes.value}>{value.map((v) => (
                <button 
                    className={classes['option-badge']}
                    key={v.value} 
                    onClick={ e => {
                        e.stopPropagation()
                        selectOption(v)
                    }
                }>
                    <span className={classes.title}>{v.label}</span>
                    <span className={classes['remove-btn']}>
                        <RxCross2 />
                    </span>
                </button>
            ))}</span>
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
                <AiFillCaretDown className={`${classes["caret-icon"]} ${isOpen ? classes.rotate : ''}`}/>
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

export default MultiSelect;

MultiSelect.propTypes = {
    options: PropTypes.array.isRequired,
    value: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
}

MultiSelect.defaultProps = {
    options: [],
    value: [],
    onChange: ([])=>{}
}