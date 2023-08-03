import React from 'react';
import {Project} from './types';

interface SubCardProps {
    project: Project;
}

const SubCard: React.FC<SubCardProps> = (props) => {
    const { project } = props;

    return (
        <div className='subCard'>
            {project.title ? <h4>{project.title}</h4> : null}
            {project.images ?
                project.images.map((image) => (
                    <img className='projectImage' src={image} alt={project.title} />
                ))
                : null
            }
            {project.description ? <p>{project.description}</p> : null}
        </div>
    );
};

export default SubCard;
