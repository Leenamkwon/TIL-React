import React from 'react';
import SearchBar from './searchBar';
import Youtube from './api/Youtube';
import VideoList from './VideoList';

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
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
				<VideoList videos={this.state.videos}></VideoList>
			</div>
		);
	}
}

export default App;
