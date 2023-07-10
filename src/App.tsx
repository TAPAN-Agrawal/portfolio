import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Aboutus from './components/About/Aboutus';
import { useRef } from 'react';
import {Routes,Route} from  'react-router-dom'
import Contact from './components/Contact/Contact';

function App() {
  const ref :any = useRef(null)
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div style={{ background: "linear-gradient(to bottom, #1c0a69, #000000)" }}>
      <Navbar 
      onHandle={handleClick}
      />
      <Home />
    <div ref={ref}>
    <Aboutus/>

    </div>




    <Routes>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

      </div>
  );
}

export default App;
