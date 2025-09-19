import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tfag8uj",   // From EmailJS
        "template_80y6pgc",  // From EmailJS
        form.current,
        "kbpnGOyCb9sRHlX2m"    // From EmailJS
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send. Try again!");
        }
      );
  };

  return (
    <div className="ContactComp">
      <div className="ContactCont">
        <div className="ContactTitle">
          <div className="ContactTitle1">
            <span id="CT" style={{ color: "rgb(236, 48, 48)", textDecoration: "underline" }}>C</span>
            <span id="CT">O</span>
            <span id="CT">N</span>
            <span id="CT">T</span>
            <span id="CT">A</span>
            <span id="CT">C</span>
            <span id="CT">T</span>
          </div>
          <div className="ContactTitle2">
            <span  id="CT" style={{ color: "rgb(236, 48, 48)", textDecoration: "underline" }}>M</span>
            <span id="CT">E</span>
          </div>
        </div>

        <div className="ContactDetails">
          <div className="LottieCont">
            <DotLottieReact
              src="https://v66kyfwcgplwzcso.public.blob.vercel-storage.com/ContactMe.lottie"
              poster="https://v66kyfwcgplwzcso.public.blob.vercel-storage.com/contactme.svg"
              autoplay
              loop
              className="lottie"
            />
          </div>

          <div className="FormCont">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="user_name" required />

              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="user_email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="SocialMediaCont">
            <ul>
              <li>
                <a href="https://github.com/AyushUpase369" target="_blank" rel="noreferrer">
                  <i className="fab fa-github icon"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ayushupase/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in icon"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/x_ayu.sh_0/" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram icon"></i>
                </a>
              </li>
              <li>
                <a href="https://www.hackerrank.com/profile/ayushsunilupase1" target="_blank" rel="noreferrer">
                  <i className="fab fa-hackerrank icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
