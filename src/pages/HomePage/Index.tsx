import React, { useState, useEffect } from 'react';
import './Style.css'

const HomePage: React.FC = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 200);
    }, []);

    return (
        <div className={`homePage ${animate ? 'animate' : ''}`}>
            <div className='contentContainer'>
                <h1>Thank you for visiting my site.</h1>
                <h1>It's currently under construction.</h1>
                <a href="/Projects"><h1>Click to see my projects.</h1></a>
            </div>
        </div>
    );
}

export default HomePage;

