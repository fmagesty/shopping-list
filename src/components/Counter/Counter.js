import React, { useState } from "react";
import "./styles.css";

const Counter = () => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 1) {
      return setCount(count - 1);
    }
  };

  return (
    <span id="counter">
      <i className="bi bi-dash-circle" onClick={() => decrement()}></i>

      <span id="counter">{count}</span>

      <i className="bi-plus-circle" onClick={() => setCount(count + 1)}></i>
    </span>
  );
};

export default Counter;
