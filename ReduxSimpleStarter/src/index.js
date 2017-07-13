import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAHS8aTiIoigjKti5lZfeMZI7VIvqa3JcM'



class App extends Component {
	constructor(props){
		super(props);
		this.state ={
			videos: []
		};
		YTSearch({key: API_KEY, term: 'Surfers'}, (videos)=>{
			this.setState({videos});
		});
	}

	render() {
	  return (
	    <div>
	     <SearchBar />
	     <VideoList videos={this.state.videos} />
	    </div>
	  );
  }
}

//API KEY AIzaSyAHS8aTiIoigjKti5lZfeMZI7VIvqa3JcM

ReactDOM.render( <App /> ,document.querySelector('.container'))