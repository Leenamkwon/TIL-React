import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, title }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onbodyClick = (e) => {
			if (ref.current.contains(e.target)) {
				return;
			}
			setOpen(false);
		};

		document.body.addEventListener('click', onbodyClick);

		return () => {
			document.body.removeEventListener('click', onbodyClick);
		};
	}, []);

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}

		return (
			<div
				key={option.value}
				className='item'
				onClick={() => {
					onSelectedChange(option);
				}}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={ref} className='ui form'>
			<div className='field'>
				<label className='label'>Select {title}</label>
				<div
					onClick={() => setOpen(!open)}
					className={`ui selection dropdown ${
						open ? 'visible active' : ''
					}`}
				>
					<i className='dropdown icon'></i>
					<div className='text'>{selected.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
