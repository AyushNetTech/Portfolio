import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qznn5tg",   // From EmailJS
        "template_zqtnbau",  // From EmailJS
        form.current,
        "AB5HVjtdX6mDZQg_k"    // From EmailJS
      )
      .then(
        () => {
        toast.success("✅ Message sent successfully!");
        form.current.reset();
      },
      () => {
        toast.error("❌ Failed to send. Please try again!");
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
      <ToastContainer 
      position="bottom-right" 
      autoClose={3000} 
      hideProgressBar={false} 
      newestOnTop={true} 
      closeOnClick 
      pauseOnHover 
      theme="colored"
    />
    </div>
  );
};

export default Contact;
