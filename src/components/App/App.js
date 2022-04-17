import React from 'react';
import './styles.css';
import DisplayItems from '../DisplayItems/DisplayItems';
import InputItemName from '../InputItemName/InputItemName';
import Header from '../Header/Header';

const App = () => {
	return (
		<>
			<Header />
			<InputItemName />
			<DisplayItems />
		</>
	);
};

export default App;
