import './components.css';
import profilePic from './img/cobra-kai.jpg';

function About ({ aboutRef }) {
    return (
        <div id='about-section' className='about-section' ref={aboutRef}>
            <div className='about-text-content'>
                <h1>Welcome!</h1>
                <h3>My name is Adam and I am a front end web developer.</h3>
                <p>
                    I am currently seeking employment as junior/entry level web developer. I have been self-learning 
                    programming for several years now, and I have more recently began focusing on front-end web development. 
                    For the last 11 years I have worked as a professional musician and music teacher, and that career has 
                    given me invaluable soft skills that I plan on using in a new career in the tech field. I am a self-starter, 
                    I am highly drive to succeed, and I am ready and eager to learn.
                </p>
                <p>
                    As far as my tech skills, I currently have the following experience: Python (5+ years), HTML (5+ years), 
                    CSS (3+ years), Javascript (3+ years), React (1 year), Django (2 years), Go (1 year).
                </p>
                <p>
                    While you're here, be sure to check out my projects below. Thank you!
                </p>
            </div>
            <div>
                <img className='profile-pic' src={profilePic} alt='adam blevins selfie' />
            </div>
        </div>

    )
}

export default About;