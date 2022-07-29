import './components.css';
import AboutProject from './AboutProject';

import { useState } from 'react';

function ProjectCard ({ item, title, image, codeUrl, demoUrl, about, aboutProject, setAboutProject}) {
    
    const handleAboutClick = () => {
        setAboutProject(null);
        setAboutProject(about);
    }

    return (
        <div>
            <h2>{title}</h2>
            <img className='project-image' src={require("./img/" + image)}></img>
            <div className='project-card-links'>
                <a href={codeUrl} target='_blank'>code</a>
                <a href={demoUrl} target='_blank'>live demo</a>
                <a onClick={handleAboutClick}>about</a>
            </div>
            {aboutProject === about && 
                <AboutProject about={about} />
                }
        </div>
    )
}


export default ProjectCard;