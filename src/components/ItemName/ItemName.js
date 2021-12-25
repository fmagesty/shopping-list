import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

export default function ItemName(itemName) {
  const itemList = useSelector((state) => state.addItem.itemList);
  itemName = itemName.itemName;

  const currentItem = itemList.find((item) => item.name === itemName);
  let selectedColor = currentItem.color;

  const handleEditItemName = () => {
    console.log('this is handle edititemname')
  }


  return (
    <>

    <span
      id={itemName}
      className="item-name"
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, ${selectedColor} 100%)`,
      }}
      >
      {itemName}
    </span>
    <i className="bi bi-pencil" onClick={() => handleEditItemName()}></i>
    </>
  );
}
