import React from "react";
import "./Programs.css";
import { programsData } from "./programsData";
import rightArrow from "../../assets/rightArrow.png";
function Programs() {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text"> to shape you</span>
      </div>
      <div className="program-categories">
        {programsData.map((program) => {
          return (
            <div className="category">
              {program.image}
              <span> {program.heading}</span>
              <span> {program.details}</span>
              <span className="join-now">
                Join Now <img src={rightArrow} alt="" />{" "}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Programs;
