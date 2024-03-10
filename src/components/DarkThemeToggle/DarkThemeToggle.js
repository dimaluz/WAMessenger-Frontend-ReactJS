import React from 'react';
import './DarkThemeToggle.css';

const DarkThemeToggle = () => {
    return (
        <div className="toggle-wrapper">
            <label className="toggle-switch">
                <input type="checkbox" />
                <span className="toggle-slider"></span>
            </label>
        </div>
    )
}
export default DarkThemeToggle;