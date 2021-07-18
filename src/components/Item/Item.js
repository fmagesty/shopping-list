import React from "react";
import Counter from "../Counter/Counter";
import SelectCategory from "../SelectCategory/SelectCategory";
import "./styles.css";
import { useSelector } from "react-redux";

const Item = () => {
  const input = useSelector((state) => state.inputItem.value);

  const handleClick = (e) => {
    e.target.classList.toggle("strikeThrough");
  };

  return (
    <div id="item-div">
      {input &&
        input.map((item) => (
          <div key={item}>
            <span id="item-name" onClick={handleClick}>
              {item}
            </span>
            <Counter />
            <SelectCategory />
          </div>
        ))}
    </div>
  );
};

export default Item;
