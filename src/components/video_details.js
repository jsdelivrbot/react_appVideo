import React from 'react';

const VideoDetail =(props) => {
//Here this.state.selectedVideo is delivered  through framvideo and you then traverse through the object to get the data you need.
	if(!props.frameVideo) {
		return <div>Loading</div>;
	}

	const videoId = props.frameVideo.id.videoId;
	const url = "https://www.youtube.com/embed/" + videoId;

   
	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>

			<div className="details">
				<div>{props.frameVideo.snippet.title}</div>
				<div>{props.frameVideo.snippet.description}</div>
			</div>
		</div>
	);

};

export default VideoDetail;