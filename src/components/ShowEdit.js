import React from 'react';
import EditForm from './EditForm';
import { connect } from 'react-redux';
import { submitEdit } from '../actions';

class ShowEdit extends React.Component{

	state ={
		toggleEdit: true
	}
	
	onEditSubmit = (formValues) => {
		console.log(formValues[this.props.title])
		this.props.submitEdit(this.props.title, formValues[this.props.title])
	}


	handleEditClick = () => {
		if(this.state.toggleEdit){
			this.setState({
				toggleEdit: false
			})
		}else{
			this.setState({
				toggleEdit: true
			})
		}
		console.log(this.state.toggleEdit)
	}

	renderEditButton(){
		return(
				<button 
				className='ui yellow button'
				onClick={() => this.handleEditClick()}>
					Edit
				</button>
		)
	}

	renderStateTrue(){
		return(
			<div>
			{this.props.editText[this.props.title]}
			</div>
		)
	}

	renderWhenFalse(props){
		return(
			<div>
			<EditForm title={this.props.title} onEditSubmit={this.onEditSubmit} />
			<button onClick={() => this.handleEditClick()} className='ui blue button'>Cancel</button>
			</div>
		);
	}


	render(){
		if(!this.state.toggleEdit){
			return(
				<div>
					{this.renderWhenFalse()}
					{console.log('it worked')}
				</div>
			);
		}

		else{
			return(
				<div>
				{this.renderEditButton()}
				{this.renderStateTrue()}
				</div>
			);
		}

	}
}

const mapStateToProps = (state) => {
	return{
		editText: state.edit
	}
}


export default connect(mapStateToProps, { submitEdit })(ShowEdit);