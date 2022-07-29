import './components.css';
import MockupCard from './MockupCard';
import AboutProject from './AboutProject';

import { useState } from 'react';

function FrontEndMockups ({ frontEndMockups }) {

    const [aboutMockup, setAboutMockup] = useState(null);

    return (
        <div className='projects'>
            <h2>Front End Mockups</h2>
            <h4>
                The mockups in this section were created from reference images that were provided by frontendmentor.com.
            </h4>
            <h4>
                All assets and images were provided by frontendmentor.com, but all code and implementation is my own.
            </h4>
            <div className='project-cards'>
                {frontEndMockups.map((item, index) => (
                    <MockupCard 
                        key={item.id}
                        item={item}
                        title={item.title}
                        image={item.image}
                        codeUrl = {item.codeUrl}
                        demoUrl = {item.demoUrl}
                        about = {item.about}
                        aboutMockup={aboutMockup}
                        setAboutMockup={setAboutMockup}              
                    />
                ))}
            </div>
            {aboutMockup && 
                <div className='about-project'>
                    <p>{aboutMockup}</p>
                </div>
            }
        </div>
    )
}

export default FrontEndMockups;