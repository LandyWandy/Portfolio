import React, { useState, useEffect, useCallback} from 'react';
import NavMenu from './components/navMenu/navMenu.jsx';
import Rain from './components/rain/rain.jsx'
import Header from './components/header/header.jsx'
import Nav from './components/nav/nav.jsx'
import About from './components/about/about.jsx'


function App() {
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuState(state => state ? (state === 'deactive' ? 'active' : 'deactive') : 'active');
  }, []);

  console.log(menuState)

  useEffect(() => {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome');

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility = header.style.visibility === 'hidden' && 'visible';
      else header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
      else navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          });
        }
      }
    })();
  }, []);

  return (
    <React.Fragment>
      <NavMenu toggleMenu={toggleMenu} showMenu={menuState}/>
      <Nav toggleMenu={toggleMenu} showMenu={menuState} />
      <Rain />
      <Header />
      <About />
    </React.Fragment>
  );
}

export default App;
