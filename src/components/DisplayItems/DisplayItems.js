// import React from "react";
import React from "react";
import Counter from "../Counter/Counter";
import CheckCircle from "../CheckCircle/CheckCircle";
import AddPrice from '../AddPrice/AddPrice'
import "./styles.css";
import { useSelector } from "react-redux";

const DisplayItems = () => {
  const itemNames = useSelector((state) => state.inputItemName.value);
  const allItems = useSelector((state) => state.allItems.value);

  return (
    <div id="item-div">
      {itemNames &&
        itemNames.map((name) => (
          <div key={name}>
            <CheckCircle product={name} />
            <span id={name} className="item-name">
              {name}
            </span>
            <Counter />
            <AddPrice itemName={name}/>
          </div>
        ))}
      <p id="total-price">
        Total price: todo
      </p>
        <ul>{allItems && allItems.map((item) => <li>{item.itemName}--{item.price}--{item.price}</li>)}</ul>
    </div>
  );
};

export default DisplayItems;

// "bi bi-check-circle";
// "bi-circle";
