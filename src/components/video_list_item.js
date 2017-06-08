import React from 'react';

const VideoListItem = (props) => {
	//console.log(props);
	const video = props.video;
	const onVideoSelect = props.onVideoSelect;
	const image_url = props.video.snippet.thumbnails.default.url;
	const video_heading = props.video.snippet.title;


	return (
		 <li onClick={() => onVideoSelect(video)} className="list-group-item"> 
		 	<div className="video-list media">
		 		<div className="media-left">
		 			<img className="media-object" src={image_url} />
		 		</div>
		 	</div>

		 	<div className="media-body">
		 		<div className="media-heading"> {props.video.snippet.title} </div>
		 	</div>

		 </li>

	);
};

export default VideoListItem;

