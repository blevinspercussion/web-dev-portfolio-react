import './components.css';
import youtubeIcon from './img/yt-icon.svg';
import linkedInIcon from './img/li-icon.svg';
import instagramIcon from './img/ig-icon.svg';

function Links ({ linksRef }) {
    return (
        <div className='links-div' ref={linksRef}>
            <h1>Social Links</h1>
            <div className='links'>
                <a href='https://www.youtube.com/learningwithbande' target='_blank'><img className='social-icon' src={youtubeIcon} alt='youtube icon' /></a>
                <a href='https://www.linkedin.com/in/adam-blevins-95508163/' target='_blank'><img className='social-icon' src={linkedInIcon} alt='linkedin icon' /></a>
                <a href='https://www.instagram.com/blevinspercussion/' target='_blank'><img className='social-icon' src={instagramIcon} alt='instagram icon' /></a>
            </div>
        </div>
    )
}

export default Links;