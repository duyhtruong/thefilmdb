import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

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
							placeholder={`${this.props.editText[this.props.title]}`}
							
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

const mapStateToProp = (state) => {
	return {
		editText: state.edit
	}
}

EditForm = connect (mapStateToProp)(EditForm);

export default reduxForm({
	form:'editForm'
})(EditForm);