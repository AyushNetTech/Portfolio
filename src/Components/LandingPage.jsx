import React, { useEffect, useRef, useState } from "react";
import "./LandingPage.css";
import { gsap } from "gsap";
import Info from "./Info";

import img1 from "../Images/C.svg";
import img2 from "../Images/C++.svg";
import img3 from "../Images/Java.svg";
import img4 from "../Images/kotlin-1.svg";
import img5 from "../Images/Android.svg";
import img6 from "../Images/HTML.svg";
import img7 from "../Images/CSS.svg";
import img8 from "../Images/JavaScript.svg";
import img9 from "../Images/React.svg";
import img10 from "../Images/NodeJS2.svg";
import img11 from "../Images/MySQL.svg";
import img12 from "../Images/GitHub.svg";

import PortfolioCont from "./PortfolioCont";

const LandingPage = () => {
  const imagesRef = useRef([]);
  const [showMain, setShowMain] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setShowMain(true);
      },
    });

    const allImages = [
      img1,img7, img3, img4, img10,img2, img5, img8, img9, img6, img11, img12
    ];

    allImages.forEach((_, index) => {
      tl.set(imagesRef.current[index], { visibility: "visible" })
        .set(imagesRef.current[index], { visibility: "hidden" }, "+=0.2");
    });

  }, []);

  useEffect(() => {
    if (showMain && mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { y: window.innerHeight},
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, [showMain]);

  const imageSources = [
    img1, img7, img3, img4, img10, img11,img5, img8,img12,img2, img9, img6
  ];

  return (
    <>
      <div className="Landing">
        {imageSources.map((src, i) => (
          <img
            key={i}
            src={src}
            className="img-item"
            ref={(el) => (imagesRef.current[i] = el)}
            alt={`img-${i}`}
          />
        ))}
      </div>

      {showMain && (
          <div ref={mainRef} style={{ opacity: 0 }}>
            <PortfolioCont/>
          </div>
      )}
    </>
  );
};

export default LandingPage;
