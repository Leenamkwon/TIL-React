import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

const list2 = [
	{
		title: 'accordion',
	},
	{
		title: 'sex',
	},
	{
		title: 'bombar',
	},
];

export default () => {
	const [widget, setWidget] = useState(null);
	const [dom, setdom] = useState(null);

	const render = (title) => {
		setWidget(title);

		if (widget === title) {
			return setdom(<Accordion items={items} />);
		} else {
			setdom(null);
		}
	};

	const list = list2.map((item, index) => (
		<span
			onClick={() => render(item.title)}
			key={item.title}
			style={{cursor: 'pointer', margin: '15px', padding: '100px'}}
		>
			{item.title}
		</span>
	));

	return (
		<div>
			{list}
			{dom}
			<Search></Search>
		</div>
	);
};
