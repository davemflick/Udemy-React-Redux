import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/VideoDetail';
import _ from 'lodash';

const API_KEY = 'AIzaSyAHS8aTiIoigjKti5lZfeMZI7VIvqa3JcM'



class App extends Component {
	constructor(props){
		super(props);
		this.state ={
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('ReactJS');
		
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos)=>{
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
	  const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300)

	  return (
	    <div>
	     <SearchBar searchTerm={videoSearch}/>
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