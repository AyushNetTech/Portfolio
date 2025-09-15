import React from "react";
import "./Contact.css"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import myAnimation from "../Images/";

const Contact =()=>{
    return(
      <div className="ContactComp">
        <div className="ContactCont">
          <div className="ContactTitle">
            <div className="ContactTitle1">
              <span id="CT" style={{color:"rgb(236, 48, 48)", textDecoration:"underline"}}>C</span>
              <span id="CT">O</span>
              <span id="CT">N</span>
              <span id="CT">T</span>
              <span id="CT">A</span>
              <span id="CT">C</span>
              <span id="CT">T</span>
            </div>
            <div className="ContactTitle2">
              <span id="CT" style={{color:"rgb(236, 48, 48)", textDecoration:"underline"}}>M</span>
              <span id="CT">E</span>
            </div>
          </div>
          <div className="ContactDetails">
              <DotLottieReact
                src={myAnimation}
                autoplay
                loop
                style={{ width: 300, height: 300 }}
              />
          </div>
        </div>
      </div>
    )
}

export default Contact