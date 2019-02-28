import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends React.Component{
	
	onSubmit = (formValues) => {
		
		this.props.onSubmit(formValues);
	}

	render(){
		return(
				<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<div className='ui action input fluid'>
						<Field name='search' component='input' type='text' />
						<button className='ui button'>Search</button>
					</div>
				</form>
			);
	}

};

export default reduxForm({
	form:'searchBar'
})(SearchBar);