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
                {/* <button className='contactBtn'>Contact Me</button> */}
                <div className='bodyText'>
                    <h3>Hi, I'm Austin.</h3>
                    <p>
                        I'm a computer science graduate with a passion for learning and making the world a better place through code.
                        I graduated from <a href="https://www.fiu.edu/">Florida International University</a> in
                        2023 with a Bachelor's degree in Computer Science. I'm interested in machine learning, back-end development,
                        and data science.
                    </p>
                    <p>
                        When I'm not coding, I'm usually spending time with my wife and kids. I also enjoy practicing guitar, binge watching Netflix, and playing Catan with our friends.
                    </p>
                    <p>I'm currenty open for a position as a software engineer or related role.</p>

                </div>
                

            </div>
        </div>
    );
};

export default BioPage;
