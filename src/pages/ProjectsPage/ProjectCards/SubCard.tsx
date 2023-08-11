import React from 'react';
import {Project} from './types';
import ImageCarousel from './ImageSlideShow/ImageCarousel';
import GitHubImg from '../../../assets/LanguageLogos/GitHub.png'
import Desert_White from '../../../assets/404/Desert_White.png'
import './CardStyles.css';





interface SubCardProps {
    project: Project;
}

const SubCard: React.FC<SubCardProps> = (props) => {
    const { project } = props;

    return (
        <div className='subCard'>
            {project.description ? null : <img width={150} src={Desert_White} />}
            {project.images && <ImageCarousel images={project.images} />}               
            {project.title && <h2 className='projectTitle'>{project.title}</h2>}
            {project.year && <h4 className='projectYear'>Project year: {project.year}</h4>}
            {project.description && project.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            {/* { project.githubURL && <a href={project.githubURL} target="_blank">Open in Github</a>} */}
            {project.githubURL && <a className="gitHubBG" href={project.githubURL} target="_blank"><img src={GitHubImg}></img></a>}
        </div>
    );
};

export default SubCard;
