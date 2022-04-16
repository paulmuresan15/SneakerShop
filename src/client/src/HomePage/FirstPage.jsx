import React from "react";
import logo from "../Pictures/logo.png";
import Navigation from "./Navigation";
import Slideshow from "./Slideshow.jsx";
import "../styles/styles.css";
import FooterPage from "../HomePage/FooterPage";

const FirstPage = () => {
  return (
    <div>
      <div className="mainContainer">
        <div className="upContainer">
          <div className="navbar">
            <Navigation />
          </div>
        </div>
      </div>
      <Slideshow />
      <FooterPage />
    </div>
  );
};
export default FirstPage;
