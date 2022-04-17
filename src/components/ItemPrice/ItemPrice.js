import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPrice, addCurrentItemName } from "../DisplayItems/displayItemsSlice";

export default function ItemPrice(itemName) {
	const dispatch = useDispatch();
	const [price, setPrice] = useState(0);
	const itemCounter = itemName.itemCounter;
	itemName = itemName.itemName;

	const handleChange = (e) => {
		setPrice(e.target.value);
	};

	useEffect(() => {
		dispatch(addCurrentItemName(itemName));
		dispatch(addPrice(price));
	}, [dispatch, itemName, price]);

	return (
		<>
			<input placeholder="Item price" type="number" onChange={handleChange} />
			<span>
				{(price * itemCounter).toLocaleString("en-us", {
					style: "currency",
					currency: "USD"
				})}
			</span>
		</>
	);
}
