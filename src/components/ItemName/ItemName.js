import React, {useState} from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { editItemName, addCurrentItemName } from "../DisplayItems/displayItemsSlice";

export default function ItemName(itemName) {
  itemName = itemName.itemName;
  const [isEditing, setIsEditing] = useState(false)
  const itemList = useSelector((state) => state.addItem.itemList);
  const dispatch = useDispatch();
  const currentItems = itemList.find((item) => item.name === itemName);
  let selectedColor = currentItems.color;

  const handleEditItemName = (itemName) => {
    setIsEditing(!isEditing)
    console.log('itemName = ' + itemName, 'isEditing = ' + isEditing)
    dispatch(addCurrentItemName(itemName));
    // itemList.find((item) => item.name === itemName)
    // ? console.log(1, itemList, itemName)
      // ? alert(`${itemName} is already on your list`)
      // : console.log(2, itemList, itemName)
      // : dispatch(editItemName('newname'));
        <input type="text"
        name="input-item"
        id="input-item"
        placeholder="Item name"
        onChange={handleChange} />
  }

  const handleChange = (e) => {
    itemName = e.target.value;
    console.log(itemName);
    setIsEditing(false)
    return itemName;
  }

  return (
    <>
    <span
      id={itemName}
      className="item-name"
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, ${selectedColor} 100%`,
      }}
      >
      {itemName}
    </span>
    <i className="bi bi-pencil" onClick={() => handleEditItemName(itemName)}></i>
    </>
  );
}