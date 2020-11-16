import React from "react";
import Url from "../Atom/Url";
import Tags from "./../Molecule/Tags";

function Project({ data }) {
  const { name, descr, demo, tags } = data;

  return (
    <div className="project neumorphism-card" data-aos="zoom-in-down">
      <div className="name-link-wrapper">
        <h3>{name}</h3>
      </div>
      <p className="project-desc">{descr}</p>

      {demo && <Url link={demo} label="Demo"></Url>}
      {tags && <Tags tags={tags}></Tags>}
    </div>
  );
}

export default Project;
