import React, {Component} from 'react';
import VideoListItem from './VideoListItem';

export default class VideoList extends Component{

	videoItems(){
		return this.props.videos.map(vid=>{
			return <VideoListItem 
						key={vid.etag} 
						video={vid}
						onVideoSelect={this.props.onVideoSelect} />
		})
	} 

	render(){
		return(
			<div className='videoList col-md-4 list-group'>
				<ul className='col-md-10 col-md-offset-1'>
					{this.videoItems()}
				</ul>
			</div>
		)
	}
}