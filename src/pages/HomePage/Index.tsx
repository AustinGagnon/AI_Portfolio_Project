import React, { useState, useEffect } from 'react';
import './Style.css';

const HomePage: React.FC = () => {
    const thingsToDisplay = [
        "Welcome!",
        "Thank you for visiting my site.",
        "Please feel free to have a look around!",
    ];
    const [show, setShow] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            setTimeout(() => {
                setIndex((index + 1) % thingsToDisplay.length);
                setShow(true);
            }, 1000);
        }, 3000);
        return () => clearTimeout(timer);
    }, [index]);

       

    return (
        <div className='homePage'>
            <div className={`welcomeTitle ${show ? 'show' : 'hidden'}`}>
                <h3 className='text'>{thingsToDisplay[index]} </h3>               
            </div>
            <button className='projectsButton'>Projects</button>
        </div>
    );
};

export default HomePage;
