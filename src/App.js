import React, { useState, useCallback} from 'react';
import Rain from './components/rain/rain.js'
import Header from './components/header/header.js'
import Nav from './components/nav/nav.js'

function App() {
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuState(state => state ? (state === 'deactive' ? 'active' : 'deactive') : 'active');
  }, []);
  return (
    <React.Fragment>
      <Nav toggleMenu={toggleMenu} showMenu={menuState} />
      <Rain />
      <Header />
    </React.Fragment>
  );
}

export default App;
