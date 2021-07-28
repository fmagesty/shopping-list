import React, { useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { allItems } from "./inputItemSlice";

const InputItem = () => {
  const [item, setItem] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(allItems(item));
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
