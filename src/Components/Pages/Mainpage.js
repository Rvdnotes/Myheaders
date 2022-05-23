import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
const Mainpage = () => {
  return (
    <div>
          
      <Router>
          <Routes>
              <Route path="/Home" element={<Home/>}/>    
              <Route path="/About" element={<About/>}/>       
              <Route path="/Contact" element={<Contact/>}/>       

          </Routes>      
      </Router>
    </div>
  )
}

export default Mainpage