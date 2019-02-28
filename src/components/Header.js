import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { getSearch } from '../actions';
import history from '../history';

class Header extends React.Component {
	
	onSubmit = (formValues) => {
	
		history.push(`/search/${formValues.search}`)
		this.props.getSearch(formValues.search)


	}

	render(){
		return(
			<div className='ui segment center aligned container'>
				<h1>Movies</h1>
				<div className='ui horizontal list'>
					<div className='item'>
						<Link to='/'>
						<h1 className='ui sub header'>Trending</h1>
						</Link>
					</div>
					<div className='item'>
						<Link to='/favorites'>
						<h1 className='ui sub header'>Favorites</h1>
						</Link>
					</div>
				</div>
				<SearchBar onSubmit={this.onSubmit} />
			</div>
		);
	}
};

export default connect(null, { getSearch })(Header);