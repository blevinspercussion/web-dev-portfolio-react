import './App.css';
import Header from './components/Header';
import About from './components/About';
import FrontEndProjects from './components/FrontEndProjects';
import FrontEndMockups from './components/FrontEndMockups';

function App() {

  // Props 

  const frontEndProjects = [
    {
      'title': 'memory card game',
      'image': './img/memory-card.png',
      'id': 'project-card-memory-game',
      'codeUrl': 'https://github.com/blevinspercussion/memory-card',
      'demoUrl': 'https://blevinspercussion.github.io/memory-card/',
      'about': '',
  },
  {
      'title': 'storefront and shopping cart',
      'image': './img/snare-drum-store.png',
      'id': 'project-card-shopping-cart',
      'codeUrl': 'https://github.com/blevinspercussion/shopping-cart',
      'demoUrl': 'https://blevinspercussion.github.io/shopping-cart/',
      'about': '',
  },
  {
      'title': 'personal website',
      'image': './img/Screenshot from 2022-07-17 15-44-53.png',
      'id': 'project-card-personal-website',
      'codeUrl': null,
      'demoUrl': 'https://blevinspercussion.com/',
      'about': '',
  },
  ]

  const frontEndMockups = [
    {
      'title': 'intro section with dropdown menus',
      'image': './img/home-page-with-dropdowns.png',
      'id': 'intro-section-with-dropdowns',
      'codeUrl': 'https://github.com/blevinspercussion/frontendmentor-intro-section-with-dropdown-menus',
      'demoUrl': 'https://blevinspercussion.github.io/frontendmentor-intro-section-with-dropdown-menus/',
      'about': '',
  },
  {
      'title': 'time tracking dashboard',
      'image': './img/time-tracking-dashboard.png',
      'id': 'time-tracking-dashboard',
      'codeUrl': 'https://github.com/blevinspercussion/fem-time-tracking-dashboard-js',
      'demoUrl': 'https://blevinspercussion.github.io/fem-time-tracking-dashboard-js/',
      'about': '',
  },
  {
      'title': 'e-commerce main page',
      'image': './img/e-commerce-main-page.png',
      'id': 'ecommerce-main-page',
      'codeUrl': 'https://github.com/blevinspercussion/fem-ecommerce-main-page',
      'demoUrl': 'https://blevinspercussion.github.io/fem-ecommerce-main-page/',
      'about': '',
  },
  ]


  return (
    <div className="App">
      <Header />
      <hr />
      <About />
      <hr />
      <FrontEndProjects />
      <hr />
      <FrontEndMockups />
    </div>
  );
}

export default App;
