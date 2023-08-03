import React from 'react';
import { useEffect } from 'react';
import SubCard from './SubCard';
import { getProjectsByLanguage } from './projectsData';
import { Project } from './types';
import './CardStyles.css';

interface ProjectCardsProps {
    language: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = (props) => {
    const [projects, setProjects] = React.useState(getProjectsByLanguage(props.language));

    useEffect(() => {
        const projectByLanguage = getProjectsByLanguage(props.language);
        setProjects(projectByLanguage);
    }, [props.language]);

    return (
        <div className='projectCards'>
            <h1 className='languageTitle'>{props.language}</h1>
            {projects.map((p: Project) => (
                <SubCard key={p.id} project={p} />
            ))}

        </div>
    );
};

export default ProjectCards;
