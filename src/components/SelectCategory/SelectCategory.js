import React, { useState } from "react";

const SelectCategory = () => {
  const [category, setCategory] = useState("category-1");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <select value={category} onChange={handleChange}>
      <option value="category-1">Category 1</option>
      <option value="category-2">Category 2</option>
      <option value="category-3">Category 3</option>
      <option value="category-4">Category 4</option>
    </select>
  );
};

export default SelectCategory;
