import Navbar from "./navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import { Route,Routes } from "react-router-dom"
import "./App.css"
import React from 'react'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'

function App() {

  return (
    
   <>
   
    <Navbar />
    
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" elements={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      
      <ul className="list">
        <li>
      <SocialIcon a href="https://bit.ly/40W19wv" url="www.facebook.com" bgColor="none" fgColor="white" target="blank" className="icons"/>
      
      </li>
      <li>
      <SocialIcon href="https://bit.ly/3N1tDiW" url="www.instagram.com" bgColor="none" fgColor="white" target="blank"/></li>
      <li>
      <SocialIcon href="https://bit.ly/47sfvHG" url="www.linkedin.com" bgColor="none" fgColor="white" target="blank"/></li>
      <li>
      <SocialIcon href="https://bit.ly/3G4Wqzh" url="www.github.com" bgColor="none" fgColor="white" target="blank"/></li>
      
      </ul>
      
      
      
      
    </div>
    
     </>
     
    
  )
}

export default App;
