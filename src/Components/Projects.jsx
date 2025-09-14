import React, { useRef, useEffect, useState } from "react";
import "./Projects.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spacer from "./Spacer";

import XTrackImg from "../Images/XTrack.jpg"
import SMSHelperImg from "../Images/SMSHelperTH.jpg"
import MoviesHubImg from "../Images/MoviesHubTH.png"

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projectsRef = useRef(null);
    const [scrollable, setScrollable] = useState(false);

    useGSAP(() => {
    const ctx = gsap.context(() => {
        gsap.from("#Pro", {
            y: 200,
            duration: 0.5,
            opacity:0,
            stagger:0.1,
            scrollTrigger: {
                trigger: ".Projects",
                start: "top 20%",
                // markers: true,
                toggleActions: "restart pause resume reverse",
            },
        });
    });

    return () => ctx.revert(); // Clean up on unmount
}, []);

    return (
        <div
            className="Projects"
            id="Projects">
            <div className="Title">
                <span id="Pro" style={{color:"rgb(236, 48, 48)", textDecoration:"underline"}}>P</span>
                <span id="Pro">R</span>
                <span id="Pro">O</span>
                <span id="Pro">J</span>
                <span id="Pro">E</span>
                <span id="Pro">C</span>
                <span id="Pro">T</span>
                <span id="Pro">S</span>
            </div>

            <div className="ProjectContainer">
                <div className="GridCont">
                    <div className="Grid">
                        <div className="ProjectLeft ProHover" onClick={()=>{
                            window.open("https://github.com/AyushUpase369/XTrack", "_blank")
                        }}>
                            <div className="ImgCont">
                                <div className="ProImg" style={{backgroundImage: `url(${XTrackImg})`}}></div>
                            </div>
                            <div class="card__info">
                                <span class="card__category">Android App</span>
                                <h3 class="card__title">XTrack - Workout Tracking Application</h3>
                                <span class="card__by">Tools & Technologies : <a href="#" class="card__author" title="author">Android Studio, Kotlin, XML, MP-AndroidChart Library</a></span>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="GridCont">
                    <div className="Grid">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="ProjectRight ProHover" onClick={()=>{
                            window.open("https://github.com/AyushUpase369/MoviesHub", "_blank")
                        }}>
                            <div className="ImgCont">
                                <div className="ProImg" style={{backgroundImage: `url(${MoviesHubImg})`}}></div>
                            </div>
                            <div class="card__info">
                                <span class="card__category">Website</span>
                                <h3 class="card__title">MoviesHub - Get More About Movies</h3>
                                <span class="card__by">Tools & Technologies : <a href="#" class="card__author" title="author">JavaScript, HTML/CSS, ReactJS, Redux, Vite</a></span>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="GridCont">
                    <div className="Grid">
                        <div className="ProjectLeft ProHover" onClick={()=>{
                            window.open("https://github.com/AyushUpase369/SMS-Helper", "_blank")
                        }}>
                            <div className="ImgCont">
                                <div className="ProImg" style={{backgroundImage: `url(${SMSHelperImg})`}}></div>
                            </div>
                            <div class="card__info">
                                <span class="card__category">Android App</span>
                                <h3 class="card__title">SMS Helper - For Offline Use</h3>
                                <span class="card__by">Tools & Technologies : <a href="#" class="card__author" title="author">Android Studio, Java, XML</a></span>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
