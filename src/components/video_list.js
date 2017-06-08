import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

	const videoItems = props.videos.map((video_itm) => {
		return (
			 <VideoListItem 
			    onVideoSelect={props.onVideoSelect}
			 	key={video_itm.etag} 
			 	video={video_itm}  />
		);	 
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};


export default VideoList;