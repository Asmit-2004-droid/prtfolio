import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services-section">
      <h2>Services</h2>
      <div className="service-cards">
        <div className="card">
         <h2>Web Design</h2>
                <p>Creating responsive and user-friendly websites using HTML, CSS, and JavaScript.</p>
        </div>
        <div className="card">
          <h2>Frontend developer</h2>
                <p>Building interactive and dynamic web applications with a focus on performance and usability.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
