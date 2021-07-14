import React, { useState } from "react";
import Counter from "../Counter/Counter";
import SelectCategory from "../SelectCategory/SelectCategory";
import "./styles.css";
import { useSelector } from "react-redux";

const Item = () => {
  const data = useSelector((state) => state.inputItem.value);

  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item} id="item-div">
            <span id="item">{item}</span>
            <Counter />
            <SelectCategory />
          </div>
        ))}
    </div>
  );
};

export default Item;
