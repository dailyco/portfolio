import React from "react";
import Topic from "../Atom/Topic";

function Topics({ topics }) {
  return (
    <div className="tag-wrapper">
      {topics.map((topic) => {
        return <Topic topic={topic}></Topic>;
      })}
    </div>
  );
}

export default Topics;
