import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import {
  addCurrentItemName,
  removeItem,
} from "../DisplayItems/displayItemsSlice";

export default function RemoveItem(itemName) {
  const dispatch = useDispatch();
  itemName = itemName.itemName;

  const handleClick = (itemName) => {
    dispatch(addCurrentItemName(itemName));
    dispatch(removeItem(itemName));
  };

  return (
    <i
      className="bi bi-trash"
      id="remove-icon"
      onClick={() => handleClick(itemName)}></i>
  );
}
