import React, { useEffect, useRef } from "react";
import "./ProductMenu.css";
import CloseIcon from "@material-ui/icons/Close";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

function ProductMenu({ isOpenAnimation, onblurActionFunction }) {
  const productRef = useRef();

  useEffect(() => {
    if (isOpenAnimation) productRef.current.focus();
  }, [isOpenAnimation]);

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
        onBlur={onblurActionFunction}
        tabIndex="0"
        ref={productRef}
      >
        <CloseIcon></CloseIcon>
        <div className="productAppsContainer">
          <h6>Visit More LinkedIn Products</h6>
          <div className="appTileContainer">
            <div className="productTile">
              <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
              <p>Learning</p>
            </div>
            <div className="productTile">
              <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
              <p>Learning</p>
            </div>
            <div className="productTile">
              <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
              <p>Learning</p>
            </div>
            <div className="productTile">
              <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
              <p>Learning</p>
            </div>
            <div className="productTile">
              <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
              <p>Learning</p>
            </div>
            <div className="productTile">
              <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
              <p>Learning</p>
            </div>
            <div className="productTile">
              <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
              <p>Learning</p>
            </div>
            <div className="productTile">
              <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
              <p>Learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductMenu;
