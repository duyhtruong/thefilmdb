import React from 'react';
import { deleteFavorite } from '../actions';
import { connect } from 'react-redux';

class DeleteFavorites extends React.Component{
	
	renderHelper (props) {
		return (
			<div>
					<button
						onClick={() => this.props.deleteFavorite(this.props.title)}
						className='ui red  button'>
						Remove from Favorites 
					</button>
				</div>
				)
		
	}

	render(){
		return(
			<div>
				{this.renderHelper()}
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		favoritesList: state.addFavorite 
	}
}

export default connect(mapStateToProps, { deleteFavorite })(DeleteFavorites)