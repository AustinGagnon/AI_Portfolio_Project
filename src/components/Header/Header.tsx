import React from 'react';
// import LogInBtn from './LogInBtn';
import './Header.css';
// import LogInBtn from './LogInBtn';



const Header = () => {
    return (
        <header>
            <h1 className='title'>Austin.io</h1>
            <nav>
                <ul className='nav_links'>
                    <li><a href="/"></a>Game</li>
                    <li><a href="/Courses">Projects</a></li>
                    <li><a href="/About">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
