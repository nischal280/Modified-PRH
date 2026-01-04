import React from "react";
import "./ContactForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  faFacebookF,
  faLinkedinIn,
  faDiscord,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0494fbc6-41f7-4df4-8f1c-8535642229f6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        color: "#3e4a91",
        background: "#e8f0fe",
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
        customClass: {
          popup: "custom-toast",
        },
      });
      Toast.fire({
        icon: "success",
        title: "Message sent successfully",
      });
    }
  };

  return (
    <>
      <section className="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <p>
            The Purwanchal Research Hub was officially inaugurated on 2023, marking a significant milestone in the advancement of science & technology research in our region. The center aims to foster innovation, promote interdisciplinary collaboration, and support cutting-edge research for both students and professionals.
          </p>
        </div>
        <div className="contact-container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <b></b>
                <FontAwesomeIcon icon={faLocationDot} className="i" />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  Gangalal Marg,
                  <br />
                  Tinkune, Dharan, <br />
                  PIN 56700
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <b></b>
                <FontAwesomeIcon icon={faPhone} className="i" />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>+977 - 9742555038</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <b></b>
                <FontAwesomeIcon icon={faEnvelope} className="i" />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>researchhub@ioepc.edu.np</p>
              </div>
            </div>
            <h2 className="txt">Connect with us</h2>
            <ul className="sci">
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faFacebookF} className="fa" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faLinkedinIn} className="fa" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faDiscord} className="fa" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faInstagram} className="fa" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faTiktok} className="fa" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="contactForm">
            <form onSubmit={onSubmit}>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="name" id="" required />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="email" name="email" required />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea name="message" required></textarea>
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
