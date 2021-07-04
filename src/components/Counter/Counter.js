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
    <>
      <button
        aria-label="Decrement value"
        onClick={() => decrement()}
        id="decrement"
      >
        -
      </button>
      <span id="counter">{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => setCount(count + 1)}
        id="increment"
      >
        +
      </button>
    </>
  );
};

export default Counter;
