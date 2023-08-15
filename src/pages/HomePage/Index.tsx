import React, { useState, useEffect } from 'react';
import './Style.css';

const HomePage: React.FC = () => {
    const thingsToDisplay = [
        "Welcome!",
        "Thank you for visiting my site.",
        "Please feel free to have a look around.",
        "Updates are coming frequently, so check back soon!"
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


    const handleClick = (i: number) => {
        setIndex(i);
        setShow(true);
    }   

    return (
        <div className='homePage'>
            <div className='contentContainer'>

                <div className={`welcomeTitle ${show ? 'show' : 'hidden'}`}>
                    <h3 className='text'>{thingsToDisplay[index]} </h3>
                </div>

                <div className='stageVisual'>
                    {thingsToDisplay.map((text, idx) => (
                        <div 
                            key={text} 
                            onClick={() => handleClick(idx)} 
                            className={`circle ${index === idx ? 'white' : ''}`}
                        ></div>
                    ))}
                </div>

                <a href="/projects"><button className='projectsButton'>Projects</button></a>
            </div>
        </div>
    );
};

export default HomePage;
