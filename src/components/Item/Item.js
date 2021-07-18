import React, { useState } from "react";
import Counter from "../Counter/Counter";
import SelectCategory from "../SelectCategory/SelectCategory";
import "./styles.css";
import { useSelector } from "react-redux";

const Item = () => {
  const input = useSelector((state) => state.inputItem.value);
  const [toggle, setToggle] = useState(false);

  const handleClick = (item) => {
    document.getElementById(item).classList.toggle("strikeThrough");
    setToggle(!toggle);
  };

  return (
    <div id="item-div">
      {input &&
        input.map((item) => (
          <div key={item}>
            <i
              className={`"bi-circle" ${
                toggle ? "bi-check-circle" : "bi-circle"
              }`}
              onClick={() => handleClick(item)}
            ></i>
            <span id={item}>{item}</span>
            <Counter />
            <SelectCategory />
          </div>
        ))}
    </div>
  );
};

export default Item;
