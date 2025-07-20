import React from "react"
import "./Intro.css"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import Navbar from "./Navbar";
import Projects from "./Projects";


const Intro = ()=>{

    useGSAP(()=>{
        gsap.from(".text",{
            y:300,
            duration:1,
            stagger:0.07,
        })
    })
    return (
        <div className="Intro">
            {/* <Navbar/> */}
            <div className="Hello">
                <span className="text">H</span>
                <span className="text">E</span>
                <span className="text">L</span>
                <span className="text">L</span>
                <span className="text">O</span>
            </div>
        </div>
    )
}

export default Intro;