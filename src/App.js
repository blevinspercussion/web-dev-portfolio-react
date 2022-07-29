import './App.css';
import Header from './components/Header';
import About from './components/About';
import FrontEndProjects from './components/FrontEndProjects';
import FrontEndMockups from './components/FrontEndMockups';
import Footer from './components/Footer';

function App() {

  // Props 

  const frontEndProjects = [
    {
      'title': 'memory card game',
      'image': 'memory-card.png',
      'id': 'project-card-memory-game',
      'codeUrl': 'https://github.com/blevinspercussion/memory-card',
      'demoUrl': 'https://blevinspercussion.github.io/memory-card/',
      'about': `The Memory Card Game was created using HTML, CSS, and React as part of The Odin Project. It was also my first project that used 
                the useEffect and useState hooks. Developing the layout and file structure for the project was relatively simple and straightforward, 
                however I ran into a bit of a snag when it came to randomizing the order of the cards after clicking one. I ended up using a simple 
                a/b sorting algorithm to generate a pseudo-random order of the array that stores the cards. I put that algorithm into a function that 
                I placed inside of the useEffect hook so that the function ran every time the page is rerendered`,
  },
  {
      'title': 'storefront and shopping cart',
      'image': 'snare-drum-store.png',
      'id': 'project-card-shopping-cart',
      'codeUrl': 'https://github.com/blevinspercussion/shopping-cart',
      'demoUrl': 'https://blevinspercussion.github.io/shopping-cart/',
      'about': `The Storefront and Shopping Cart was one of my more challenging React assignments from The Odin Project. This project makes heavy use 
                the useEffect and useState hooks as well as React Router. The conception and layout was simple to figure out, but the programming logic 
                took me some time to get right. The first hurdle was how to handle the inventory, which I ended up creating as an array of objects. The 
                biggest challenge was handling the shopping cart; specifically handling how to display the items. My first solution resulted in displaying 
                each item once for every single instance in the cart. My second solution was to create a function that create a new array of 'unique items', 
                but that one cause the items to reorder themselves when removing them from the cart (I left that commented code in as a future reminder of 
                how NOT to solve that problem). My eventual solution was .map through the items in the inventory, rather than the user's cart, and return 
                only the items that had more than 0 in the cart. If I were to scale up the application, I would rework the way the cart is tracked, keeping 
                track of each product type in the cart only once, adding a 'total in cart' attribute to the cart.`,
  },
  {
      'title': 'personal website',
      'image': 'Screenshot from 2022-07-17 15-44-53.png',
      'id': 'project-card-personal-website',
      'codeUrl': null,
      'demoUrl': 'https://blevinspercussion.com/',
      'about': `This is my professional website for my career as a professional musician. I strive for simple, clean designs with well-presented and easy-to-
                find information. This website serves to drive leads for performing gigs as well as students and other teaching opportunities.`,
  },
  ]

  const frontEndMockups = [
    {
      'title': 'intro section with dropdown menus',
      'image': 'home-page-with-dropdowns.png',
      'id': 'intro-section-with-dropdowns',
      'codeUrl': 'https://github.com/blevinspercussion/frontendmentor-intro-section-with-dropdown-menus',
      'demoUrl': 'https://blevinspercussion.github.io/frontendmentor-intro-section-with-dropdown-menus/',
      'about': `The 'Intro Section With Dropdown Menus' was the first challenge that I completed from frontendmentor.com. I began the project in 
                React, but I felt that I was getting rusty with my Javascript fundamentals, so I decided to scrap in and start over using only 
                only HTML, CSS, and vanilla JS. This was the first project that I made fully mobile responsive, and that was my biggest challenge 
                by far. Layout was pretty simple, as it usually is for me, but the drop down menus gave me a little trouble. I implemented them 
                with 'mouseenter' event listeners and additional event listeners that close the current open menu if another menu is opened, as 
                well as 'mouseleave' event listeners. I originally only used 'mouseleave' event listeners, but it wasn't immediately obvious how 
                to get the menus to close sometimes, which I felt negatively impacted the UX.`,
  },
  {
      'title': 'time tracking dashboard',
      'image': 'time-tracking-dashboard.png',
      'id': 'time-tracking-dashboard',
      'codeUrl': 'https://github.com/blevinspercussion/fem-time-tracking-dashboard-js',
      'demoUrl': 'https://blevinspercussion.github.io/fem-time-tracking-dashboard-js/',
      'about': `The 'Time Tracking Dashboard', like 'Intro Section With Dropdown Menus' was completed entirely with HTML, CSS, and vanilla JS. 
                This was came with an optional JSON file, which I opted to use instead of hardcoding the data. All data in the app is populated 
                dynamically from the JSON data using an async/await function. The biggest challenge with this one was coming up with a consistent 
                layout that allowed for the varying numbers in the JSON data. Mobile responsiveness also gave me some trouble which I was able to 
                overcome through liberal use of media queries.`,
  },
  {
      'title': 'e-commerce main page',
      'image': 'e-commerce-main-page.png',
      'id': 'ecommerce-main-page',
      'codeUrl': 'https://github.com/blevinspercussion/fem-ecommerce-main-page',
      'demoUrl': 'https://blevinspercussion.github.io/fem-ecommerce-main-page/',
      'about': `The 'E-Commerce Main Page' is the most involved project that I have completed through frontendmentor.com and I chose that one specifically  
                to challenge myself. I also resolved not to use any CSS libraries such as Tailwind or Bootstrap. This project includes a dynamically updating 
                shopping cart (with a 'hover cart'), a mini gallery, and (the feature that I am most proud of) a lightbox gallery that created myself. The lightbox 
                was the most challenging aspect of this project, as there are many elements that need to come together just right: the background overlay, the gallery, 
                the controls, etc. I was able to repurpose the React component that I used for the images on the main page with some tweaks to get the lightbox component 
                functioning correctly.`,
  },
  ]


  return (
    <div className="App">
      <div className='overlay'>
      </div>
      <Header />
      <hr />
      <About />
      <hr />
      <FrontEndProjects frontEndProjects={frontEndProjects} />
      <hr />
      <FrontEndMockups frontEndMockups={frontEndMockups} />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
