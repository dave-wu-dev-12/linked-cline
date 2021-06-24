import React from "react";
import "./SideBarProfile.css";
import Avatar from "@material-ui/core/Avatar";
import SideBarProfileLineItem from "./SideBarProfileLineItem/SideBarProfileLineItem";
import AddBoxIcon from "@material-ui/icons/AddBox";
import TurnedInIcon from "@material-ui/icons/TurnedIn";

function SideBarProfile() {
  return (
    <div className="sideBarProfileContainer">
      <div className="sideBarMiniProfile">
        <div className="sideBarMiniColorBlock">
          <Avatar className="sideBarMiniProfileAvatar"></Avatar>
        </div>
        <h4>Dirk</h4>
        <p>Manager at Hendricx Hendricx Inc Hendricx LLC</p>
      </div>

      <div className="sideBarProfileViews">
        <SideBarProfileLineItem
          header={"Who viewed your profile"}
          count={"20"}
        ></SideBarProfileLineItem>

        <SideBarProfileLineItem
          header={"Connections"}
          count={"413"}
          bodyText={"Grow your network"}
        ></SideBarProfileLineItem>
      </div>
      <div className="profilePremium">
        <SideBarProfileLineItem
          Icon={AddBoxIcon}
          header={"Access exclusive tools"}
          bodyText={"Try Premium for free"}
        ></SideBarProfileLineItem>
      </div>

      <SideBarProfileLineItem
        Icon={TurnedInIcon}
        bodyText={"My Items"}
      ></SideBarProfileLineItem>
    </div>
  );
}

export default SideBarProfile;
