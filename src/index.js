import React, { Component} from 'react';     // used to create and manage our components
import ReactDOM from 'react-dom';            // used to interact with the DOM 
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

//google api youtube key.
const API_KEY = 'AIzaSyCT4dWWcZY9dI5kesJN3NkG7YPY3EebHk0';

class App extends Component {
	constructor(props) {
		super(props);

		//This sets all the info you reviewed from the api call below to the state.
		this.state ={ 
			videosArray: [], 
			selectedVideo: null
		};

		//this is a call back --- call the api and sets the info to state.
		YTSearch({key: API_KEY, term: 'reactjs'}, (videosArray) => {	  		
			this.setState({
				videosArray: videosArray,
				selectedVideo: videosArray[0]

			});  
		});	
		// this line gives you the ability to set the bind(this) here instead of doing it in the tag in line 75.
		//Example of the tag line 76 with this line added:  onVideoSelect={this.onVideoSelect} 
		this.onVideoSelect = this.onVideoSelect.bind(this);
	}

	//So due to this being a class... this would be the way you define a function.
	//line 61 the reason to bind(this) is because component owns setState so in order to pass the scope to next child you need to bind.
	//THIS IS EXAMPLE OF A METHOD THAT SITS OUTSIDE OF YOUR TAG.  
	//Example fo the tag line 76 with this method and line 50 omitted:  onVideoSelect={this.onVideoSelect.bind(this)}
	onVideoSelect(selectedVideo){  
		console.log(selectedVideo)
  		return 	this.setState({selectedVideo: selectedVideo });   		
  	}

	render() {
		//Example of how to have method live with the render function and clean up a bit from the tag. 
		//You will need to bind(this) because of the set state but will be no need for use of the this in (this.onVideoSelect)
		// example of the tag line 76 with this method:  onVideoSelect2={onVideoSelect.bind(this)}
		const onVideoSelect2 = (selectedVideo) => {
			return 	this.setState({selectedVideo: selectedVideo });   	
		};
		
		return (
		<div> 
			<SearchBar />
			<VideoDetail frameVideo={this.state.selectedVideo} />
			<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videosArray} />
		</div>
		);	
  	}

}

//Take this coponenent's generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));  