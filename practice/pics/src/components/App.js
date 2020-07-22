import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './Searchbar';
import ImageList from './ImageList';

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		const res = await unsplash(`/search/photos`, {
			params: { query: term },
		});

		this.setState({ images: res.data.results });
	};

	render() {
		return (
			<div className='ui container' style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
				Found: {this.state.images.length} images
				<ImageList images={this.state.images}></ImageList>
			</div>
		);
	}
}

export default App;
