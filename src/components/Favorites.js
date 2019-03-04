import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { Rating } from 'semantic-ui-react';
import DeleteFavorites from './DeleteFavorites';
import EditForm from './EditForm';
import ShowEdit from './ShowEdit'

class Favorites extends React.Component{

		


	renderHelper(){
		var imageBaseURL = "http://image.tmdb.org/t/p/w185";
		return (

			this.props.favoritesList.map((favorite) =>{
			
			return(
				<div key={favorite.title} className='item'>
					<h1 className='ui header'>{favorite.title}
					<div className='sub header'>{favorite.tagline}</div>
						</h1>
						
					<br/>
					<img 
						src={`${imageBaseURL}${favorite.poster}`}
						className='ui left floated image'
						alt=''
					/>				
					
					
					<Rating 
						icon='star' 
						defaultRating={favorite.rating} 
						maxRating={10} 
						size='huge'
						/>
					<div className="ui hidden divider"></div>

					{favorite.overview}
					<div className="ui hidden divider"></div>
				

					<div className='ui big black labels'>
					{favorite.genres.map(genre => {
						return (
							<div key={genre.name} className='ui label'>
								{genre.name}
							</div>
							);
					})}
					</div>
			
				
						Notes:
					
					
				
				


					<div className='ui hidden divider'></div>

					<DeleteFavorites title={favorite.title}/>
					<ShowEdit title={favorite.title} />
	


					
				
				</div>
			);
		})

		)	
	}


	render(){
		return(
			<div>
				<Header/>
				<div className='ui relaxed divided list'>
					{this.renderHelper()}
					
					
				</div>
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