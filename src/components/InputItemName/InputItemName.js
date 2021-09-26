import React, { useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addItem } from "../DisplayItems/displayItemsSlice";

const InputItemName = () => {
  const itemList = useSelector((state) => state.addItem.value);
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('itemList = ' + itemList)
    // Resets the input field after adding item
    document.getElementById("input-item").value = null;
    // Check if item is already on the list
    (itemList.find(item => item.name === name))
      ? alert(`${name} is already on your list`)
      : dispatch(addItem(name))
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
