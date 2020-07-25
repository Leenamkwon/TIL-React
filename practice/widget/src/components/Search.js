import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);

	useEffect(() => {
		const search = async () => {
			const {data} = await axios.get(
				'https://en.wikipedia.org/w/api.php',
				{
					params: {
						action: 'query',
						list: 'search',
						origin: '*',
						format: 'json',
						srsearch: term,
					},
				}
			);

			setResults(data.query.search);
		};
		if (term) {
			search();
		}
	}, [term]);

	const renderedResults = results.map((results) => {
		return (
			<div className='item' key={results.pageid}>
				<div className='right floated content'>
					<a
						className='ui button'
						href={`https://en.wikipedia.org?curid=${results.pageid}`}
					>
						Go
					</a>
				</div>
				<div className='content'>
					<div className='header'>{results.title}</div>
					<span
						dangerouslySetInnerHTML={{__html: results.snippet}}
					></span>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className='ui form'>
				<div className='field'>
					<label>Enter Search Term</label>
					<input
						type='text'
						className='input'
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</div>
			<div className='ui celled list'>{renderedResults}</div>
		</div>
	);
};

export default Search;