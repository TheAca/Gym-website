import React from "react";
import "./Join.css";
function Join() {
  return (
    <div className="Join" id="join">
      <div className="join-left">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP </span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US? </span>
        </div>
      </div>
      <div className="join-right">
        <form action="" className="email_container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
          ></input>
          <button className="btn join-btn"> Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
