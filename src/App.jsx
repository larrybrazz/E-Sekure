import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Home from './Home/Home';
import Info from './Components/Header/Info';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';

function App() {
  const [count, setCount] = useState(0);
  const [navbarHidden, setNavbarHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) { // Adjust threshold as needed
        setNavbarHidden(true);
      } else {
        setNavbarHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Info />
      <Navbar hidden={navbarHidden} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
