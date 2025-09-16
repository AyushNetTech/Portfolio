import React from "react";
import "./Contact.css"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import myAnimation from "../Images/ContactMe.lottie";

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
            <div className="LottieCont">
              <DotLottieReact
                src={myAnimation}
                autoplay
                loop
                style={{ width: 400, height: 400 }}
              />
            </div>
            <div className="FormCont">
              <form className="contact-form">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>

                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="SocialMediaCont">
              <ul>
                <li>
                  <a href="https://github.com/AyushUpase369" target="_blank"><i class="fab fa-github icon"></i></a></li>
                <li>
                  <a href="https://www.linkedin.com/in/ayushupase/" target="_blank"><i class="fab fa-linkedin-in icon"></i></a></li>
                <li>
                  <a href="https://www.instagram.com/x_ayu.sh_0/" target="_blank"><i class="fab fa-instagram icon"></i></a></li>
                <li>
                <a href="https://www.hackerrank.com/profile/ayushsunilupase1" target="_blank"><i class="fab fa-hackerrank icon"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contact