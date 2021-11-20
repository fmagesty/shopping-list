import React from "react";
import "./styles.css";

export default function ItemName(itemName) {
  itemName = itemName.itemName;
  return (
    <span
      id={itemName}
      className="item-name"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, red 100%)",
      }}>
      {itemName}
    </span>
  );
}
