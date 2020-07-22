import React from 'react';
import SearchBar from './searchBar';
import Youtube from './api/Youtube';

const KEY = 'AIzaSyD2cfClP8fqYDhK-J1b7ZtCO13c8sDR1RA';

class App extends React.Component {
	state = { videos: [] };

	onTermSubmit = async (term) => {
		const response = await Youtube.get('/search', {
			params: {
				q: term,
				part: 'snippet',
				maxResults: 10,
				type: 'video',
				key: KEY,
			},
		});

		this.setState({ videos: response.data.items });

		console.log(response);
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
				<div>I have {this.state.videos.length} videos.</div>
			</div>
		);
	}
}

export default App;
