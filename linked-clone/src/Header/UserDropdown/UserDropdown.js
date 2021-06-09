import React from "react";
import "./UserDropdown.css";
import Avatar from "@material-ui/core/Avatar";
import ItemList from "./itemList/ItemList";

function UserDropdown({ userName, title, isOpenAnimation }) {
  let items = ["Settings and Privacy", "Help", "Language"];
  let manageItems = ["Posts and Activity", "Job Posting Account"];
  let signOutItems = ["Sign Out"];

  return (
    <div
      className={
        "userDropdownContainer " + (isOpenAnimation ? "fadeIn" : "fadeOut")
      }
    >
      <div className="dropdown__profile">
        <div className="dropdown_profile_inner">
          <Avatar className="dropdown_avatar"></Avatar>
          <div className="dropdown_profile_text">
            <h5> {userName}</h5>
            <p> {title}</p>
          </div>
        </div>
        <button className="dropdown_button">View Profile</button>
      </div>
      <hr className="dropdownDivider" />
      <ItemList header={"Account"} items={items}></ItemList>
      <hr className="dropdownDivider" />
      <ItemList header={"Manage"} items={manageItems}></ItemList>
      <hr className="dropdownDivider" />
      <ItemList items={signOutItems}></ItemList>
    </div>
  );
}

export default UserDropdown;
