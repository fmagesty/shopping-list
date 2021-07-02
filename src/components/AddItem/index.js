import React, { useState } from "react";
import "./styles.css";

const AddItem = () => {
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
    // Resets the input field after addind it
    document.getElementById("add-item").value = null;
  };

  return (
    <form onSubmit={handleSubmit} id="item-form">
      <label>
        Add item:
        <input
          type="text"
          name="add-item"
          id="add-item"
          placeholder="item name"
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddItem;
