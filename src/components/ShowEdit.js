import React from 'react';
import EditForm from './EditForm';
import { connect } from 'react-redux';
import { submitEdit } from '../actions';
import './index.css'

class ShowEdit extends React.Component{

	state ={
		toggleEdit: true
	}
	
	onEditSubmit = (formValues) => {
		console.log(formValues[this.props.title])
		this.props.submitEdit(this.props.title, formValues[this.props.title])
		this.handleEditClick();
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

	renderWhenTrue(){
		return(
				<button 
				className='ui yellow button'
				onClick={() => this.handleEditClick()}>
					Edit Notes
				</button>
		)
	}



	renderWhenFalse(props){
		return(
			<div className='editChoice'>
			<EditForm title={this.props.title} onEditSubmit={this.onEditSubmit} />
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
				{this.renderWhenTrue()}
			
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