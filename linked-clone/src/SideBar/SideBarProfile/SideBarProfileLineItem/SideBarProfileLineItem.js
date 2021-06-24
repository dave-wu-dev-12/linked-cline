import React from "react";
import "./SideBarProfileLineItem.css";

function SideBarProfileLineItem({ header, bodyText, count, Icon }) {
  return (
    <div className="itemContainer">
      <div className="profileViewItem" tabIndex="0">
        <div className="lineItemText">
          <p className="lineItemHeaderText">{header}</p>
          <div className="lineItemBodyTextContainer">
            {Icon && <Icon className="lineItemIcon"></Icon>}
            <p>{bodyText}</p>
          </div>
        </div>
        <p className="lineItemNumeric">{count}</p>
      </div>
    </div>
  );
}

export default SideBarProfileLineItem;
