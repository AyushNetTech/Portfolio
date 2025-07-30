import React, { useRef, useEffect, useState } from "react";
import "./Projects.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Projects = () => {
    const projectsRef = useRef(null);
    const [scrollable, setScrollable] = useState(false);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(max-width: 768px)", () => {
            gsap.from(".Title", {
                y: 200,
                delay: 2,
                duration: 1
            });

            gsap.from(".ProContainer", {
                y: 400,
                delay: 3,
                duration: 1
            });
        });
    });

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
                threshold: [0.9] // ✅ Looser threshold
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
            <div className="Title">{/* <h1>Projects</h1> */}</div>

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
                        <div className="Project2"></div>
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
