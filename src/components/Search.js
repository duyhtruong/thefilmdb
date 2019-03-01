import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { getSearch } from '../actions';


class Search extends React.Component{
	
	componentDidMount(){
		this.props.getSearch(this.props.match.params.title)
	}

	renderList(){
			var imageBaseURL = "http://image.tmdb.org/t/p/w342";
		
			return this.props.searchState.map(searchResult=>{
					return (
						<div key={searchResult.id} className='column'>
							<Link to={`/movie/${searchResult.id}`}>
							<img 
								className='ui fluid image'
								src={`${imageBaseURL}${searchResult.poster_path}`} 
								alt=''
							/>
							</Link>
						</div>
						);
				});
		}

	render(){
		return (
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
		searchState : Object.values(state.search)
	}
};

export default connect(mapStateToProps, { getSearch })(Search);

