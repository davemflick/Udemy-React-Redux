import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyAHS8aTiIoigjKti5lZfeMZI7VIvqa3JcM'



class App extends Component {
	constructor(props){
		super(props);
		this.state ={
			videos: [],
			selectedVideo: null
		};
		YTSearch({key: API_KEY, term: 'Surfers'}, (videos)=>{
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
	  return (
	    <div>
	     <SearchBar />
	     <VideoDetail video={this.state.selectedVideo} />
	     <VideoList 
	     	videos={this.state.videos}
	     	onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
	    </div>
	  );
  }
}

//API KEY AIzaSyAHS8aTiIoigjKti5lZfeMZI7VIvqa3JcM

ReactDOM.render( <App /> ,document.querySelector('.container'))