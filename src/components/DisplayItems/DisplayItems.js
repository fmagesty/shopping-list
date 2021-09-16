// import React from "react";
import React from "react";
import Counter from "../Counter/Counter";
import CheckCircle from "../CheckCircle/CheckCircle";
import AddPrice from '../AddPrice/AddPrice'
import "./styles.css";
import { useSelector } from "react-redux";

const DisplayItems = () => {
  const itemNames = useSelector((state) => state.inputItemName.value);

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
            <AddPrice item={name}/>
          </div>
        ))}
      <p id="total-price">
        Total price: todo
      </p>
    </div>
  );
};

export default DisplayItems;

// "bi bi-check-circle";
// "bi-circle";
