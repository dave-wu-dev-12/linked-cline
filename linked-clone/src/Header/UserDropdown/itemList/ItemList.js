import React from "react";
import "./ItemList.css";

function ItemList({ header, items }) {
  let itemListsHandle = null;
  itemListsHandle = items.map((item) => {
    return <p className="itemListText">{item}</p>;
  });

  return (
    <div className="dropdown__account">
      {header && <h5 className="itemListHeader">{header}</h5>}
      {itemListsHandle}
    </div>
  );
}

export default ItemList;
