import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectSong from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs,
  };
};

// 반드시 객체를 리턴 해야한다. SongList 컴포넌트에 props이 생김.
// reducer 파일에서 리턴한 객체를 연결해서 빼온 것임
export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);
