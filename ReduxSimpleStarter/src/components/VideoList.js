import React, {Component} from 'react';

export default class VideoList extends Component{
	render(){
		return(
			<div className='videoList col-md-4 list-group'>
				<ul className='col-md-10 col-md-offset-1'>
					{this.props.videos.map(vid=>{
						console.log(vid)
						return (<li key={vid.etag}>
							<h1>{vid.snippet.title}</h1>
							<p>{vid.snippet.description}</p>
							<img src={vid.snippet.thumbnails.default.url}/>
						</li>)
					})}
				</ul>
			</div>
		)
	}
}