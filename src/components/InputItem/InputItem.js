import React, { useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { allItems } from "./inputItemSlice";
import { useSelector } from "react-redux";

const InputItem = () => {
  const [item, setItem] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const input = useSelector((state) => state.inputItem.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Resets the input field after adding it
    document.getElementById("input-item").value = null;
    // Check if item is already on the list
    input.includes(item)
      ? alert(`Sorry but ${item} is already on the list`)
      : dispatch(allItems(item));
    console.log(item);
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

export default InputItem;
