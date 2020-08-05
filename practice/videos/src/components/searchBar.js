import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onInputChange = (event) => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = (e) => {
		e.preventDefault();

		// TODO: Make sure we call
		// callback from parent component
		this.props.onFormSubmit(this.state.term);
	};

	render() {
		return (
			<div className='search-bar ui segment'>
				<form onSubmit={this.onFormSubmit} className='ui form'>
					<label>Video Search</label>
					<input
						className='field'
						type='text'
						placeholder='Search video...'
						value={this.state.term}
						onChange={this.onInputChange}
					/>
				</form>
			</div>
		);
	}
}
export default SearchBar;
