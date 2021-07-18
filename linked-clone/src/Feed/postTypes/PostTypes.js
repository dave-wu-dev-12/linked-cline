import React from "react";
import "./PostTypes.css";

function PostTypes({ Icon, text }) {
  return (
    <div className="postTypeContainer">
      <Icon />
      <p className="postTypesText">{text}</p>
    </div>
  );
}

export default PostTypes;
