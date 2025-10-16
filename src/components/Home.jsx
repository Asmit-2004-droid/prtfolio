import React from "react";
import "./Home.css";
import profile from "../assets/profile.png"
function Home() {
  return (
    <div className="home-section">
      <div className="home-text">
        <h2>Hi There!</h2>
        <h1>I’m <span>Asmit Gupta</span></h1>
        <h3>Frontend Developer</h3>
        <p>
          
        </p>
        <a href="#about" className="btn">More About Me</a>
      </div>
      <div className="home-img">
        <img src={profile} alt="" />
      </div>
    </div>
  );
}

export default Home;
