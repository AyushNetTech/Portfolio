import React from "react"
import "./Info.css"
import infoV from "./video.mp4"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // ✅ Add this at the top

const Info=()=>{

    useGSAP(() => {
        gsap.from("#a", {
            x: -300,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".Intro",
                start: "top 60%",
            },
        });
        gsap.from("#b", {
            y: 200,
            delay:0.7,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".Intro",
                start: "top 60%",
            },
        });
         gsap.from("#c", {
            x: 500,
            delay:0.7,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".Intro",
                start: "top 30%",
            },
        });
        gsap.to("#d", {
            scale: 1,
            delay:0.7,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".Intro",
                start: "top 30%",
            },
        });
        gsap.from("#e", {
            y:200,
            delay:0.7,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".Intro",
                start: "top 30%",
            },
        });
        gsap.from(".VFrame", {
            x:-600,
            delay:1,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".Intro",
                start: "top 30%",
            },
        });
    });

    return(
        <div className="Info">
            <div className="Upper">
                <div className="divA">
                    <h1 id="a">I Am</h1>
                </div>
                <div className="divB">
                    <h1 id="b">Ayush Upase</h1>
                </div>
            </div>
            <div className="Below">
                <div className="Text">
                    <div className="TextA">
                        <div className="Text1">
                            <h1 id="c">Full Stack Developer</h1>
                        </div>
                        <div className="Text2">
                            <h1 id="d">AND</h1>
                        </div>
                    </div>
                    <div className="TextB">
                        <h1 id="e">Android Developer</h1>
                    </div>
                </div>
                <div className="Video">
                    <div className="VFrame">
                        <video  autoPlay loop muted>
                            <source src={infoV} type="video/mp4" />
                                    Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info