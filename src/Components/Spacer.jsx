import React from "react";
import "./Spacer.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Spacer = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();

        // 📱 Mobile Timeline
        mm.add("(max-width: 768px)", () => {
            const tlMobile = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.out" } });

            tlMobile
                .to("#a", { x: -100, delay: 1 })
                .to("#b", { y: 100 }, "<0.2")
                .to("#c", { x: 200 }, "<0.2")
                .to("#d", { scale: 1 }, "<0.2")
                .to("#e", { x: 500 }, "<0.2")
                .to(".VFrame", { x: -200 }, "<0.2");
        });

        // 💻 Desktop Timeline with ScrollTrigger
        mm.add("(min-width: 769px)", () => {
            const tlDesktop = gsap.timeline({
                scrollTrigger: {
                    trigger: ".Spacer",
                    start: "top 50%",
                    // markers:true,
                    toggleActions: "restart pause resume reverse",
                },
                defaults: { duration: 0.5, ease: "power2.out" },
            });

            tlDesktop
                .to("#a", { x: -400 })
                .to("#b", { y: 300 }, "<0.1")
                .to("#c", { x: 500 }, "<0.1")
                .to("#d", { y: -200 }, "<0.1")
                .to("#e", { x: 1000 }, "<0.1")
                .to(".VFrame", { x: -600 }, "<0.1");
        });
    });

    return <div className="Spacer"></div>;
};

export default Spacer;
