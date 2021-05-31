import React, { useState } from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import HeaderIcons from "./HeaderIcons/HeaderIcons";
import Avatar from "@material-ui/core/Avatar";
import AppsIcon from "@material-ui/icons/Apps";
import UserDropdown from "./UserDropdown/UserDropdown";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [addtionalStyle, setAddtionalStyle] = useState("");

  const fadeOutandCloseDropdown = () => {
    if (showDropdown == true) {
      setAddtionalStyle("fadeOut");
      setTimeout(() => {
        setShowDropdown(false);
      }, 250);
    } else {
      setAddtionalStyle("");
      setShowDropdown(true);
    }
  };

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
          <div className="iconHeaderContainer">
            <HeaderIcons Icon={HomeIcon} label={"Home"}></HeaderIcons>
            <HeaderIcons Icon={PeopleAltIcon} label={"Network"}></HeaderIcons>
            <HeaderIcons Icon={WorkIcon} label={"Jobs"}></HeaderIcons>
            <HeaderIcons Icon={MessageIcon} label={"Messaging"}></HeaderIcons>
            <HeaderIcons
              Icon={NotificationsIcon}
              label={"Notifications"}
            ></HeaderIcons>
            <HeaderIcons
              Icon={Avatar}
              label={"Me"}
              action={fadeOutandCloseDropdown}
            ></HeaderIcons>
            {showDropdown && (
              <UserDropdown
                userName={"Dirk"}
                title={"Manager at Hendricx Hendricx Inc Hendricx LLC"}
                addtionalStyle={addtionalStyle}
              ></UserDropdown>
            )}
          </div>
          <div className="subContentContainer">
            <HeaderIcons Icon={AppsIcon} label={"Work"}></HeaderIcons>
            <a href="" className="freeLink">
              Try Premium Free for 1 Month
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
