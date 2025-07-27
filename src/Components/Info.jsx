import React from "react"
import "./Info.css"
import infoV from "./video.mp4"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Info=()=>{

    useGSAP(() => {

        const mm = gsap.matchMedia();

        mm.add("(max-width: 768px)", () => {
            // 📱 Mobile – No ScrollTrigger, run immediately
            gsap.from("#a", {
            x: -100,
            duration: 0.5,
            delay: 1,
            });
            gsap.from("#b", {
            y: 100,
            duration: 0.5,
            delay: 1.2,
            });
            gsap.from("#c", {
            x: 200,
            duration: 0.5,
            delay: 1.4,
            });
            gsap.to("#d", {
            scale: 1,
            duration: 0.5,
            delay: 1.6,
            });
            gsap.from("#e", {
            x: 500,
            duration: 0.5,
            delay: 1.8,
            });
            gsap.from(".VFrame", {
            x: -200,
            duration: 0.5,
            delay: 2,
            });
        });

        mm.add("(min-width: 769px)", () => {
            gsap.from("#a", {
                x: -400,
                duration: 0.5,
                scrollTrigger: {                // Note: When i use trigger ' intro ' its work well when i run it 
                    trigger: ".Info",           //       from vs code but after deploying its not worked well       
                    start: "top 60%",           //       but when i am make it ' info ' its worked well when 
                },                              //       i am deploying but not worked well when i run it from vs code
            });
            gsap.from("#b", {
                y: 300,
                delay:0.5,
                duration: 0.5,
                scrollTrigger: {
                    trigger: ".Info",
                    start: "top 60%",
                },
            });
            gsap.from("#c", {
                x: 500,
                duration: 0.5,
                scrollTrigger: {
                    trigger: ".Info",
                    start: "top 30%",
                },
            });
            gsap.to("#d", {
                scale: 1,
                delay:0.3,
                duration: 0.5,
                scrollTrigger: {
                    trigger: ".Info",
                    start: "top 30%",
                },
            });
            gsap.from("#e", {
                x:1000,
                delay:0.6,
                duration: 0.5,
                scrollTrigger: {
                    trigger: ".Info",
                    start: "top 30%",
                },
            });
            gsap.from(".VFrame", {
                x:-600,
                delay:0.9,
                duration: 0.5,
                scrollTrigger: {
                    trigger: ".Info",
                    start: "top 30%",
                },
            });
        });
    });

    return(
        <div className="Info">
            <div className="Upper">
                <div className="divA">
                    <h1 id="a">
                    I <span style={{ color: "rgb(236, 48, 48)", fontFamily: 'Anton SC, sans-serif' }}>'</span>
                    Am
                    </h1>
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