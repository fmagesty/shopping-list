import React from "react";
import Counter from "../Counter/Counter";
import "./styles.css";
import { useSelector } from "react-redux";

const Item = () => {
  const data = useSelector((state) => state.inputItem.value);
  const mapData = data.map((item) => item);
  console.log(mapData);
  return (
    <div id="item">
      {data &&
        data.map((item) => (
          <p key={item}>
            {item}
            <Counter />
          </p>
        ))}
    </div>
  );
};

export default Item;
