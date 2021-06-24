import React from "react";
import "./SideBar.css";
import SideBarProfile from "./SideBarProfile/SideBarProfile";
import Avatar from "@material-ui/core/Avatar";
import SideBarHashTags from "./SideBarHashTags/SideBarHashTags";

function SideBar() {
  return (
    <div className="sideBarContainer">
      <SideBarProfile></SideBarProfile>
      <SideBarHashTags></SideBarHashTags>
    </div>
  );
}

export default SideBar;
