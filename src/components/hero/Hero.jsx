import React from "react";
import "./Hero.css";
import Header from "../header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

function Hero() {
  return (
    <div className="hero">
      <div className="blur blur-h"></div>
      <div className="left-hero">
        <Header />
        {/*the best add*/}
        <div className="the-best-ad">
          <div> </div>
          <span>The best fitness club in the town</span>
        </div>

        {/*Hero heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body
            </span>
          </div>
        </div>
        {/*figures*/}
        <div className="figures">
          <div>
            {" "}
            <span>+140 </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            {" "}
            <span>+921</span>
            <span>Members Joined</span>
          </div>
          <div>
            {" "}
            <span>+30</span>
            <span>Fitness programs</span>
          </div>
        </div>

        {/*hero buttons */}

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-hero">
        <button className="btn"> Join Now</button>

        <div className="heart-rate">
          <img src={heart} alt="" />
          <span> Heart Rate </span> <span> 115 bpm</span>
        </div>

        {/*Hero images*/}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        {/*Calories*/}
        <div className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories burned</span> <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
