import React from "react";
import "./Navbar.css";
import profile from "../assets/profile.png"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="profile">
        <img src={profile} alt="Profile" className="profile-img" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
