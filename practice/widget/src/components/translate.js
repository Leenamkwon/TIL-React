import React, { useState } from 'react';
import Dropdown from './SelectColor';

const options = [
	{
		label: 'Afrikaans',
		value: 'af',
	},
	{
		label: 'Arabic',
		value: 'ar',
	},
	{
		label: 'Hindi',
		value: 'hi',
	},
];

const Translate = ({ title }) => {
	const [language, setLanguage] = useState(options[0]);

	return (
		<div>
			<Dropdown
				title={title}
				options={options}
				selected={language}
				onSelectedChange={setLanguage}
			></Dropdown>
		</div>
	);
};

export default Translate;
