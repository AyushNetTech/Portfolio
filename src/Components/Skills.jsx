import React from 'react'
import "./Skills.css";

import img1 from "../Images/C.svg";
import img2 from "../Images/C++.svg";
import img3 from "../Images/Java.svg";
import img4 from "../Images/kotlin-1.svg";
import img5 from "../Images/Android.svg";
import img6 from "../Images/HTML.svg";
import img7 from "../Images/CSS.svg";
import img8 from "../Images/JavaScript.svg";
import img9 from "../Images/React.svg";
import img10 from "../Images/NodeJS2.svg";
import img11 from "../Images/MySQL.svg";
import img12 from "../Images/GitHub.svg";
import img13 from "../Images/GSAP_SVG.svg"
import img14 from "../Images/SQLlight.svg"

const Skills = () => {
  return (
    <div className='SkillCont'>
      <div className="Skills">
          <div className="SkillTitle">
              <div className="Title1">
                <span id="T1" style={{color:"rgb(236, 48, 48)", textDecoration:"underline"}}>T</span>
                <span id="T1">E</span>
                <span id="T1">C</span>
                <span id="T1">H</span>
                <span id="T1">N</span>
                <span id="T1">I</span>
                <span id="T1">C</span>
                <span id="T1">A</span>
                <span id="T1">L</span>
              </div>
              <div className="Title2">
                <span id="T2" style={{color:"rgb(236, 48, 48)", textDecoration:"underline"}}>S</span>
                <span id="T2">K</span>
                <span id="T2">I</span>
                <span id="T2">L</span>
                <span id="T2">L</span>
                <span id="T2">S</span>
              </div>
          </div>
          <div className='SkillData'>
            <h1 className='LanguageTitle T'>- Programming Languages</h1>
            <div className='LanguagesCont'>
              {/* <div className="ProLImg" style={{backgroundImage:`url(${img1})`}}></div> */}
              <img className="ProLImg" src={img1} alt="" />
              <img className="ProLImg" src={img2} alt="" />
              <img className="ProLImg" src={img3} alt="" />
              <img className="ProLImg" src={img4} alt="" />
              <img className="ProLImg" src={img8} alt="" />
            </div>
            <h1 className='FEndTitle T'>- Frontend Development</h1>
            <div className='LanguagesCont'>
              {/* <div className="ProLImg" style={{backgroundImage:`url(${img1})`}}></div> */}
              <img className="ProLImg" src={img6} alt="" />
              <img className="ProLImg" src={img7} alt="" />
              <img className="ProLImg" src={img9} alt="" />
              <img className="ProLImg" src={img13} alt="" />
            </div>
            <h1 className='DataBaseTitle T'>- Databases</h1>
            <div className='LanguagesCont'>
              {/* <div className="ProLImg" style={{backgroundImage:`url(${img1})`}}></div> */}
              <img className="ProLImg" src={img11} alt="" />
              <img className="ProLImg" src={img14} alt="" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Skills