import React from "react";
import "./HeaderIcons.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function HeaderIcons({ Icon, label, action }) {
  return (
    <div className="iconContainer" onClick={action}>
      <Icon className="iconImg" />
      <p>
        {label}
        {label == "Me" || label == "Work" ? (
          <ArrowDropDownIcon className="floatingArrow"></ArrowDropDownIcon>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}

export default HeaderIcons;
