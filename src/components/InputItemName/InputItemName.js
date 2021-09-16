import React, { useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { allNames } from "./inputItemNameSlice";
import { useSelector } from "react-redux";

const InputItemName = () => {
  const input = useSelector((state) => state.inputItemName.value);
  const [itemName, setItemName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setItemName(e.target.value);
    console.log('item names: ' + input)
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Resets the input field after adding item
    document.getElementById("input-item").value = null;
    // Check if item is already on the list
    input.includes(itemName)
      ? alert(`${itemName} is already on your list`)
      : dispatch(allNames(itemName));
  };

  return (
    <form onSubmit={handleSubmit} id="item-form">
      <label id="label">
        Enter the item name:
        <input
          type="text"
          name="input-item"
          id="input-item"
          placeholder="Item name"
          onChange={handleChange}
        />
      </label>
      <button id="submit-btn">
        <i className="bi bi-cart-plus" type="submit"></i>
      </button>
    </form>
  );
};

export default InputItemName;
