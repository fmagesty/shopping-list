import React, { useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { allItems } from "./inputItemSlice";

const InputItem = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newItem = {
      itemName: e.target.value,
      isSelected: false,
    };
    setItems(newItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(allItems(items));
    // Resets the input field after adding it
    document.getElementById("input-item").value = null;
  };
  return (
    <form onSubmit={handleSubmit} id="item-form">
      <label>
        Enter the item name:
        <input
          type="text"
          name="input-item"
          id="input-item"
          placeholder="item name"
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="OK" />
    </form>
  );
};

export default InputItem;
