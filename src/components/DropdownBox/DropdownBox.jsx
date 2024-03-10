import React, { useEffect, useMemo, useState } from "react";
import PropTypes from 'prop-types';
import { AiFillCaretDown } from "react-icons/ai";

import classes from './DropdownBox.module.css'


const DropdownBox = ({id, options, value, onChange}) => {
    // console.log(classes);
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Manage outside click
        function handleOutsideClick(e){
            // if(!e.target.closest(`Toggle-${id}`) && !e.target.closest(`Dropdown-${id}`)){
            //     setOpen(false);
            // }
            if(!e.target.closest(`Dropdown-${id}`)){
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [id]);

    const opt = useMemo(() => {
        // Manage search and options
        const OPTIONS = options.filter((o) => o.toString().toLowerCase().indexOf(search.toString().toLowerCase()) !== -1);
        return OPTIONS.length > 0 ? OPTIONS.map((o, i) => (
            <div key={i} className={classes.option_item} onClick={()=>{
                onChange(o);
                setOpen(false);
            }}>
                <span key={i}>{o.toString()}</span>
            </div>
        )) : [(
            <div key={'not-found'} onClick={()=>{
                onChange("");
                setOpen(false);
            }}>
                No Matches Found
            </div>
        )]
    }, [options, search]);

    useMemo(() => setSearch(value), [value]);

    return(
        <div id={`Dropdown-${id}`} className={classes.dropdown_wrapper}>
            <div className={classes.dropdown_container} onClick={() => setOpen((prev)=>!prev)}>
                <input 
                    type='text'  
                    className={classes.dropdown_content}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    // onFocus={() => setOpen(true)} 
                    placeholder=""
                />
                <label className={classes.labelline}>Search here...</label>
                <AiFillCaretDown id={`Toggle-${id}`} className={open ? [classes.icon, classes.open].join(' ') : classes.icon} />
            </div>
            <div className={ open ? [classes.options_container, classes.visible].join(' ') : classes.options_container}>
                {opt}
            </div>
        </div>
    )
}

export default DropdownBox;

DropdownBox.propTypes = {
    options: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

DropdownBox.defaultProps = {
    options: [],
    value: "",
    onChange: ()=>{}
}