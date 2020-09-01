import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'one more time', duration: '3:04' },
    { title: 'radio active', duration: '4:03' },
    { title: 'controller', duration: '3:00' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

// store 안에 담겨 있음.
export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
