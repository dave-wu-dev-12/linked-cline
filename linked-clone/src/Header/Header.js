import React, { useEffect, useState } from "react";
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
import ProductMenu from "./ProductMenu/ProductMenu";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDropdownOpenAnimation, setIsDropdownOpenAnimation] = useState(false);

  const [showProductMenu, setShowProductMenu] = useState(false);
  const [isProductOpenAnimation, setIsProductOpenAnimation] = useState(false);

  const toggleDropdownMenu = () => {
    if (!showDropdown) {
      dismissProductWithAnimation();
      showDropDownMenuWithAnimation();
    } else {
      dismissDropdownWithAnimation();
    }
  };

  const toggleProductMenu = () => {
    if (!showProductMenu) {
      dismissDropdownWithAnimation();
      showProductMenuWithAnimation();
    } else {
      dismissProductWithAnimation();
    }
  };

  const showProductMenuWithAnimation = () => {
    setIsProductOpenAnimation(true);
    setShowProductMenu(true);
  };

  const showDropDownMenuWithAnimation = () => {
    setIsDropdownOpenAnimation(true);
    setShowDropdown(true);
  };

  const dismissProductWithAnimation = () => {
    setIsProductOpenAnimation(false);
    setTimeout(() => {
      setShowProductMenu(false);
    }, 250);
  };

  const dismissDropdownWithAnimation = () => {
    setIsDropdownOpenAnimation(false);
    setTimeout(() => {
      setShowDropdown(false);
    }, 250);
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
              action={() => toggleDropdownMenu()}
            ></HeaderIcons>
          </div>
          <div className="subContentContainer">
            <HeaderIcons
              Icon={AppsIcon}
              label={"Work"}
              action={() => toggleProductMenu()}
            ></HeaderIcons>
            <a href="" className="freeLink">
              Try Premium Free for 1 Month
            </a>
          </div>
        </div>
      </div>
      {showDropdown && (
        <UserDropdown
          userName={"Dirk"}
          title={"Manager at Hendricx Hendricx Inc Hendricx LLC"}
          isOpenAnimation={isDropdownOpenAnimation}
        ></UserDropdown>
      )}
      {showProductMenu && (
        <ProductMenu isOpenAnimation={isProductOpenAnimation}></ProductMenu>
      )}
    </div>
  );
}

export default Header;
