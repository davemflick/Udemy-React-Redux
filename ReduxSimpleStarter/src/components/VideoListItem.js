import React, {Component} from 'react';

export default class VideoListItem extends Component{


	render(){
		const video = this.props.video;
		const snippet = video.snippet;
		const imageURL = snippet.thumbnails.default.url;
		const onVideoSelect = this.props.onVideoSelect;
		return(
			<li className='list-group-item' onClick={()=> onVideoSelect(video)}>
				<div className='video-list media'>
					<div className='media-left'>
						<img className='media-object' src={imageURL} />
					</div>
					<div className='media-body'>
						<div className='media-heading'>{snippet.title}</div>
					</div>
				</div>
			</li>
		)
	}

}