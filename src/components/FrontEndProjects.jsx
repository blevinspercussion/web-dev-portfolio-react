import './components.css';
import ProjectCard from './ProjectCard';

import { useState } from 'react';

function FrontEndProjects ({ frontEndProjects }) {

    const [aboutProject, setAboutProject] = useState(null);

    return (
        <div className='projects'>
            <h2>Front End Projects</h2>
            <h4>All projects in this section were created entirely by me, from conception to completion.</h4>
            <div className='project-cards'>
                {frontEndProjects.map((item, index) => (
                    <ProjectCard 
                        key={item.id}
                        item={item}
                        title={item.title}
                        image={item.image}
                        codeUrl = {item.codeUrl}
                        demoUrl = {item.demoUrl}
                        about = {item.about}   
                        aboutProject={aboutProject}
                        setAboutProject={setAboutProject}
                    />
                ))}
            </div>
            {aboutProject && 
                <div className='about-project'>
                    <p>{aboutProject}</p>
                </div>
            }
        </div>
    )
}

export default FrontEndProjects;