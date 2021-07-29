import React from "react";
import "./styles.css";

const CheckCircle = ({ item }) => {
  const handleClick = (item) => {
    document.getElementById(item).classList.toggle("strikeThrough");
  };

  return (
    <>
      {item.isSelected ? (
        <i className="bi bi-check-circle" onClick={() => handleClick(item)}></i>
      ) : (
        <i className="bi-circle" onClick={() => handleClick(item)}></i>
      )}
    </>
  );
};

export default CheckCircle;
