import "./Skills.css";
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="skills-container">
      <div className="skills-box" data-aos="fade-up">
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
              <p className="skills-level">Intermediate</p>
            </div>
          </div>
          <div className="skills-group">
            <i className="bx bxs-badge-check"></i>

            <div className="skill-text">
              <h3 className="skills-name">Bootstrap</h3>
              <p className="skills-level">Intermediate</p>
            </div>
          </div>
          <div className="skills-group">
            <i className="bx bxs-badge-check"></i>

            <div className="skill-text">
              <h3 className="skills-name">Angular TS</h3>
              <p className="skills-level">Intermediate</p>
            </div>
          </div>
          <div className="skills-group">
            <i className="bx bxs-badge-check"></i>

            <div className="skill-text">
              <h3 className="skills-name">Angular Materials</h3>
              <p className="skills-level">Intermediate</p>
            </div>
          </div>
          <div className="skills-group">
            <i className="bx bxs-badge-check"></i>

            <div className="skill-text">
              <h3 className="skills-name">C# Dot Net.</h3>
              <p className="skills-level">Basic</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
