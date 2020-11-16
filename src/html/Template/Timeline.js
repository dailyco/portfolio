import React from "react";
import Events from "../Organism/Events";

function Timeline({ events }) {
  return (
    <>
      <h1 className="title">Education &amp; Experience</h1>
      <p className="subtitle">
        For more information, have a look at my
        <a className="highlight-link" href="{{site.cv_download_link}}" target="_blank" rel="noreferrer">
          curriculum vitae
        </a>
        .
      </p>

      <div className="timeline-wrapper">
        <ul className="timeline">{events && <Events events={events}></Events>}</ul>
      </div>
    </>
  );
}

export default Timeline;
