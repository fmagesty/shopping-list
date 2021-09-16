import React, { useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { allItems } from "../DisplayItems/displayItemsSlice";

const InputItemName = () => {
  const itemList = useSelector((state) => state.allItems.value);
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(itemList, itemList.name)
    // Resets the input field after adding item
    document.getElementById("input-item").value = null;
    // Check if item is already on the list
    (itemList.find(names => names.name === name))
      ? alert(`${name} is already on your list`)
      : dispatch(allItems(name))
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
