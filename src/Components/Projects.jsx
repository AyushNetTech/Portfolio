import React, { useRef, useEffect, useState } from "react";
import "./Projects.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spacer from "./Spacer";

import XTrackImg from "../Images/XTrack.jpg"
import SMSHelperImg from "../Images/SMSHelperTH.jpg"

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


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log("Intersection ratio:", entry.intersectionRatio);
                if (entry.intersectionRatio >= 0.9) {
                    setScrollable(true);
                } else {
                    setScrollable(false);
                }
            },
            {
                threshold: [0.9]
            }
        );

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => {
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current);
            }
        };
    }, []);

    return (
        <div
            className="Projects"
            id="Projects"
            ref={projectsRef}
            style={{
                overflowY: scrollable ? "scroll" : "hidden", // ✅ scroll only vertical
                height: "100vh" // ✅ required for scroll to activate
            }}
        >
            <div className="Title">
                <span id="Pro">P</span>
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
                        <div className="ProjectLeft ProHover">
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
                        <div className="ProjectRight ProHover">
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
                    </div>
                </div>

                <div className="GridCont">
                    <div className="Grid">
                        <div className="ProjectLeft ProHover">
                            <div className="ImgCont">
                                <div className="ProImg"></div>
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
            </div>
        </div>
    );
};

export default Projects;
