import React from "react";
import "./Footer.css";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import git from "../../assets/github.png";
import logo from "../../assets/logo.png";
function Footer() {
  return (
    <div className="footer-container">
      <div className="blur footer-blur"></div>
      <div className="blur2 footer-blur2"></div>
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={git} alt="" />
          <img src={linkedin} alt="" />
          <img src={instagram} alt="" />
        </div>

        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
