// import React from "react";
import React from "react";
import Counter from "../Counter/Counter";
import CheckCircle from "../CheckCircle/CheckCircle";
import AddPrice from '../AddPrice/AddPrice'
import "./styles.css";
import { useSelector } from "react-redux";

const DisplayItems = () => {
  const allItems = useSelector((state) => state.allItems.value);

  return (
    <div id="item-div">
      {allItems &&
        allItems.map((item) => (
          <div key={item.name}>
            <CheckCircle product={item.name}/>
            <span id={item.name} className="item-name">
              {item.name}
            </span>
            <Counter />
            <AddPrice name={item.name}/>
          </div>
        ))}
      <p id="total-price">
        Total price: todo
      </p>
        <ul>{allItems && allItems.map((item) => <li>{item.name}--{item.price}--{item.price}</li>)}</ul>
    </div>
  );
};

export default DisplayItems;

// "bi bi-check-circle";
// "bi-circle";
