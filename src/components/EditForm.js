import React from 'react';
import { Field, reduxForm } from 'redux-form';

class EditForm extends React.Component{
	
	onSubmit = (formValues) => {
		this.props.onEditSubmit(formValues);
	}

	formRender(props){
		return(
				<form onSubmit={this.props.handleSubmit(this.onSubmit)} >	
						<Field 
							name={`${this.props.title}`}
							component='textarea'
							type='text'
							
						/> 
						<button className='ui blue button'>Submit</button>
				</form>
		);		
	}


	render(){
		return(
				<div className='ui form'>
					<div className='inline field'>
						{this.formRender()}		
						
					</div>
				</div>
		);
	}
}

export default reduxForm({
	form:'editForm'
})(EditForm);