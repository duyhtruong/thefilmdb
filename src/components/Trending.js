import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getTrending } from '../actions';
import { Link } from 'react-router-dom';

class Trending extends React.Component{
	componentDidMount(){
		this.props.getTrending();
	}

	renderList(){
		var imageBaseURL = "http://image.tmdb.org/t/p/w342";
	
		return this.props.trending.map(trend=>{
				return (
					<div key={trend.id} className='column'>
						<Link to={`/movie/${trend.id}`}>
						<img 
							className='ui fluid image'
							src={`${imageBaseURL}${trend.poster_path}`} 
							alt=''
						/>
						</Link>
					</div>
					);
			});
	}


	render(){
		return(
			<div>
			<Header />
			
				<div className='ui stackable three column grid'>
					{this.renderList()}
				</div>
			
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		trending : Object.values(state.trending)
	}
};

export default connect(mapStateToProps, { getTrending })(Trending);