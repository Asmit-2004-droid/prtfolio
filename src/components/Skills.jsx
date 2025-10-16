import React from 'react'
import "./Skills.css"
const Skills = () => {
  return (
    <div>
      <div className="skills-section">
      <h2>Skills</h2>
      <div className="about-skills">
                  <div className="skill"><p>HTML </p><hr style={{width:"80%"}}/></div>
                  <div className="skill"><p>CSS</p><hr style={{width:"60%"}}/></div>
                  <div className="skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                  <div className="skill"><p>React</p><hr style={{width:"40%"}}/></div>
                </div>
                <div className="achivement">
          <div className="achive-item">
            <h1>5+</h1>
            <p>Projects Completed</p>
          </div>
          <hr/>
          <div className="achive-item">
            <h1>3+</h1>
            <p>Certificates</p>
          </div>
          
        </div>
    </div>
    </div>
  )
}

export default Skills
