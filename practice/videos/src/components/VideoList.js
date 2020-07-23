import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
	const renderList = videos.map((video) => {
		return <VideoItem></VideoItem>;
	});

	return (
		<div>
			I have {videos} videos.
			<div>{renderList}</div>
		</div>
	);
};

export default VideoList;
