import React from 'react'
import "./PortfolioCont.css"
import Intro from './Intro'
import Info from './Info'
import Projects from './Projects'
import Navbar from './Navbar'

const PortfolioCont = () => {
  return (
    <div className="PortfolioCont">
        <Navbar />
        <Intro />
        <Info/>
        <Projects />
    </div>
  )
}

export default PortfolioCont