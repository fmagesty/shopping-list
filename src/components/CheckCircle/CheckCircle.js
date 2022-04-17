import React, { useState } from 'react';
import './styles.css';

const CheckCircle = (itemName) => {
  itemName = itemName.itemName;
  const [item, setItem] = useState([{ itemName: itemName, isSelected: false }]);

  const handleClick = (item) => {
    document.getElementById(item.itemName).classList.toggle('strikeThrough');
    setItem([{ itemName: itemName, isSelected: !item.isSelected }]);
  };

  return (
    <>
      {item &&
        item.map((item) =>
          item.isSelected ? (
            <i key={item} className="bi bi-check-circle" onClick={() => handleClick(item)}></i>
          ) : (
            <i key={item} className="bi-circle" onClick={() => handleClick(item)}></i>
          )
        )}
    </>
  );
};

export default CheckCircle;
