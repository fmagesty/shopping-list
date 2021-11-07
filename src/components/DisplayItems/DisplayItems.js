// import React from "react";
import React from "react";
import Counter from "../Counter/Counter";
import CheckCircle from "../CheckCircle/CheckCircle";
import AddPrice from "../AddPrice/AddPrice";
import "./styles.css";
import { useSelector } from "react-redux";

const DisplayItems = () => {
  const itemList = useSelector((state) => state.addItem.itemList);

  return (
    <div id="item-div">
      {console.log(itemList)}
      {itemList &&
        itemList.map((item) => (
          <div key={item.name}>
            <CheckCircle product={item.name} />
            <span id={item.name} className="item-name">
              {item.name}
            </span>
            <Counter itemName={item.name} />
            <AddPrice />
          </div>
        ))}
      <p id="total-price">Total price: todo</p>
      <ul>
        {itemList &&
          itemList.map((item) => (
            <li>
              {item.name}--{item.price}--{item.price}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DisplayItems;

// "bi bi-check-circle";
// "bi-circle";
