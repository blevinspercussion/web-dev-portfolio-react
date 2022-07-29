import './components.css';
import logo from './img/adambcodeslogo.png';

function Header () {
    return (
        <div>
            <nav class="nav">
            <img class="logo" src={logo} />
                <ul className='nav-menu'>
                    <li class="link section-link active-link" id="about-link" href='#about-section'><a>about</a></li>
                    <li class="link section-link" id="projects-link" href='.projects'><a>projects</a></li>
                    <li class="link section-link" id="links-link"><a>links</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;