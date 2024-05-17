import React from "react";
import "./projectCard.css";
import arrow from "../../assets/arrow.png";
import github from "../../assets/githubneww.png";

export const ProjectCard = (props) => {
  return (
    <div className="all-cards">
      <div className="card">
        <div className="text-div">
          <div>
            <p className="project-title">{props.projectTitle}</p>
            <p className="project-details">{props.projectDescription}</p>
            <div className="flex-btw">
              <p>Tools/stacks: </p>
              <p>{props.stacks}</p>
            </div>
            <hr className="rule" />
          </div>
          <div className="flex">
            <div className="underline">
              <a href={props.projectlink} target="_blank">
                <div className="flex div-link">
                  <p>Live Demo</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>
            <div className="underline">
              <a href={props.githublink} target="_blank">
                <div className="flex div-link pad-left">
                  <p>See on github</p>
                  <img src={github} alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="image-div">
          {/* <img className="project-image" src={props.imageurl} alt="products" /> */}
        </div>
      </div>
    </div>
  );
};
