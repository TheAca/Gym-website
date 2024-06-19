import React from "react";
import "./Plans.css";
import { plansData } from "./plansData";
import whiteTick from "../../assets/whiteTick.png";
function Plans() {
  return (
    <div className="Plans" id="plans">
      <div className="blur blur-p"> </div>
      <div className="blur blur-p2"> </div>
      <div className="plans-header">
        <span className="stroke-text">READY TO START </span>
        <span>YOUR JOURNEY </span>
        <span className="stroke-text">NOW WITH US </span>
      </div>
      <div className="plans-programs">
        {plansData.map((plan, index) => {
          return (
            <div className="plan" key={index}>
              <span className="plan-icons">{plan.icon} </span>
              <span className="plan-name">{plan.name} </span>
              <span className="plan-price">$ {plan.price} </span>
              <div className="features">
                {plan.features.map((feature, index) => {
                  return (
                    <div className="feature">
                      <img src={whiteTick} alt="" />
                      <span key={index}>{feature} </span>
                    </div>
                  );
                })}
              </div>
              <div className="plan-benefits">See more benefits </div>
              <button className="btn"> Join now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Plans;
