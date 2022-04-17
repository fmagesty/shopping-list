import React, { useState } from "react";
import "./styles.css";

const SelectCategory = () => {
	const [category, setCategory] = useState("");

	const handleChange = (e) => {
		setCategory(e.target.value);
	};

	return (
		<>
			<select value={category} onChange={handleChange} className="category-dropdown">
				<option value="category-1">Category 1</option>
				<option value="category-2">Category 2</option>
				<option value="category-3">Category 3</option>
				<option value="category-4">Category 4</option>
			</select>
			<input type="text" name="input-category" id="input-category" placeholder="Add new category" onChange={handleChange} />
			<button type="submit">Add category</button>
		</>
	);
};

export default SelectCategory;
