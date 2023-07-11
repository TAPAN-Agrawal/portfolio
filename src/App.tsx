import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Aboutus from './components/About/Aboutus';
import { useRef } from 'react';
import {Routes,Route} from  'react-router-dom'
import Contact from './components/Contact/Contact';
import Skill from './components/skill/Skill';
import Project from './components/Project/Project';
import Testmonial from './components/Testmonial/Testmonial';

function App() {

  return (
    <div style={{ background: "linear-gradient(to bottom, #1c0a69, #000000)" }}>
      <Navbar  />
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/about' element={ <Aboutus/>}  />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/skill' element={<Skill/>}/>
      <Route path='/project' element={<Project/>} />
      <Route path='/testmonial' element={<Testmonial/>}/>
    </Routes>

      </div>
  );
}

export default App;
