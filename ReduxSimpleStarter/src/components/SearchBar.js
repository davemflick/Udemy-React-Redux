import React, {Component} from 'react';


export default class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {term: ''};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e){
		this.setState({term: e.target.value})
	}

	render(){
		return(
			<div>
				<form className='form-group'>
					<label>Search</label>
					<input 
					value={this.state.term}
					onChange={this.handleInputChange}
					type='search' 
					className='form-control' 
					placeholder='Search Youtube' />
				</form>
			</div>
		);
	}
}