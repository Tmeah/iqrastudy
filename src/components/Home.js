import React from "react";
import "../styles/home.css";
import home from "../images/home.svg";

function Home() {
  return (
    <div className="home-main">
      <div className="home-text">
        <h1 className="home-title">
          Discover, Learn, and Grow with{" "}
          <span className="blue">IqraStudy.</span>
        </h1>
        <p className="home-desc">
          A Dedicated Online Platform for Exploring Quran, Hadith, and Duas.
        </p>
        <button className="home-btn">Get Started</button>
      </div>

      <div className="home-img-div">
        <img src={home} alt="" className="home-img" />
      </div>
    </div>
  );
}

export default Home;
