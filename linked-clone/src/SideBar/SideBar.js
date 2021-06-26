import React, { useEffect, useState } from "react";
import "./SideBar.css";
import SideBarProfile from "./SideBarProfile/SideBarProfile";
import Avatar from "@material-ui/core/Avatar";
import SideBarHashTags from "./SideBarHashTags/SideBarHashTags";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function SideBar() {
  const [hideProfileDetails, setHideProfileDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isShowClickFresh, setIsShowClickFresh] = useState(false);

  const updateMedia = () => {
    if (window.innerWidth > 900) {
      setIsMobile(false);
      setHideProfileDetails(false);
      setIsShowClickFresh(true);
    } else if (window.innerWidth <= 900) {
      setIsMobile(true);
      if (isShowClickFresh) setHideProfileDetails(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const setShowDetails = () => {
    // set this var so that when we contiue to zoom it
    // and details are shown, it doesnt hide it again for us
    setIsShowClickFresh(false);
    setHideProfileDetails(!hideProfileDetails);
  };

  return (
    <div className="sideBarContainer">
      <SideBarProfile hideProfileDetails={hideProfileDetails}></SideBarProfile>

      <SideBarHashTags></SideBarHashTags>

      {isMobile && (
        <div className="showMoreSection" onClick={() => setShowDetails()}>
          {hideProfileDetails ? (
            <>
              Show More <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </>
          ) : (
            <>
              Show Less <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default SideBar;
