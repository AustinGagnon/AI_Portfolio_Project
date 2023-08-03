import React from 'react';
import jsImage from '../../../assets/LanguageLogos/JavaScript.png';
import javaImage from '../../../assets/LanguageLogos/Java.png';
import pyImage from '../../../assets/LanguageLogos/Python.png';
import csharpImage from '../../../assets/LanguageLogos/CSharp.png';
import nodeImage from '../../../assets/LanguageLogos/NodeJS.png';
import fbaseImage from '../../../assets/LanguageLogos/Firebase.png';
import dotNetImage from '../../../assets/LanguageLogos/DotNet.png';
import './LogoStyles.css'


interface logoWheelProps {
    parentPipe: (data: string) => void;
}

const LogoWheel: React.FC<logoWheelProps> = (props) => {

    const handleButtonClick = (event: React.MouseEvent<HTMLImageElement>) => {
        const dataToSend = event.currentTarget.alt;
        console.log(typeof dataToSend);
        props.parentPipe(dataToSend);

    };

    return (
        <div className='logoWheel'>
            <img className='logoBtn' onClick={handleButtonClick} src={jsImage} alt="JavaScript"/>
            <img className='logoBtn' onClick={handleButtonClick} src={javaImage} alt="Java" />
            <img className='logoBtn' onClick={handleButtonClick} src={pyImage} alt="Python" />
            <img className='logoBtn' onClick={handleButtonClick} src={csharpImage} alt="C#" />
            <img className='logoBtn' onClick={handleButtonClick} src={nodeImage} alt="Node.JS" />
            <img className='logoBtn' onClick={handleButtonClick} src={fbaseImage} alt="Firebase" />
            {/* <img className='logoBtn' onClick={handleButtonClick} src={dotNetImage} alt=".NET Framework" /> */}
        </div>
    );
};

export default LogoWheel;
