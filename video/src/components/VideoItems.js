import React from 'react';
import './videoItem.css';

const maxText = (text) => {
  if (text.length > 90) {
    let split = text.split(' ');
    const empty = [];
    split.reduce((acc, val) => {
      if (acc < 65) {
        empty.push(val);
      }
      return acc + val.length;
    }, 0);
    return `${empty.join(' ')}....`;
  } else {
    return text;
  }
};

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className='item video-item'
      data-id={video.id.videoId}
      onClick={() => onVideoSelect(video)}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        className='ui image'
        alt={video.snippet.title}
      />
      <div className='content'>
        <div className='header'>{maxText(video.snippet.title)}</div>
      </div>
    </div>
  );
};

export default VideoItem;
