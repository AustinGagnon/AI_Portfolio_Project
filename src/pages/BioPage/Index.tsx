// import React from 'react';
import './Style.css';
import profilePic from '../../assets/img1.jpg';

const BioPage = () => {

    return (
        <div className='bioPage'>
            <div className='content'>
                <div className='imageContainer'>
                    <img src={profilePic} alt="" />
                </div>
                <button className='contactBtn'>Contact Me</button>
                <div className='bodyText'>
                    <h3>Hi, I'm Austin.</h3>
                    <p>
                        I'm a computer science graduate with a passion for learning and creating.
                        I graduated from <a href="https://www.fiu.edu/">Florida International University</a> in
                        2021 with a BA in Computer Science. I'm interested in web development, machine learning,
                        and data science.
                    </p>
                    <p>
                        When I'm not coding, I'm usually spending time with my two kids and wife. I also enjoy playing and writing music and playing board games with friends.
                    </p>
                    <p>I'm currenty open for a position as a software engineer</p>

                </div>
                

            </div>
        </div>
    );
};

export default BioPage;
