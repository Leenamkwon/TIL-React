import React from 'react';
import SearchBar from './SearchBar';
import youtube from './youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyD2cfClP8fqYDhK-J1b7ZtCO13c8sDR1RA';

class App extends React.Component {
  state = { videos: [], selectVideo: null };

  componentDidMount() {
    this.onTermSubmit('youtube');
  }

  onTermSubmit = async (term) => {
    try {
      const res = await youtube.get('/search', {
        params: {
          q: term,
          part: 'snippet',
          maxResults: 5,
          key: KEY,
          type: 'video',
        },
      });

      this.setState({ videos: res.data.items, selectVideo: res.data.items[0] });
    } catch (err) {
      console.log('할당량이 초과되었습니다.');
    }
  };

  onVideoSelect = (video) => {
    this.setState({ selectVideo: video });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
