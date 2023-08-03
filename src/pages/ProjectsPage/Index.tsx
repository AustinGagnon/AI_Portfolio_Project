import React from 'react';
import LogoWheel from './LogoWheel/LogoWheel';
import ProjectCards from './ProjectCards/ProjectCards';
import './ProjectsStyles.css';


const ProjectsPage = () => {
    const [language, setLanguage] = React.useState('JavaScript');

    const handleDataRecieved = (data: string) => {
        setLanguage(data);
    };

    return (
        <div className='projectsPage'>
            <h3 className='helperTitle'>Choose a language.</h3>
            <LogoWheel parentPipe={handleDataRecieved}/>
            <ProjectCards language={language} />
        </div>
    );
};

export default ProjectsPage;
