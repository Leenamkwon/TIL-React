import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/SelectColor';
import Translate from './components/translate';

const items = [
	{
		title: 'What is React?',
		content: 'React is a front end javascript framework',
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite JS ',
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components',
	},
];

const options = [
	{
		label: 'The color red',
		value: 'red',
	},
	{
		label: 'The color Green',
		value: 'green',
	},
	{
		label: 'The color Blue',
		value: 'blue',
	},
];

export default () => {
	const [selected, setSelected] = useState(options[0]);
	const [showDropdown, setShowDropdown] = useState(true);

	return (
		<div>
			<button onClick={() => setShowDropdown(!showDropdown)}>
				Toggle Dropdown
			</button>
			{showDropdown ? (
				<Dropdown
					title={'color'}
					selected={selected}
					options={options}
					onSelectedChange={setSelected}
				></Dropdown>
			) : null}

			<Translate title={'language'}></Translate>
		</div>
	);
};
