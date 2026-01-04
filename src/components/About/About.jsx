import React from "react";
import "./About.css";
import useAnimateOnScroll from "../../hooks/AnimateOnScroll";

const About = () => {
  useAnimateOnScroll();

  return (
    <>
      <section className="hero">
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="container">
          <div className="hero-content">
            <h2>Welcome to Purwanchal Research Hub</h2>
            <p>
             Purwanchal Research Hub is the place which provide opportunity for the students who want to do reseach ar innovate new things.
            </p>
          </div>
          <div className="hero-image">
            <img className="img" src="/about/1.jpg" alt="" />
          </div>
        </div>

        <div className="container">
          <div className="hero-image">
            <img className="img" src="/about/2.jpg" alt="" />
          </div>
          <div className="hero-content">
            <h2>Our Mission</h2>
            <p>
              At Delta, we go beyond the traditional boundaries of education.
              Each faculty boasts its own society, driven by students with a
              shared goal: to provide training beyond the standard curriculum.
              This training equips students with skills essential for success in
              their respective fields. Led by seniors and industry experts,
              these sessions offer practical insights and real-world knowledge
              to the next generation of engineers.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="hero-content">
            <h2>PRH: Where ideas become innovation</h2>
            <p>
             Purwanchal Research Hub is a place where experts research problems, test ideas, and develop solutions instead of just teaching or selling products.
            </p>
          </div>
          <div className="hero-image">
            <img className="img" src="/about/3.jpg" alt="" />
          </div>
        </div>

        <div className="container">
          <div className="hero-image">
            <img className="img" src="/about/4.jpg" alt="" />
          </div>
          <div className="hero-content">
            <h2>Annual Transformation</h2>
            <p>
              The mission of the Research Center is to promote academic excellence by fostering research, critical thinking, and innovation among students and faculty
            </p>
          </div>
        </div>

        <div className="container">
          <div className="hero-content">
            <h2>Events that Define Excellence</h2>
            <p>
              In our main events, we bring together all seven faculties for
              competitions that challenge the boundaries of innovation and
              creativity. 
            </p>
          </div>
          <div className="hero-image">
            <img className="img" src="/about/5.jpg" alt="" />
          </div>
        </div>

        <div className="container">
          <div className="hero-image">
            <img className="img" src="/about/6.jpg" alt="" />
          </div>
          <div className="hero-content">
            <h2>Preparing minds for success</h2>
            <p>
              Training for Success is our commitment to developing skilled, confident, and future-ready individuals through quality education and research
            </p>
          </div>
        </div>

        <div className="container">
          <div className="hero-content">
            <h2>Get Ready for the Ultimate Technical Adventure!</h2>
            <p>
              Join us on our journey of growth, collaboration, and excellence.
              PRH is a community dedicated to
              shaping the future of engineering.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
