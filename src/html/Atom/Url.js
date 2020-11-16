import React from "react";

function Url({ url, label }) {
  return (
    <a className="highlight-link" href={url} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}

export default Url;
