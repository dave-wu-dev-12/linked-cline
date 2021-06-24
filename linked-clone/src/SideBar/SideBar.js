import React from "react";
import "./SideBar.css";
import SideBarProfile from "./SideBarProfile/SideBarProfile";
import Avatar from "@material-ui/core/Avatar";

function SideBar() {
  return (
    <div className="sideBarContainer">
      <SideBarProfile></SideBarProfile>
    </div>
  );
}

export default SideBar;
