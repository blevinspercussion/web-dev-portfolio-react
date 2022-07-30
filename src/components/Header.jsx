import './components.css';
import logo from './img/adambcodeslogo.png';

function Header ({ aboutRef, projectsRef }) {



    return (
        <div>
            <nav class="nav">
            <img class="logo" src={logo} />
                <ul className='nav-menu'>
                    <i class="fa-solid fa-bars mobile"></i>
                    <li class="link section-link active-link" id="about-link" href='#about-section'><a onClick={() => aboutRef.current.scrollIntoView()}>about</a></li>
                    <li class="link section-link" id="projects-link" href='.projects'><a onClick={() => projectsRef.current.scrollIntoView()}>projects</a></li>
                    <li class="link section-link" id="links-link"><a>links</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;