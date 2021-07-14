import React from "react";
import Counter from "../Counter/Counter";
import SelectCategory from "../SelectCategory/SelectCategory";
import "./styles.css";
import { useSelector } from "react-redux";

const Item = () => {
  const data = useSelector((state) => state.inputItem.value);

  return (
    <div id="item-div">
      {data &&
        data.map((item) => (
          <div key={item}>
            <span id="item-name">{item}</span>
            <Counter />
            <SelectCategory />
          </div>
        ))}
    </div>
  );
};

export default Item;
