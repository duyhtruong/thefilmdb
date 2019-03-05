import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { Rating } from 'semantic-ui-react';
import DeleteFavorites from './DeleteFavorites';
import EditForm from './EditForm';
import ShowEdit from './ShowEdit'
import './index.css'

class Favorites extends React.Component{

		


	renderHelper(){
		var imageBaseURL = "http://image.tmdb.org/t/p/w185";
		return (

			this.props.favoritesList.map((favorite) =>{
			
			return(

				
				<div key={favorite.title} className='sideComponent'>
					
					<div>
							<img 
								src={`${imageBaseURL}${favorite.poster}`}
								className=''
								alt=''
							/>	
								<DeleteFavorites title={favorite.title}/>
					</div>

					<div className='rightFavorite'>
							<h1 className=''>{favorite.title}
								<div className=''>{favorite.tagline}</div>
							</h1>
								
							<Rating 
								icon='star' 
								defaultRating={favorite.rating} 
								maxRating={10} 
								size='huge'
								/>
							<div className="ui hidden divider"></div>
							{favorite.overview}
							<div className="ui hidden divider"></div>

							<strong>Notes:</strong>
							<div>
							{this.props.editText[favorite.title]}
							</div>
							
							<div className='ui hidden divider'></div>

								<ShowEdit title={favorite.title} />
							

							<div className='ui medium black labels'>
							{favorite.genres.map(genre => {
								return (
									<div key={genre.name} className='ui label'>
										{genre.name}
									</div>
									);
							})}
							</div>								
					</div>

				</div>
			);
		})

		)	
	}


	render(){
		return(
			<div>
				<Header/>
				<div className='ui'>
					{this.renderHelper()}
					
					
				</div>
			</div>
			);
	}
}

	const mapStateToProps = (state) => {
		return{
			favoritesList: state.addFavorite,
			editText: state.edit
		};
	}


export default connect(mapStateToProps)(Favorites);