import React from "react";
import "./styles.css";
import Item from "../Item/Item";

const Category = () => {
  return (
    <div id="category">
      <div>
        <h1>I'm category 1</h1>
      </div>
      <div>
        <h1>I'm category 2</h1>
      </div>
      <div>
        <h1>I'm category 3</h1>
      </div>
      <div>
        <h1>I'm category 4</h1>
      </div>
      <Item />
    </div>
  );
};

export default Category;
