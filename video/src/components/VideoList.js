import React from 'react';
import VideoItem from './VideoItems';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        video={video}
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  const getVideoID = (e) => {
    const id = e.target.closest('.video-item').dataset.id;
    if (e.target.matches('.video-item, .video-item *')) {
      console.log(id);
    }
  };

  return (
    <div className='ui relaxed divided list' onClick={getVideoID}>
      {renderedList}
    </div>
  );
};

export default VideoList;
