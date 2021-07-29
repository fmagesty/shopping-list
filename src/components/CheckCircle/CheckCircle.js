import React, { useState } from "react";
import "./styles.css";

const CheckCircle = ({ product }) => {
  const [item, setItem] = useState([{ itemName: product, isSelected: false }]);

  console.log(item);

  const handleClick = (item) => {
    document.getElementById(item.itemName).classList.toggle("strikeThrough");
    setItem([{ itemName: product, isSelected: !item.isSelected }]);
  };

  return (
    <>
      {item &&
        item.map((item) =>
          item.isSelected ? (
            <i
              className="bi bi-check-circle"
              onClick={() => handleClick(item)}
            ></i>
          ) : (
            <i className="bi-circle" onClick={() => handleClick(item)}></i>
          )
        )}
    </>
  );
};

export default CheckCircle;
