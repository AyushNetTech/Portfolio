import React, { useRef } from 'react'
import "./PortfolioCont.css"
import Intro from './Intro'
import Info from './Info'
import Projects from './Projects'
import Navbar from './Navbar'
import Skills from './Skills'

const PortfolioCont = () => {

  const projectsRef = useRef(null);
  const homeRef = useRef(null);
  const skillsRef = useRef(null);

  const handleNavClick = (section) => {
    if (section === "projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (section === "home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="PortfolioCont">
        <Navbar onNavigate={handleNavClick}/>
          <div ref={homeRef}>
            <Intro />
          </div>
          <Info/>
          <div ref={projectsRef}>
            <Projects />
          </div> 
          <Skills/>
    </div>
  )
}

export default PortfolioCont