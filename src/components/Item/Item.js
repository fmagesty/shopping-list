// import React from "react";
import React from "react";
import Counter from "../Counter/Counter";
import SelectCategory from "../SelectCategory/SelectCategory";
import CheckCircle from "../CheckCircle/CheckCircle";
import "./styles.css";
import { useSelector } from "react-redux";

const Item = () => {
  const input = useSelector((state) => state.inputItem.value);

  return (
    <div id="item-div">
      {input &&
        input.map((item) => (
          <div key={item}>
            <CheckCircle product={item} />
            <span id={item}>{item}</span>
            <Counter />
            <SelectCategory />
          </div>
        ))}
    </div>
  );
};

export default Item;

// "bi bi-check-circle";
// "bi-circle";
