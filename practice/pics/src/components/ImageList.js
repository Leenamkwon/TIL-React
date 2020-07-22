import React from 'react';

const ImagesList = (props) => {
	const images = props.images.map((image, index) => {
		return <img key={index} src={image.urls.small} alt='' />;
	});

	return <div>{images}</div>;
};

export default ImagesList;
