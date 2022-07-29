import './components.css';
import profilePic from './img/cobra-kai.jpg';

function About () {
    return (
        <div className='about-section'>
            <div className='about-text-content'>
                <h1>Welcome!</h1>
                <h3>My name is Adam and I am a front end web developer.</h3>
            </div>
            <div>
                <img className='profile-pic' src={profilePic} alt='adam blevins selfie' />
            </div>
        </div>

    )
}

export default About;