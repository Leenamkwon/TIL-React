import React from 'react';
import SearchBar from './SearchBar';
import youtube from './youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [], selectVideo: null };

  onTermSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({ videos: res.data.items });
  };

  onVideoSelect = async (video) => {
    this.setState({ selectVideo: video });
    console.log(this.state.selectVideo);
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onTermSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
