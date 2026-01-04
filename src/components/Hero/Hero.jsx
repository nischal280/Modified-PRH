import React from "react";
import "./Hero.css";
import FlipCountdown from "../FlipCountdown/FlipCountdown";
import ImageSwiper from "../ImageSwiper/ImageSwiper";
import AutoplaySlider from "../AutoplaySlider/AutoplaySlider";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { societies } from "../../assets/data/societies";
import { sliderSponsors } from "../../assets/data/sponsors";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <FlipCountdown />
        <div className="logo-text">
          <img src="/delta-logo.svg" alt="" />
          <h1>
            PURWANCHAL RESEARCH HUB(PRH) 
          </h1>
          {/* <p>PRH</p> */}
        </div>
        <VideoPlayer />
        <div className="about-hero">
          <h1>
            About <span> PRH</span>
          </h1>
          <p>
             PRH is a newly established research center designed to serve as a bridge between learners and knowledge. Its primary goal is to make learning more accessible, interactive, and impactful by connecting students, researchers, and professionals with the right resources, tools, and guidance. By fostering a collaborative environment, PRH encourages curiosity, critical thinking, and innovation, helping learners not only acquire information but also apply it effectively in real-world scenarios. The center aims to empower individuals, support research initiatives, and create a dynamic space where knowledge meets opportunity, preparing the next generation of thinkers, innovators, and leaders.
          </p>
          {/* <Button
            btnText={"DELTA 2025 Theme"}
            btnLink={
              "https://drive.google.com/file/d/1jceXL7BpNgb8RuSzx6Fgilt6UtrgpKq_/view?usp=sharing"
            }
            width={225}
          /> */}
          
        </div>
        {/* <AutoplaySlider header={"Our Sponsors"} items={sliderSponsors} /> */}
        <AutoplaySlider header={"Our Societies"} items={societies} />
        <div className="swipe">
          <ImageSwiper />
        </div>
      </div>
    </>
  );
};

export default Hero;
