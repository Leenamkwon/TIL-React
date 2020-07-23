import React from 'react';
import Accordion from './components/Accordion';
import './components/Accordion.css';

const items = [
	{
		title: 'What is React?',
		content: 'React is a front end javascript framework',
		id: 0,
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite JS ',
		id: 1,
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components',
		id: 2,
	},
];

export default () => {
	return (
		<div>
			<Accordion items={items}></Accordion>
		</div>
	);
};
