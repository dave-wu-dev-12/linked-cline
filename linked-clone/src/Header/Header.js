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

  const toggleProductMenu = () => {
    if (!showProductMenu) {
      showProductMenuWithAnimation();
    } else {
      dismissProductWithAnimation();
    }
  };

  const dismissProductWithAnimation = () => {
    setIsProductOpenAnimation(false);
    setTimeout(() => {
      setShowProductMenu(false);
    }, 250);
  };

  const showProductMenuWithAnimation = () => {
    setIsProductOpenAnimation(true);
    setShowProductMenu(true);
  };

  const productMenuOnBlur = (event) => {
    // currentTarget refers to this component.
    // relatedTarget refers to the element where the user clicked (or focused) which
    // triggered this event.
    // So in effect, this condition checks if the user clicked outside the component.
    // you do have the option to also check the class list of some other element
    // like buttons or anchors that naturally have relatedTarget populated
    if (
      !event.currentTarget.contains(event.relatedTarget) &&
      !event.relatedTarget?.classList.contains("themeToggleButton")
    ) {
      dismissProductWithAnimation();
      console.log("product not focused");
    }
  };

  const toggleDropdownMenu = () => {
    if (!showDropdown) {
      showDropDownMenuWithAnimation();
    } else {
      dismissDropdownWithAnimation();
    }
  };

  const dismissDropdownWithAnimation = () => {
    setIsDropdownOpenAnimation(false);
    setTimeout(() => {
      setShowDropdown(false);
    }, 250);
  };

  const showDropDownMenuWithAnimation = () => {
    setIsDropdownOpenAnimation(true);
    setShowDropdown(true);
  };

  const dropdownOnBlur = (event) => {
    // currentTarget refers to this component.
    // relatedTarget refers to the element where the user clicked (or focused) which
    // triggered this event.
    // So in effect, this condition checks if the user clicked outside the component.
    if (
      !event.currentTarget.contains(event.relatedTarget) &&
      !event.relatedTarget?.classList.contains("themeToggleButton")
    ) {
      dismissDropdownWithAnimation();
      console.log("dropdown not focused");
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
          onblurActionFunction={dropdownOnBlur}
        ></UserDropdown>
      )}
      {showProductMenu && (
        <ProductMenu
          isOpenAnimation={isProductOpenAnimation}
          onblurActionFunction={productMenuOnBlur}
        ></ProductMenu>
      )}
    </div>
  );
}

export default Header;
