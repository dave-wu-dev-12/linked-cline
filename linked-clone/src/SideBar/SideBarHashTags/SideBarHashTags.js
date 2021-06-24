import React from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "./SideBarHashTags.css";

function SideBarHashTags() {
  return (
    <div className="sideBarHashTagContainer">
      <div className="hashTagHeader">
        <p>Recent</p>
        <KeyboardArrowUpIcon className="chevronIcon"></KeyboardArrowUpIcon>
      </div>
      <div className="hashTagLineContainer">
        <div className="hashTagLineItem">
          <p className="hashtagIcon">#</p>
          <p>future</p>
        </div>
        <div className="hashTagLineItem">
          <p className="hashtagIcon">#</p>
          <p>future</p>
        </div>
        <div className="hashTagLineItem">
          <p className="hashtagIcon">#</p>
          <p>future</p>
        </div>
        <div className="hashTagLineItem">
          <p className="hashtagIcon">#</p>
          <p>future</p>
        </div>
        <div className="hashTagLineItem">
          <p className="hashtagIcon">#</p>
          <p>future</p>
        </div>
        <div className="hashTagLineItem">
          <p className="hashtagIcon">#</p>
          <p>future</p>
        </div>
        <div className="hashTagLineItem">
          <p className="hashtagIcon">#</p>
          <p>future</p>
        </div>
      </div>
    </div>
  );
}

export default SideBarHashTags;
