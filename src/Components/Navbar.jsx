import React from "react"
import "./Navbar.css"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Navbar = ()=>{

    useGSAP(()=>{
        gsap.from(".Navbar",{
            y:-100,
            delay:1,
            opacity:0,
            duration:1,
        })
    })

    return(
        <div className="Navbar">
                <div className="l">HOME</div>
                <div className="l">PROJECTS</div>
                <div className="l">SKILLS</div>
                <div className="Contact l">CONTACT</div>
        </div>
    )

}

export default Navbar;