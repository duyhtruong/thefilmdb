import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';

class Favorites extends React.Component{
	
	renderHelper(){
		
		return this.props.favoritesList.map(favorite =>{
			return(
				<div key={favorite}>
					{favorite}
				</div>
			);
		})
		
	}


	render(){
		return(
			<div>
				<Header/>
				{this.renderHelper()}
			</div>
			);
	}
}

	const mapStateToProps = (state) => {
		return{
			favoritesList: state.addFavorite
		};
	}


export default connect(mapStateToProps)(Favorites);