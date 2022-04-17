import React from 'react';
import { useSelector } from 'react-redux';

export const TotalPrice = () => {
	let totalPrice = 0;
	const itemList = useSelector((state) => state.addItem.itemList);
	itemList.map((item) => (totalPrice += item.price * item.counter));

	return (
		<>
			<p id="total-price">
				Total price:
				{totalPrice.toLocaleString('en-us', {
					style: 'currency',
					currency: 'USD'
				})}
			</p>
		</>
	);
};
