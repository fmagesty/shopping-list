import React from "react";
import Counter from "../../features/counter/Counter";
import "./styles.css";

const Item = () => {
  return (
    <div id="item">
      <span className="item-name">Arroz</span>
      <Counter />
    </div>
  );
};

export default Item;
