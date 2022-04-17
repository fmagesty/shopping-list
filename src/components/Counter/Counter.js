import React, { useState, useEffect } from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { addCounter, addCurrentItemName } from '../DisplayItems/displayItemsSlice';

const Counter = (itemName) => {
	const dispatch = useDispatch();
	const [count, setCount] = useState(1);
	itemName = itemName.itemName;

	const handleClick = (countModifier) => {
		if (count === 1 && countModifier === -1) {
			return count;
		}
		setCount(count + countModifier);
	};
	useEffect(() => {
		dispatch(addCurrentItemName(itemName));
		dispatch(addCounter(count));
	}, [count, dispatch, itemName]);

	return (
		<span id="counter">
			<i className="bi bi-dash-circle" onClick={() => handleClick(-1)}></i>
			<span id="counter">{count}</span>
			<i className="bi-plus-circle" onClick={() => handleClick(+1)}></i>
		</span>
	);
};

export default Counter;
