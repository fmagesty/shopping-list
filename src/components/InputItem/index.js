import React, { useState } from "react";
import "./styles.css";

const InputItem = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState({});
  console.log(list);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
    setList(item);
    // Resets the input field after addind it
    document.getElementById("input-item").value = null;
  };
  return (
    <form onSubmit={handleSubmit} id="item-form">
      <label>
        I'm Input Item:
        <input
          type="text"
          name="input-item"
          id="input-item"
          placeholder="item name"
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default InputItem;
