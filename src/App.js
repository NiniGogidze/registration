import {Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./pages/style.css";
import { MyContext } from "./MyContext";
import React, { useState, useEffect } from 'react';

import Home from './pages/Home';
import About from './pages/About';


function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className='App'>
      <MyContext.Provider>
      <div className='topnav'>
        <h2>re:educate</h2>
        <Link to="/" className='link'>home</Link>
        <Link to="/about" className='link'>about</Link>
        <button onClick={toggleTheme}>DARK MODE</button>
      </div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      </MyContext.Provider>
      
    </div>
  );
}

export default App;
