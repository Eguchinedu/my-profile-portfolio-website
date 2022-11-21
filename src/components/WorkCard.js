import "./WorkCard.css";

import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
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
