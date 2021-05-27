import React from "react";
import "./HeaderIcons.css";

function HeaderIcons({ Icon, label }) {
  return (
    <div className="iconContainer">
      <Icon className="iconImg" />
      <p>{label}</p>
    </div>
  );
}

export default HeaderIcons;
