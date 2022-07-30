import './components.css';
import logo from './img/adambcodeslogo.png';

function Header ({ aboutRef, projectsRef, linksRef }) {



    return (
        <div>
            <nav className="nav">
            <img className="logo" src={logo} />
                <ul className='nav-menu'>
                    <i className="fa-solid fa-bars mobile"></i>
                    <li className="link section-link active-link" id="about-link" href='#about-section'><a onClick={() => aboutRef.current.scrollIntoView()}>about</a></li>
                    <li className="link section-link" id="projects-link" href='.projects'><a onClick={() => projectsRef.current.scrollIntoView()}>projects</a></li>
                    <li className="link section-link" id="links-link"><a onClick={() => linksRef.current.scrollIntoView()}>links</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;