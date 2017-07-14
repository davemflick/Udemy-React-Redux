import React, {Component} from 'react';


export default class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {term: ''};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(term){
		this.setState({term})
		this.props.searchTerm(term);
	}

	render(){
		return(
			<div className='search-bar'>
				<form className='form-group'>
					<input 
					value={this.state.term}
					onChange={e=> this.handleInputChange(e.target.value)}
					type='search' 
					className='form-control' 
					placeholder='Search Youtube' />
				</form>
			</div>
		);
	}
}