// import React from 'react';
import { useState, useEffect } from 'react';

const ToggleDarkMode = () => {
    const [darkMode, setDarkMode] = useState(true);

    const handleEventClick = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        const style = document.body.style;
        if (darkMode) {
            style.setProperty('--bg-color', 'var(--bg-color-dark)');
            style.setProperty('--text-color', 'var(--text-color-dark)');
            style.setProperty('--div-color', 'var(--div-color-dark)');
            style.setProperty('--div-text-color', 'var(--div-text-color-dark)');
            style.setProperty('--shadow-color', 'var(--shadow-color-dark)');

        } else {
            style.setProperty('--bg-color', 'var(--bg-color-light)');
            style.setProperty('--text-color', 'var(--text-color-light)');
            style.setProperty('--div-color', 'var(--div-color-light)');
            style.setProperty('--div-text-color', 'var(--div-text-color-light)');
            style.setProperty('--shadow-color', 'var(--shadow-color-light)');

        }
    }, [darkMode])

    return (
        <button className='toggleDarkMode' onClick={handleEventClick}>
            
        </button>
    );
};

export default ToggleDarkMode;
