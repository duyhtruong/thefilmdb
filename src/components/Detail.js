import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getDetail } from '../actions';
import { addFavorite } from '../actions';
import './index.css';
import { Rating } from 'semantic-ui-react';

class Detail extends React.Component{
	componentDidMount(){
		this.props.getDetail(this.props.match.params.id)
	}





	genreRender(){
		if(!this.props.detail.detailsResult){
			return(
				<div>Loading...</div>
				)
		}
		else{
		
		const genreRenders = this.props.detail.detailsResult.genres.map((genre) => {
			return(
			
					<div className='ui label' key={`${genre.id}`}>
						{genre.name}
					</div>
				
				)
				
			});
		return genreRenders
		
		}
	}





	helperRender(){
		const apiKey = '?api_key=23df4f4dded45215846668f78df6e8e8';
		

		if(!this.props.detail.detailsResult){
			return(
				<div>Loading</div>
				)
		}
		else{
			const detailPoster = `https://image.tmdb.org/t/p/original/${this.props.detail.detailsResult.poster_path}${apiKey}`
		return (
			
			<div className='ui relaxed items'>

				<div className='item'>

				<div className='ui fluid centered large image'>
					<img src={`${detailPoster}`} alt='' />
				</div>
				<div className='content'>
					<h1 className='headerFont'>
						{this.props.detail.detailsResult.original_title}
					</h1>

					<Rating 
						icon='star' 
						defaultRating={this.props.detail.detailsResult.vote_average} 
						maxRating={10} 
						size='massive'
						/>

					<div className='meta'>
						{this.props.detail.detailsResult.tagline}
						<br />
						{this.props.detail.detailsResult.release_date}
					</div>
					<div className="ui hidden divider"></div>
					<div className='descriptionFont'>
						{this.props.detail.detailsResult.overview}
					</div>
					<div className="ui hidden divider"></div>

					<div className='ui big black labels'>
						{this.genreRender()}
					</div>
					
					<br/>
					<br/>
					{this.addFavoritesRender()}
					
				
				</div>
				</div>
			</div>
			)
		}
	}

	handleClick = () => {
		
		this.props.addFavorite(this.props.detail.detailsResult);
	}

	addFavoritesRender(){
		return (
			<div>
				<button onClick={this.handleClick} className='huge ui labeled icon red  button'>
				<i className='heart icon'></i>
				Add this movie to your Favorites
				</button>
			</div>
		)
	}


	render(){
		return(
			<div>
				<Header />
				{this.helperRender()}
			
			
			</div>

		);
	}
}

const mapStateToProps = (state) => {
	return {
		detail: state.detail
	}
}

export default connect(mapStateToProps, { getDetail, addFavorite })(Detail);