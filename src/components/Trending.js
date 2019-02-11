import React from 'react';
import Header from './Header';
import tmdb from '../apis/tmdb';
import { connect } from 'react-redux';
import { getTrending } from '../actions';

class Trending extends React.Component{
	componentDidMount(){
		this.props.getTrending();
	}




	render(){
		return(
			<div>
			Trending
			<Header />
			{this.props.trending}

			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		trending : state.trending
	}
};

export default connect(mapStateToProps, { getTrending })(Trending);