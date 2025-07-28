import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const navbarRef = useRef(null);
  let lastScrollY = useRef(window.scrollY);
  let isHidden = useRef(false);

  // Entry animation
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 3,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (delta > 0.1 && !isHidden.current) {
        // Scroll down → hide navbar
        gsap.to(navbarRef.current, {
          y: -100,
          duration: 0.8,
          ease: "easeOutQuart",
        });
        isHidden.current = true;
      } else if (delta < -0.1 && isHidden.current) {
        // Scroll up → show navbar
        gsap.to(navbarRef.current, {
          y: 0,
          duration: 0.8,
          ease: "easeOutQuart",
        });
        isHidden.current = false;
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Navbar" ref={navbarRef}>
      <div className="l">HOME</div>
      <div className="l">PROJECTS</div>
      <div className="l">SKILLS</div>
      <div className="Contact l">CONTACT</div>
    </div>
  );
};

export default Navbar;
