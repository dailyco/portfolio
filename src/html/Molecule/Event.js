import React from "react";
import Tags from "./Tags";

function Event({ direction, data }) {
  const { title, subtitle, date, tags } = data;

  if (direction)
    return (
      <li>
        <div className="direction-l">
          <div className="flag-wrapper">
            <span className="hexagon"></span>
            <span className="flag neumorphism-button" data-aos="zoom-in-right">
              <a href="{{event.title-url}}" target="_blank" rel="noreferrer">
                {title && <span>{title}</span>}
              </a>
            </span>
            <span className="time-wrapper" data-aos="zoom-in-right">
              {date && <span className="time neumorphism-card">{date}</span>}
            </span>
          </div>
          <div className="desc neumorphism-card" data-aos="zoom-in-right">
            {subtitle}
            {tags && <Tags data={tags}></Tags>}
          </div>
        </div>
      </li>
    );
  else
    return (
      <li>
        <div className="direction-r">
          <div className="flag-wrapper">
            <span className="hexagon"></span>
            <span className="flag neumorphism-button" data-aos="zoom-in-left">
              <a href="{{event.title-url}}" target="_blank" rel="noreferrer">
                {title && <span>{title}</span>}
              </a>
            </span>
            <span className="time-wrapper" data-aos="zoom-in-left">
              {date && <span className="time neumorphism-card">{date}</span>}
            </span>
          </div>
          <div className="desc neumorphism-card" data-aos="zoom-in-left">
            {subtitle}
            {tags && <Tags data={tags}></Tags>}
          </div>
        </div>
      </li>
    );
}

Event.defaultProps = {
  data: {
    title: "",
    subtitle: "",
    date: "",
    tags: [],
  },
};

export default Event;
