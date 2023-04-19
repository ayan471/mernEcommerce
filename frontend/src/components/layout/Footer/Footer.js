import React from "react";
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS devices</p>
        <img src={playstore} alt="playstore" />
        <img src={appstore} alt="Appstore" />
      </div>
      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>Created with ❤️ By Ayan</p>
        <p>Copyrights 2023 &copy; Ayan</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Me</h4>
        <a href="https://github.com/ayan471">GitHub</a>
        <a href="https://www.linkedin.com/in/ayan-pakhira-93a18baa/">
          Linkedin
        </a>
        <a href="https://www.facebook.com/lonelyassassin.07">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
