import React from "react"
import "./Projects.css"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Projects =()=>{

    useGSAP(()=>{
        const mm = gsap.matchMedia();

        mm.add("(max-width: 768px)", () => {

            gsap.from(".Title",{
                y:200,
                delay:2,
                duration:1
            })

            gsap.from(".ProContainer",{
                y:400,
                delay:3,
                duration:1
            })
        });
    });

    return(
        <div className="Projects">
            <div className="Title">
                <h1>Projects</h1>
            </div>
            <div className="ProContainer">
                <div className="box box1 col-3 row-2">
                    <div className="XTrackTh">
                        {/* Xtrack Thumbnail background Image*/}
                    </div>
                </div>
                <div className="box box2"></div>
                <div className="box box3"></div>
                <div className="box box4"></div>
                <div className="box box5"></div>
                <div className="box box6 col-2 row-2">6</div>
                <div className="box box7"></div>
                <div className="box box8"></div>
                <div className="box box9"></div>
                <div className="box box10"></div>
                <div className="box box11 col-2 row-2"></div>
                <div className="box box12"></div>
                <div className="box box13"></div>
                <div className="box box14"></div>
                <div className="box box15"></div>
                <div className="box box16"></div>
                <div className="box box17 col-3 row-2"></div>
                <div className="box box18"></div>
                <div className="box box19"></div>
                <div className="box box20"></div>
                <div className="box box21"></div>
                <div className="box box22"></div>
                <div className="box box23"></div>
                <div className="box box24"></div>
            </div>
        </div>
    )
}

export default Projects;