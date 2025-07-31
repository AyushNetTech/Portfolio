import React from "react";
import "./Info.css";
import infoV from "./videoB.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spacer from "./Spacer";

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();

        // 📱 Mobile timeline
        mm.add("(max-width: 768px)", () => {
            const tlMobile = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.out" } });

            tlMobile
                .from("#a", { x: -100, delay: 1 })
                .from("#b", { y: 100 }, "<0.2")
                .from("#c", { x: 200 }, "<0.2")
                .to("#d", { scale: 1 }, "<0.2")
                .from("#e", { x: 500 }, "<0.2")
                .from(".VFrame", { x: -200 }, "<0.2");
        });

        // 💻 Desktop timeline with ScrollTrigger
        mm.add("(min-width: 769px)", () => {
            const tlDesktop = gsap.timeline({
                scrollTrigger: {
                    trigger: ".Info",
                    start: "top 80%",
                    markers: true
                },
                defaults: { duration: 0.5, ease: "power2.out" },
            });

            tlDesktop
                .from("#a", { x: -400 })
                .from("#b", { y: 300 }, "<0.1")
                .from("#c", { x: 500 }, "<0.1")
                .to("#d", { scale: 1 }, "<0.1")
                .from("#e", { x: 1000 }, "<0.1")
                .from(".VFrame", { x: -600 }, "<0.1");
        });
    });

    return (
        <>
            <div className="Info">
                <div className="Upper">
                    <div className="divA">
                        <h1 id="a">
                            I <span style={{ color: "rgb(236, 48, 48)", fontFamily: 'Anton SC, sans-serif' }}>'</span> Am
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
                            <video autoPlay loop muted>
                                <source src={infoV} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <Spacer />
        </>
    );
};

export default Info;
