import React from "react";
import "./ProductMenu.css";

function ProductMenu({ isOpenAnimation }) {
  return (
    <div>
      <div
        className={
          "overlay " + (isOpenAnimation ? "fadeInOverlay" : "fadeOutOverlay")
        }
      ></div>
      <div
        className={
          "productMenuContainer " + (isOpenAnimation ? "slideIn" : "slideOut")
        }
      >
        123
      </div>
    </div>
  );
}

export default ProductMenu;
