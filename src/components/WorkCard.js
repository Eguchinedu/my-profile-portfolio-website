import "./WorkCard.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

import React from "react";

const WorkCard = (props) => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <div className="project-card" data-aos="zoom-in">
      <img src={props.imgsrc} alt="projectimage" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        {/* <div className="pro-btns"> */}
        {/* <NavLink to="url.com" className="btn">
            Source
          </NavLink> */}
        {/* </div> */}
      </div>
      {/* eslint-disable-next-line */}
      <a href={props.view} className="btn" target="_blank">
        View <i class="bx bxs-right-arrow-alt bx-fade-right-hover"></i>
      </a>
    </div>
  );
};

export default WorkCard;
