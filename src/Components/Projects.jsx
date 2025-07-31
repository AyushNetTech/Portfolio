import React, { useRef, useEffect, useState } from "react";
import "./Projects.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spacer from "./Spacer";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projectsRef = useRef(null);
    const [scrollable, setScrollable] = useState(false);

    useGSAP(() => {
    const ctx = gsap.context(() => {
        gsap.from("#Pro", {
            y: 200,
            duration: 0.5,
            stagger:0.1,
            scrollTrigger: {
                trigger: ".Projects",
                start: "top 50%",
                markers: true,
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
                <div className="GridCont1">
                    <div className="Grid">
                        <div className="Project1">
                            <div className="ImgCont">
                                <div className="ProImg"></div>
                            </div>
                            {/* <h1>XTrack - Workout Tracker Application</h1> */}
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="Project2">
                            <div className="ImgCont">
                                <div className="ProImg"></div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>

                <div className="GridCont2">
                    <div className="Grid">
                        <div className="Project3"></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="Project4"></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
