import React, { useState } from "react";
import "./Testimonials.css";
import leftarrow from "../../assets/leftArrow.png";
import rightarrow from "../../assets/rightArrow.png";
import { testimonialsData } from "./testimonialsData";

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const tlenght = testimonialsData.length;

  return (
    <div className="Testimonials" id="testimonials">
      <div className="testimonials-left">
        <span>Testimonials</span>
        <span className="stroke-text">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <span> {testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}{" "}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="testimonials-right">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} />
        <div className="arrows">
          <img
            src={leftarrow}
            onClick={() => {
              selected == 0
                ? setSelected(tlenght - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          <img
            src={rightarrow}
            onClick={() => {
              selected == tlenght - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
