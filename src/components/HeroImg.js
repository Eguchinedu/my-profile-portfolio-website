import React from "react";
import "./HeroImgStyles.css";
// import profilephoto from '../assets/profilephoto.JPG'
import { Link } from "react-router-dom";
import Typical from "react-typical";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <div className="content">
          <p>Hi, I'm Egu Chinedu</p>
          {/* <h1>Frontend Developer</h1> */}
          <h2>
            <Typical
              loop={Infinity}
              steps={[
                "Frontend Dev 🧑‍💻",
                1000,
                "Website Developer 🌐",
                1000,
                "React.Js Dev 💻",
                1000,
                "Angular.Ts Dev 💻",
                1000,
              ]}
            />{" "}
          </h2>
          <div className="button">
            <Link to="/projects" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="btn btn-light">
              contact
            </Link>
          </div>
        </div>
        {/* <div className="profile-photo">
          <img src={profilephoto} alt="User" />
        </div> */}
      </div>
    </div>
  );
};

export default HeroImg;
