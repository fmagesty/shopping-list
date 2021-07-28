// import React from "react";
import React from "react";
import Counter from "../Counter/Counter";
import SelectCategory from "../SelectCategory/SelectCategory";
import "./styles.css";
import { useSelector } from "react-redux";

const Item = () => {
  const input = useSelector((state) => state.inputItem.value);

  const handleClick = (item) => {
    document.getElementById(item).classList.toggle("strikeThrough");
  };

  return (
    <div id="item-div">
      {input &&
        input.map((item) => (
          <div key={item}>
            <i className="bi-circle" onClick={() => handleClick(item)}></i>
            <span id={item}>{item}</span>
            <Counter />
            <SelectCategory />
          </div>
        ))}
    </div>
  );
};

export default Item;
