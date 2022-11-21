import "./Skills.css";
import React from "react";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-box">
        <div className="skills-title">
          <h2>Skills</h2>
          <p>My Technical Level</p>
        </div>
        <div className="skills-content">
          <div className="skills-group">
            {/* <i className="fa fa-certificate"></i> */}
            <i className="bx bxs-badge-check"></i>
            <div className="skill-text">
              <h3 className="skills-name">HTML</h3>
              <p className="skills-level">Intermediate</p>
            </div>
          </div>
          <div className="skills-group">
            <i className="bx bxs-badge-check"></i>
            <div className="skill-text">
              <h3 className="skills-name">CSS</h3>
              <p className="skills-level">Intermediate</p>
            </div>
          </div>
          <div className="skills-group">
            <i className="bx bxs-badge-check"></i>

            <div className="skill-text">
              <h3 className="skills-name">Javascript</h3>
              <p className="skills-level">Intermediate</p>
            </div>
          </div>
          <div className="skills-group">
            <i className="bx bxs-badge-check"></i>

            <div className="skill-text">
              <h3 className="skills-name">React.js</h3>
              <p className="skills-level">Intermediate</p>
            </div>
          </div>
          <div className="skills-group">
            <i className="bx bxs-badge-check"></i>

            <div className="skill-text">
              <h3 className="skills-name">WordPress</h3>
              <p className="skills-level">Basic</p>
            </div>
          </div>
          <div className="skills-group">
            <i className="bx bxs-badge-check"></i>

            <div className="skill-text">
              <h3 className="skills-name">Firebase</h3>
              <p className="skills-level">Basic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
