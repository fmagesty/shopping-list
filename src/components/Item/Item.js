import React, { useState } from "react";
import Counter from "../Counter/Counter";
import "./styles.css";
import { useSelector } from "react-redux";

const Item = () => {
  const data = useSelector((state) => state.inputItem.value);
  const [category, setCategory] = useState("category-1");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  console.log(category);

  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item} id="item-div">
            <span id="item">{item}</span>
            <Counter />
            <select value={category} onChange={handleChange}>
              <option value="category-1">Category 1</option>
              <option value="category-2">Category 2</option>
              <option value="category-3">Category 3</option>
              <option value="category-4">Category 4</option>
            </select>
          </div>
        ))}
    </div>
  );
};

export default Item;
