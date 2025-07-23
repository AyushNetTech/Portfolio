import React from "react"
import "./Intro.css"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';


const Intro = ()=>{

    useGSAP(()=>{
        gsap.from(".text",{
            y:100,
            duration: 1,
            opacity:0,
            stagger:0.15,
        })
    })
    return (
        <div className="Intro">
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