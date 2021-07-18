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
      <button>
        <i className="bi bi-dash-lg" onClick={() => decrement()}></i>
      </button>

      <span id="counter">{count}</span>
      <button>
        <i className="bi bi-plus-lg" onClick={() => setCount(count + 1)}></i>
      </button>
    </>
  );
};

export default Counter;
