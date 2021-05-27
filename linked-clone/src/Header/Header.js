import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import HeaderIcons from "./HeaderIcons/HeaderIcons";

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerContentContainer">
        <div className="leftHeaderContainer">
          <img
            className="logoImage"
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt="logo"
          />
          <div className="searchBarContainer">
            <SearchIcon className="searchImg"></SearchIcon>
            <input type="text" />
          </div>
        </div>
        <div className="rightHeaderContainer">
          <HeaderIcons Icon={HomeIcon} label={"Home"}></HeaderIcons>
          <HeaderIcons Icon={PeopleAltIcon} label={"Network"}></HeaderIcons>
          <HeaderIcons Icon={WorkIcon} label={"Jobs"}></HeaderIcons>
          <HeaderIcons Icon={MessageIcon} label={"Messaging"}></HeaderIcons>
          <HeaderIcons
            Icon={NotificationsIcon}
            label={"Notifications"}
          ></HeaderIcons>
        </div>
      </div>
    </div>
  );
}

export default Header;
